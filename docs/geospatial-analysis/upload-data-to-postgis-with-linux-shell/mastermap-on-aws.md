---
sidebar_position: 5
---

# 1. CONNECT TO AWS SERVER
ssh -i "$HOME/.ssh/key.pem" ubuntu@ec2-123.eu-north-1.compute.amazonaws.com

# 2. INSTALL REQUIRED SOFTWARE
sudo apt update
sudo apt install docker.io
sudo apt install certbot python3-certbot-nginx

# 3. SETUP DIRECTORY FOR POSTGRES DATA
mkdir ~/data-volume

# 4. TRANSFER FILES FROM LAPTOP TO SERVER
# (Execute this command from the local machine, not inside the SSH session)
scp -i  /Users/reuben/.ssh/key.pem -r /Volumes/GoogleDrive/My\ Drive/Loader ubuntu@ec2-123.eu-north-1.compute.amazonaws.com:/home/ubuntu/

# 5. CONFIGURE LOADER
# Ensure to modify the loader.config parameters accordingly
ogr_cmd=ogr2ogr --config GML_EXPOSE_FID NO -append -skipfailures -f PostgreSQL PG:'dbname=postgres active_schema=public host=postgis user=postgres password=p sslmode=require' $file_path

# Run the loader script
python loader.py config.loader

# 6. DNS CONFIGURATION
# Log into domain name provider manually and add an www A name record for instance IP.

# 7. AWS SECURITY GROUPS
# Open port 443 and port 80 for the instance via the AWS console.

# 8. CERTBOT SETUP
sudo certbot certonly --nginx -d ecolazy.co.uk

# Add a cron job for auto-renewal of the certificate
(sudo crontab -l 2>/dev/null; echo "15 3 * * * /usr/bin/certbot renew --quiet") | sudo crontab -

# 9. DOCKER SETUP
sudo docker run -d \
  -p 5432:5432 \
  --name "postgis" \
  --restart unless-stopped \
  -v $HOME/data-volume:/var/lib/postgresql \
  -v /etc/letsencrypt:/etc/letsencrypt:ro \
  -e POSTGRES_PASSWORD=p \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_DB=postgres \
  tobi312/rpi-postgresql-postgis:14-3.3-alpine-arm64

# 10. POSTGRES SSL CONFIGURATION
# First, ensure the Postgres directory for certs exists
mkdir -p /etc/postgres-certs

# Create a script to update and set permissions for Postgres certificates
cat > update_postgres_certs.sh <<EOF
#!/bin/bash
cp /etc/letsencrypt/live/ecolazy.co.uk/fullchain.pem /etc/postgres-certs/
cp /etc/letsencrypt/live/ecolazy.co.uk/privkey.pem /etc/postgres-certs/
chown postgres:postgres /etc/postgres-certs/*
chmod 600 /etc/postgres-certs/privkey.pem
chmod 644 /etc/postgres-certs/fullchain.pem
EOF

chmod +x update_postgres_certs.sh

# Create a script for the Certbot post-hook
cat > certbot_post_hook.sh <<EOF
#!/bin/bash
docker exec postgis /update_postgres_certs.sh
docker restart postgis
EOF

chmod +x certbot_post_hook.sh

sudo certbot renew --post-hook "/home/ubuntu/certbot_post_hook.sh"

# Adjust Postgres configuration inside the container
sudo docker exec -it postgis bash -c "echo \"ssl_cert_file = '/etc/postgres-certs/fullchain.pem'\" >> /var/lib/postgresql/data/postgresql.conf"
sudo docker exec -it postgis bash -c "echo \"ssl_key_file = '/etc/postgres-certs/privkey.pem'\" >> /var/lib/postgresql/data/postgresql.conf"
sudo docker exec -it postgis bash -c "echo \"hostssl all all 0.0.0.0/0 md5\" >> /var/lib/postgresql/data/pg_hba.conf"

# Restart the PostGIS container
sudo docker restart postgis

# 11. TEST
# Use the provided credentials to test the connection
psql "host=host port=5432 dbname=postgres user=postgres sslmode=require" # Enter password when prompted
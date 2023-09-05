---
slug: live-network-map-for-womad-festival
title: Real-Time Map of WOMAD Festival Network - Monitoring Status and Coverage
authors: ecolazy
tags: [hello, docusaurus]
---

# Real-Time Map of WOMAD Festival Network - Monitoring Status and Coverage

Our web application provides users with access to live network device data and the ability to update device locations. When a device's location needs recording, users simply input the device's MAC address into the app. The app checks the MAC address against a list of available device MAC addresses in the database to ensure authenticity. If the MAC address is verified, it is marked as "deployed," and the user's phone coordinates (from the update) are added to the latitude and longitude columns. In case of an incorrect MAC address or one not matching any device in the database, the user is notified and prompted to enter a different MAC address.

Deployed devices are dynamically displayed on a real-time map, enabling users to easily view and locate them. Clicking on a device reveals detailed information such as device type, MAC address, IP address, and more. Additionally, users can select a device for deletion, updating the corresponding value in the "deployment status" column to "false" and removing latitude and longitude position data from the database.

For app testing and debugging purposes, we designed a BASH script to generate synthetic data. This script produces a CSV file with random MAC addresses, asset tags, device models, and locations, facilitating easy testing by uploading the data to the database. By using this script, we simulated various scenarios to ensure the app's functionality before deploying it in a live environment.





``` bash
#!/bin/bash

# Generate 100 random devices
for i in {1..100}
do
  # Generate a random MAC address
  mac=$(c=0; until [ $c -eq "6" ]; do printf ":%02X" $(( $RANDOM % 256 )); let c=c+1; done | sed s/://)

  # Generate a random asset number
  asset=$(( $RANDOM % 9999 + 1000 ))

  # Choose a random location from the locations.txt file
  location=$(shuf -n 1 locations.txt)

  # Choose a random model from the models.txt file
  model=$(shuf -n 1 models.txt)

  # Output the device information to a CSV file
  echo "$asset, $mac, $model, $location"
done > devices.csv
```



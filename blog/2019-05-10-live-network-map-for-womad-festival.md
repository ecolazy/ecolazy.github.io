---
slug: live-network-map-for-womad-festival
title: Carte en Temps Réel du Réseau au Festival WOMAD - Visualisation de l'État et de la Couverture
authors: ecolazy
tags: [hello, docusaurus]
---

# Carte en Temps Réel du Réseau au Festival WOMAD - Visualisation de l'État et de la Couverture

Notre application web permet aux utilisateurs d'accéder et de mettre à jour les données de localisation des appareils du réseau. Lorsqu'il est nécessaire d'enregistrer la localisation d'un appareil, l'utilisateur entre simplement l'adresse MAC de l'appareil dans l'application. L'adresse MAC est ensuite vérifiée par rapport à une liste d'adresses MAC disponibles dans la base de données pour en assurer l'authenticité. Si l'adresse MAC existe dans la base de données, elle est marquée comme "déployée", et les coordonnées du téléphone de l'utilisateur, sur lequel la mise à jour a été effectuée, sont ajoutées aux colonnes de latitude et de longitude. Si l'adresse MAC est entrée de manière incorrecte ou ne correspond à aucun appareil dans la base de données, l'utilisateur est informé et invité à saisir une autre adresse MAC.

Les appareils déployés sont affichés en temps réel sur une carte, permettant aux utilisateurs de les visualiser et de les localiser facilement. Chaque appareil peut être cliqué pour afficher des informations telles que son type, son adresse MAC, son adresse IP, et bien plus encore. Les utilisateurs ont également la possibilité de sélectionner un appareil à supprimer, ce qui modifie la valeur correspondante dans la colonne "état de déploiement" pour la définir sur "faux" et supprime les valeurs de position de latitude et de longitude de la base de données.

Afin de faciliter les tests et le débogage de l'application, nous avons également développé un script BASH qui génère des données factices à des fins de test. Ce script génère un fichier CSV contenant des adresses MAC, des étiquettes d'actif, des modèles d'appareils et des emplacements aléatoires, qui peuvent ensuite être téléchargés dans la base de données à des fins de test. En utilisant ce script, nous avons pu simuler différentes situations pour vérifier le bon fonctionnement de l'application avant de la déployer dans un environnement réel.



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



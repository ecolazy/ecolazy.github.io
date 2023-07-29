---
slug: inspire-index-polygon-house-prices
title: INSPIRE Index Polygon House Prices - A Map of Average Sale Prices
authors: ecolazy
tags: [hello, docusaurus]
---

# INSPIRE Index Polygon House Prices - A Map of Average Sale Prices
Préparation des données de prix
Pour analyser et visualiser efficacement les données immobilières, il est essentiel de bien organiser et traiter les données en amont. Dans ce but, notre équipe a combiné trois fichiers distincts contenant les données de prix payés en un seul fichier. Nous avons nettoyé et filtré les données en effectuant plusieurs étapes, notamment la suppression des guillemets, la sélection uniquement des lignes contenant "GL" suivi d'un nombre, l'impression de certaines colonnes, l'ajout de noms de colonnes et la suppression des lignes avec des valeurs nulles.

Une fois les données nettoyées et organisées, nous avons utilisé l'outil puissant ogr2ogr pour convertir un fichier contenant des informations cadastrales en un fichier PostgreSQL. Nous avons ensuite changé la projection de OSGB à WGS84 et l'avons importé dans une base de données. Pour stocker les données de manière structurée, nous avons créé des tables vides avec certaines colonnes dans la base de données lors d'une session psql.

Ensuite, grâce à la commande \copy et à SQL JOIN, nous avons combiné les données de prix et de coordonnées en fonction de leurs codes postaux communs. Nous avons ajouté une colonne pour les données géométriques et utilisé les données de latitude et de longitude pour créer des points. Enfin, nous avons calculé la valeur moyenne pour chacun des polygones en double.

En utilisant le logiciel de cartographie puissant QGIS, nous avons exporté la table de la base de données et modifié les propriétés de la couche pour un rendu visuel attrayant. Grâce à ce processus, nous avons pu organiser et analyser efficacement les données immobilières, extrayant ainsi des informations précieuses et acquérant une compréhension plus approfondie du marché.

![Docusaurus Plushie](/img/price-paid-parcel.jpg)

Problèmes rencontrés et améliorations
Au cours de notre analyse des données immobilières, nous avons rencontré un problème avec certaines des codes postaux qui n'étaient pas correctement associés aux polygones prévus. Cette situation risquait d'affecter considérablement l'exactitude et l'utilité de nos données.

Pour résoudre ce problème et améliorer la précision de nos données, nous avons décidé d'utiliser un ensemble différent de polygones (paroisses) avec une résolution plus basse pour le prochain projet. Nous espérions que cette approche permettrait d'associer les codes postaux de manière plus précise aux polygones prévus, ce qui donnerait un ensemble de données plus fiable.







# INSPIRE Index Polygon House Prices - A Map of Average Sale Prices

## Prepare prices data

In order to effectively analyze and visualize real estate data, it is important to first properly organize and process the data. To this end, our team combined three separate files containing price paid data into a single file and cleaned and filtered the data through a series of steps. These steps included the removal of quotes, the selection of only rows with "GL" followed by a number, the printing of certain columns, the addition of column names, and the deletion of rows with null values.

Once the data was cleaned and organized, we used the powerful tool ogr2ogr to convert a file with cadastral parcel information into a PostgreSQL file. We then changed the projection from OSGB to WGS84 and imported it into a database. In order to store the data in a structured manner, we started a psql session and created empty tables with certain columns in the database.

Next, we used the \copy command and SQL JOIN to combine the price and coordinates data based on their shared postcodes. We added a column for geometry data and used the latitude and longitude data to create points. We then calculated the average value for each of the duplicate polygons.

Finally, we used the powerful mapping software QGIS to export the table from the database and modified the layer properties for visual appeal. Through this process, we were able to effectively organize and analyze the real estate data, allowing us to extract valuable insights and gain a deeper understanding of the market.


![Docusaurus Plushie](/img/price-paid-parcel.jpg)

During our analysis of real estate data, we encountered an issue with some of the postal codes not being properly associated with the intended polygons. This issue had the potential to significantly impact the accuracy and usefulness of our data.

To address this issue and improve the accuracy of our data, we decided to use a different set of polygons (parishes) with a lower resolution for the next project. We hoped that this approach would help to more accurately associate the postal codes with the intended polygons, resulting in a more reliable dataset.
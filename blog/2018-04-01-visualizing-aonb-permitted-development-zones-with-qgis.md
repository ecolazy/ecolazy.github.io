---
slug: visualizing-aonb-permitted-development-zones-with-qgis
title: "Visualisation des Zones de Développement Autorisées dans les AONB avec QGIS - Optimisation de l'Analyse de Site"
authors: ecolazy
tags: [hola, docusaurus]
---
# Visualisation des Zones de Développement Autorisées dans les AONB avec QGIS : Optimisation de l Analyse de Site

Nous utilisons fréquemment des logiciels SIG pour identifier les zones les plus propices au développement immobilier. Une méthode que nous employons consiste à importer des polygones topographiques d'OS MasterMap dans le logiciel et à utiliser l'outil de tampon pour créer des lignes autour de ces polygones. Cela nous permet de visualiser les zones où la construction est autorisée en fonction de diverses restrictions de zonage et réglementaires.

Par exemple, dans les zones de beauté exceptionnelle, les dépendances d'une superficie supérieure à 10 m² doivent être situées dans un rayon de 20 mètres de la maison principale. Pour identifier les zones où nous pouvons construire des dépendances conformément à cette réglementation, nous utilisons l'outil de tampon avec un rayon de 20 mètres autour du polygone de la maison principale. Cela crée une ligne autour de la maison principale représentant la zone dans laquelle nous sommes autorisés à construire des dépendances.

De plus, si la dépendance proposée est située à moins de 2 mètres de la limite de propriété, sa hauteur totale est limitée à seulement 2,4 mètres. Pour nous aider à identifier la meilleure zone pour construire dans ces contraintes, nous créons un tampon autour de la limite de propriété à l'aide de l'outil de tampon. La zone où le tampon autour de la maison principale chevauche l'inverse du tampon autour de la limite de propriété représente la zone où nous sommes autorisés à construire une dépendance avec un toit en pente jusqu'à 4 mètres de hauteur (avec une hauteur de corniche de 2,5 mètres) ou un toit plat jusqu'à 3 mètres de hauteur.

En utilisant ces outils SIG, nous sommes en mesure d'identifier efficacement et précisément les zones les plus appropriées pour le développement immobilier. Cette approche d'analyse de site rationalisée nous permet de prendre des décisions éclairées, en garantissant le respect des réglementations et en optimisant le potentiel de chaque projet.



# Visualizing AONB Permitted Development Zones with QGIS: Streamlining Site Analysis

GIS software serves as an invaluable tool in our quest to identify optimal areas for building development. One effective method involves importing topographic polygons from OS MasterMap into the software and utilizing the buffer tool to generate delineations around these polygons. This process enables us to visualize permitted development zones based on various zoning and regulatory constraints.

For instance, in areas designated as Areas of Outstanding Natural Beauty (AONB), specific rules apply to outbuildings. Outbuildings with a floor area exceeding 10m2 must be situated within 20 meters of the main dwelling house. To pinpoint suitable locations for compliant outbuildings, we create a buffer zone with a radius of 20 meters around the main dwelling house polygon. This delineates the area where outbuildings may be constructed in adherence to regulations.

Moreover, if the proposed outbuilding is within 2 meters of the property boundary, its overall height is limited to 2.4 meters. To identify the most suitable area that meets these criteria, we create a buffer around the property boundary using the buffer tool. The overlapping area between the buffer around the dwelling house and the inverse of the buffer around the property boundary defines the permissible zone for building an outbuilding with a pitched roof up to 4 meters tall (with an eaves height of 2.5 meters) or a flat roof up to 3 meters tall.

By harnessing the power of these GIS tools, we effectively and accurately identify the prime areas for building development. This streamlined site analysis approach empowers us to make well-informed decisions, ensuring compliance with regulations and maximizing the potential of each project.







![Docusaurus Plushie](/img/permitted-development.jpg)

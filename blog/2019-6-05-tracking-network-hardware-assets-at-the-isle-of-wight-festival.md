---
slug: tracking-network-hardware-assets-at-the-isle-of-wight-festival
title: Gestion Efficace des Actifs Matériels du Réseau lors du Festival de l'Île de Wight
authors: ecolazy
tags: [hello, docusaurus]
---

# Gestion Efficace des Actifs Matériels du Réseau lors du Festival de l'Île de Wight

Le Festival de l'Île de Wight 2019, qui s'est tenu au parc de Seaclose, a été un événement de grande envergure avec des arènes et des champs s'étendant sur 3 km. Le déploiement de l'infrastructure du réseau était une tâche complexe visant à assurer une connectivité sans faille sur l'ensemble du site. Pour y parvenir, des armoires réseau ont été installées stratégiquement dans chaque arène, interconnectées par des kilomètres de câbles à fibre optique. Ces armoires étaient également reliées à de multiples connexions ADSL liées entre elles, offrant une connexion Internet robuste et fiable.

Pour étendre la connectivité à l'intérieur de chaque arène, de plus petits commutateurs réseau ont été placés à moins de 100 mètres des armoires. Les zones situées au-delà de cette distance étaient connectées à l'aide de liens sans fil point-à-point, montés sur des poteaux fixés aux côtés des tentes ou émis à travers l'arène depuis des secteurs sans fil montés sur des nacelles. Aux emplacements éloignés, des récepteurs sans fil point-à-point étaient fixés aux côtés des tentes pour capter ces signaux.

Outre l'infrastructure du réseau, un système de vidéosurveillance complet était essentiel pour garantir la sécurité des participants. À cette fin, chaque arène était équipée d'au moins une nacelle munie d'une caméra de vidéosurveillance panoramique-inclinable-zoom. Des caméras supplémentaires étaient installées sur des poteaux d'échafaudage, des arches d'accès et des côtés des scènes. Le WiFi était également disponible dans les zones d'hébergement et de camping, tandis que des bureaux temporaires étaient équipés de WiFi et de téléphones VoIP pour une communication interne et externe efficace.

Pour faciliter le déploiement et la gestion du réseau, nous avons utilisé divers outils et ressources. Par exemple, nous avons utilisé l'outil 'Aligner Raster' de QGIS pour géoréférencer une image haute définition du plan du site, que nous avons ensuite téléchargée sur Mapbox pour créer une carte web basique avec Leaflet.js. Cette carte web utilisait la géolocalisation du téléphone hôte pour positionner des marqueurs, facilitant ainsi l'identification de l'emplacement exact des tentes nécessitant une connexion. Nous avons également utilisé l'application 'Map Marker' sur Android pour localiser et déployer rapidement les dispositifs réseau.

Après l'événement, la carte s'est avérée inestimable pour localiser et récupérer tout le matériel. Cela s'est avéré particulièrement utile car le personnel chargé d'enquêter sur les pannes ou de récupérer le matériel était souvent différent de celui qui l'avait déployé, rendant difficile la localisation des dispositifs sans une carte à jour indiquant leurs emplacements et connexions précises. En utilisant cette carte, nous avons pu rapidement retracer les pannes du réseau et nous assurer que tout le matériel était correctement pris en compte. Dans l'ensemble, le déploiement et la gestion du réseau lors du Festival de l'Île de Wight ont été une réussite et un défi complexe, contribuant au bon déroulement de l'événement.






# Efficient Network Hardware Asset Management at the Isle of Wight Festival

The Isle of Wight Festival 2019, held at Seaclose Park, was a massive event with sprawling arenas and fields covering 3km. The deployment of the network infrastructure was a complex undertaking to ensure seamless connectivity across the site. To achieve this, network cabinets were strategically set up in each arena, interconnected with miles of fiber optic cables. These cabinets were further linked to multiple bonded ADSL connections, providing a robust and reliable internet connection.

To extend connectivity within each arena, smaller network switches were positioned within 100 meters of the cabinets. Areas beyond this range were connected using wireless point-to-point links, mounted on poles attached to the sides of tents or beamed across the arena from wireless sectors mounted on cherry pickers. At distant locations, wireless point-to-point receivers were attached to the sides of tents to capture these signals.

Besides the network infrastructure, a comprehensive CCTV system was crucial for ensuring attendee safety. To achieve this, each arena was equipped with at least one cherry picker, hosting a pan-tilt-zoom CCTV camera. Additional cameras were installed on scaffolding poles, gateway arches, and stage sides. WiFi was also provided in the crew and camping areas, while temporary offices were equipped with WiFi and VoIP phones for efficient internal and external communication.

To facilitate the deployment and management of the network, we employed various tools and resources. For instance, we utilized QGIS's 'Align Raster' tool to georeference a high-definition site map image, which was then uploaded to Mapbox to create a basic Leaflet.js web map. This web map utilized the host phone's geolocation to position markers, aiding in identifying the exact location of tents requiring connectivity. We also utilized the 'Map Marker' app on Android to rapidly locate and deploy network devices.

After the event, the map proved invaluable in locating and retrieving all equipment. This was especially helpful as the staff members responsible for investigating faults or retrieving hardware were often different from those who deployed them, making it challenging to locate devices without an updated map showing their precise locations and connections. By utilizing this map, we efficiently traced faults in the network and ensured that all equipment was accounted for. Overall, the deployment and management of the network at the Isle of Wight Festival was a successful and intricate endeavor, contributing to the smooth operation of the event.







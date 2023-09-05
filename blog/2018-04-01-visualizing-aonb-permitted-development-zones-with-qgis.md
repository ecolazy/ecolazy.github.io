---
slug: visualizing-aonb-permitted-development-zones-with-qgis
title: Visualizing AONB Permitted Development Zones with QGIS - Streamlining Site Analysis
authors: ecolazy
tags: [hola, docusaurus]
---

# Visualizing AONB Permitted Development Zones with QGIS: Streamlining Site Analysis

GIS software serves as an invaluable tool in our quest to identify optimal areas for building development. One effective method involves importing topographic polygons from OS MasterMap into the software and utilizing the buffer tool to generate delineations around these polygons. This process enables us to visualize permitted development zones based on various zoning and regulatory constraints.

For instance, in areas designated as Areas of Outstanding Natural Beauty (AONB), specific rules apply to outbuildings. Outbuildings with a floor area exceeding 10m2 must be situated within 20 meters of the main dwelling house. To pinpoint suitable locations for compliant outbuildings, we create a buffer zone with a radius of 20 meters around the main dwelling house polygon. This delineates the area where outbuildings may be constructed in adherence to regulations.

Moreover, if the proposed outbuilding is within 2 meters of the property boundary, its overall height is limited to 2.4 meters. To identify the most suitable area that meets these criteria, we create a buffer around the property boundary using the buffer tool. The overlapping area between the buffer around the dwelling house and the inverse of the buffer around the property boundary defines the permissible zone for building an outbuilding with a pitched roof up to 4 meters tall (with an eaves height of 2.5 meters) or a flat roof up to 3 meters tall.

By harnessing the power of these GIS tools, we effectively and accurately identify the prime areas for building development. This streamlined site analysis approach empowers us to make well-informed decisions, ensuring compliance with regulations and maximizing the potential of each project.







![Docusaurus Plushie](/img/permitted-development.jpg)

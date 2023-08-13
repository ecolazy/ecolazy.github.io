---
sidebar_position: 7
---

# Scrape ArcGIS REST API GeoJSON Data


``` python
import requests

base_url = "https://example.com/server/rest/services/ext/"
output_folder = "output/"

list_items = [
"item_1", "item_2"
]

for list_item in list_items:
    for endpoint in range(0, 100):
        query_url = f"{base_url}{list_item}/FeatureServer/{endpoint}/query?where=1%3D1&outFields=*&returnGeometry=true&f=geojson"

        try:
            response = requests.get(query_url)
            response.raise_for_status()  # Check for HTTP errors

            # Save response content as GeoJSON
            geojson_filename = f"{output_folder}{list_item}_{endpoint}.geojson"
            with open(geojson_filename, "wb") as f:
                f.write(response.content)

            print(f"Saved GeoJSON for endpoint {endpoint} of {list_item} to {geojson_filename}")

        except requests.exceptions.RequestException as e:
            print(f"Error retrieving data for endpoint {endpoint} of {list_item}: {e}")
```
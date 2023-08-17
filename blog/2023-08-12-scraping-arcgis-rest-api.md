---
slug: scraping-arcgis-rest-api
title: Scraping ArcGIS REST API
authors: ecolazy
tags: [hello, docusaurus]
---
# Title: A Guide to Web Scraping Data Using Python and Requests

## Web scraping has become an essential tool for collecting and analyzing data from various websites. In this blog post, we will explore how to scrape data using the Python requests library. We'll walk through a sample script that demonstrates how to extract information from web services and save it as GeoJSON files.

## Introduction to Web Scraping
Web scraping involves programmatically extracting data from websites. It can be used for a variety of purposes, including data analysis, research, and automation. However, it's crucial to understand the legal and ethical considerations surrounding web scraping, including respect for website terms of use and applicable laws.

## Setting Up the Environment
Before we dive into the code, make sure you have the requests library installed. You can install it using the following command:


``` bash
pip3 install requests
```

The Script: Scraping GeoJSON Data
Let's consider a scenario where we want to scrape GeoJSON data from a web service. Here's a sample script that demonstrates the process:

```python
python
Copy code
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
            response = requests.get(query_url, timeout=1)  # Corrected the placement of timeout parameter
            response.raise_for_status()  # Check for HTTP errors

            # Save response content as GeoJSON
            geojson_filename = f"{output_folder}{list_item}_{endpoint}.geojson"
            with open(geojson_filename, "wb") as f:
                f.write(response.content)

            print(f"Saved GeoJSON for endpoint {endpoint} of {list_item} to {geojson_filename}")

        except requests.exceptions.RequestException as e:
            print(f"Error retrieving data for endpoint {endpoint} of {list_item}: {e}")

```
## Explanation of the Script
Import the requests library to make HTTP requests.

Define the base_url and output_folder for the web service and output files, respectively.

Create a list of list_items representing the items you want to scrape.

Use nested loops to iterate through each list_item and a range of endpoints.

Construct the query URL by combining base_url, list_item, and the endpoint.

Send an HTTP GET request using requests.get() to fetch data from the URL.

Check for HTTP errors using response.raise_for_status().

Save the GeoJSON response content as a file in the specified output folder.

Handle exceptions using a try-except block to catch request-related errors.

Print messages indicating the progress and status of the scraping process.

## Conclusion
Web scraping with Python and the requests library provides a powerful way to extract and collect data from various web services. However, it's essential to follow ethical guidelines, respect website terms of use, and be aware of legal considerations. The provided sample script serves as a starting point for scraping GeoJSON data, and you can adapt it for other data types and websites.

Remember to always review the website's terms of use and consider the ethical implications of scraping before proceeding. Happy scraping!
---
sidebar_position: 3
---

# Creating a Heatmap of Bristol House Prices in QGIS from CSV Data

 [here](https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads).

## Step 1: Download and Filter Data

1. **Download the CSV Data:**
[link](https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads).

2. **Filter for Bristol Postcodes:**

   ```bash
   grep '^"[^"]*","[^"]*","[^"]*","BS[1-9] ' pp-complete.csv > pp-complete-bs.csv
    ```
# Step 2: Geocode the Data
## Geocode Using csv2geo:
Visit csv2geo.com to geocode the filtered CSV file. This will add latitude and longitude columns to your data.
Step 3: Import Data into QGIS
Open QGIS Project:
Open QGIS and create a new project.

## Add Geocoded CSV Layer:
To add the geocoded CSV data as a layer, follow these steps:

- a. Click on the "Layer" menu.

- b. Select "Add Layer" and then choose "Add Delimited Text Layer."

- c. Browse and select the bristol-pp.csv file.

- d. Specify the Longitude field for the X coordinate and the Latitude field for the Y coordinate.

# Step 4: Create the Heatmap
## Style as Heatmap:
Style the layer as a heatmap:

- a. Right-click on the added CSV layer in the "Layers" panel.

- b. Select "Properties" to open the layer properties dialog.

- c. In the "Symbology" tab, select the dropdown menu next to "Single symbol" and choose "Heatmap."

- d. Choose the Price field as the attribute for the heatmap.

- e. Customize the color ramp to represent low to high prices.

- f. Adjust the radius and other settings to fine-tune the heatmap appearance.

# Conclusion
By following these steps, you can easily create a heatmap in QGIS using CSV data. Heatmaps are a powerful way to visualize data intensity and can provide valuable insights into spatial patterns. This technique is particularly useful for analyzing real estate prices, population density, and more.
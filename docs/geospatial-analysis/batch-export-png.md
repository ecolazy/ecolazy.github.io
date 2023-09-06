---
sidebar_position: 2
---


# python and qgis layer png export
```python
from qgis.core import QgsProject, QgsMapSettings, QgsMapRendererParallelJob
from PyQt5.QtGui import QPainter, QColor, QFont
from PyQt5.QtCore import QSize
import os

def export_layer_as_image(layer, output_folder, width, height):
    project = QgsProject.instance()
    map_settings = QgsMapSettings()
    
    # Set the extent to the extent of the layer's features
    extent = layer.extent()
    
    # Adjust the map settings to the layer's extent
    map_settings.setExtent(extent)
    map_settings.setOutputSize(QSize(width, height))
    map_settings.setLayers([layer])
    map_settings.setBackgroundColor(QColor(255, 255, 255))  # Set background to white
    
    # Define the output image path
    output_image_path = os.path.join(output_folder, "{}.png".format(layer.name()))
    
    # Render the image
    render = QgsMapRendererParallelJob(map_settings)
    render.start()
    render.waitForFinished()
    image = render.renderedImage()
    
    # Use QPainter to paint the layer name on the image
    painter = QPainter()
    painter.begin(image)
    painter.setPen(QColor(0, 0, 0))  # Color of the text
    painter.setFont(QFont("Arial", 30))  # Font and size of the text
    painter.drawText(10, 40, layer.name())  # Position and text to draw
    painter.end()
    
    # Save the image with the layer name
    image.save(output_image_path, "png")

# Define parameters
output_folder = "/Users/reuben/Desktop/output/"  # Your specified output folder
width = 1080  # Adjust this for your desired output image width
height = 1080  # Adjust this for your desired output image height

# Ensure the output directory exists
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Loop through each layer and export
for layer in QgsProject.instance().mapLayers().values():
    if layer.type() == QgsMapLayer.VectorLayer:  # Check if the layer is a vector layer
        export_layer_as_image(layer, output_folder, width, height)
        print("Exported {}".format(layer.name()))
```
---
slug: vectorizing
title: From Images to Vector Art - Laser Cutting with Midjourney and AI Upscaling
authors: ecolazy
tags: [hello, docusaurus]
---

# From Images to Vector Art: Laser Cutting with Midjourney and AI Upscaling
## Step 1: Generate image with Midjourney

Prompt: peter pans london, black silhouette of victorian buildings, occasional shrubs growing from buildings, big ben --ar 3:1

##  Step 2: Upscale with Topaz Gigapixel AI
Batch upscale the images for better vectorization.

##  Step 3: Batch vectorize with vectorizer.ai API
Vectorize using vectorizer.ai
``` bash
#!/bin/bash
mkdir vectorized_svg

for file in *.png; do
  echo "Vectorizing $file to SVG"
  curl https://vectorizer.ai/api/v1/vectorize \
   -u <API KEY> \
   -F image=@$file \
   -F "processing.max_colors=2" \
   -o vectorized_svg/$(basename $file).svg
done


```


---
sidebar_position: 5
---

# AI Upscale


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

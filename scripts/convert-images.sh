#!/bin/bash

# Ensure target directory exists
if [ -z "$1" ]; then
  echo "Usage: ./convert-images.sh <directory>"
  echo "Example: ./convert-images.sh public/assets"
  exit 1
fi

TARGET_DIR="$1"

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
  echo "cwebp could not be found. Please install webp (e.g. brew install webp or sudo apt-get install webp)."
  exit 1
fi

echo "Converting images in $TARGET_DIR to WebP..."

# Find all JPG and PNG files and convert
find "$TARGET_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
  # Skip if the file doesn't exist (e.g., if paths have spaces and loop breaks)
  if [ ! -f "$img" ]; then continue; fi

  webp_path="${img%.*}.webp"

  # Proceed if the webp file doesn't already exist
  if [ ! -f "$webp_path" ]; then
    echo "Converting: $img"
    cwebp -q 80 "$img" -o "$webp_path" -quiet
    
    # Optional: remove original after successful conversion
    # if [ -f "$webp_path" ]; then
    #   rm "$img"
    # fi
  else
    echo "Already exists: $webp_path"
  fi
done

echo "✅ Conversion complete."

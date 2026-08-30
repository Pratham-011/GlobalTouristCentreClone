#!/usr/bin/env python3
import os
import sys
from PIL import Image

def generate_mobile_heroes(hero_dir="public/assets/hero", target_width=640, target_height=800, quality=82):
    if not os.path.exists(hero_dir):
        print(f"Error: Directory '{hero_dir}' does not exist.")
        sys.exit(1)

    # Supported image extensions
    valid_exts = ('.webp', '.jpg', '.jpeg', '.png')
    
    # Find all hero source images (ignoring existing -mobile images)
    files = [
        f for f in sorted(os.listdir(hero_dir))
        if f.lower().endswith(valid_exts) and not f.lower().endswith('-mobile.webp')
    ]

    print(f"Found {len(files)} hero images in '{hero_dir}'. Processing...\n")
    print(f"{'Source Image':<35} | {'Original':<10} | {'Mobile':<10} | {'Saved %':<8}")
    print("-" * 72)

    total_orig_size = 0
    total_new_size = 0
    processed_count = 0

    target_ratio = target_width / target_height

    for filename in files:
        img_path = os.path.join(hero_dir, filename)
        stem = os.path.splitext(filename)[0]
        output_filename = f"{stem}-mobile.webp"
        output_path = os.path.join(hero_dir, output_filename)

        try:
            with Image.open(img_path) as img:
                # Convert RGBA/P to RGB if converting PNG/GIF
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")

                w, h = img.size
                current_ratio = w / h

                if current_ratio > target_ratio:
                    # Image is wider -> crop width centered
                    new_w = int(h * target_ratio)
                    left = (w - new_w) // 2
                    crop_box = (left, 0, left + new_w, h)
                else:
                    # Image is taller -> crop height (focus upper-center at 35%)
                    new_h = int(w / target_ratio)
                    top = max(0, int((h - new_h) * 0.35))
                    crop_box = (0, top, w, top + new_h)

                cropped = img.crop(crop_box)
                resized = cropped.resize((target_width, target_height), Image.Resampling.LANCZOS)
                resized.save(output_path, "WEBP", quality=quality, optimize=True)

                orig_bytes = os.path.getsize(img_path)
                new_bytes = os.path.getsize(output_path)
                saved_pct = 100.0 * (1.0 - (new_bytes / orig_bytes)) if orig_bytes > 0 else 0.0

                total_orig_size += orig_bytes
                total_new_size += new_bytes
                processed_count += 1

                orig_kb = orig_bytes / 1024
                new_kb = new_bytes / 1024
                print(f"{filename:<35} | {orig_kb:>8.1f} KB | {new_kb:>8.1f} KB | {saved_pct:>6.1f}%")

        except Exception as e:
            print(f"Error processing {filename}: {e}")

    print("-" * 72)
    orig_mb = total_orig_size / (1024 * 1024)
    new_mb = total_new_size / (1024 * 1024)
    overall_saved = 100.0 * (1.0 - (total_new_size / total_orig_size)) if total_orig_size > 0 else 0.0
    print(f"Processed {processed_count} images successfully!")
    print(f"Total Original Size: {orig_mb:.2f} MB")
    print(f"Total Mobile Size:   {new_mb:.2f} MB")
    print(f"Total Space Saved:   {overall_saved:.1f}% ({orig_mb - new_mb:.2f} MB reduced)")

if __name__ == "__main__":
    hero_dir = sys.argv[1] if len(sys.argv) > 1 else "public/assets/hero"
    generate_mobile_heroes(hero_dir)

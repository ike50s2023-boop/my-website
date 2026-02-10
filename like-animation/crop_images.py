from PIL import Image
import os

def crop_borders(image_path, crop_pixels):
    try:
        img = Image.open(image_path)
        width, height = img.size
        # 枠線（点線）が含まれる周囲をトリミング
        # crop_pixels は上下左右から削るピクセル数
        left = crop_pixels
        top = crop_pixels
        right = width - crop_pixels
        bottom = height - crop_pixels
        
        cropped_img = img.crop((left, top, right, bottom))
        cropped_img.save(image_path)
        print(f"Successfully cropped {image_path}")
    except Exception as e:
        print(f"Failed to process {image_path}: {e}")

# 対象の画像ファイルパス
file1 = r"c:\Users\yhooa\Documents\Google Antigravity\antigravity-revenue\WEB\like-animation\public\assets\notion\2025-06-27_06h36_19.png"
file2 = r"c:\Users\yhooa\Documents\Google Antigravity\antigravity-revenue\WEB\like-animation\public\assets\notion\2025-06-27_06h37_01.png"

# 点線枠を消すために、少し大きめにトリミング (例えば 20px 程度)
# 実際の枠線の太さに応じて調整が必要だが、まずは安全策で 15px 程度削る
crop_pixels = 15

crop_borders(file1, crop_pixels)
crop_borders(file2, crop_pixels)

"""Render the PNG/ICO versions of img/favicon.svg (touching M and G subway bullets, M-train orange
and G-train green) for browsers and devices that don't use SVG icons. Keep CIRCLES in sync with the SVG.

Usage: python3 tools/build_icons.py
"""
from PIL import Image, ImageDraw, ImageFont

ORANGE, GREEN = "#FF6319", "#6CBE45"


# Bullets in the 64x64 units of img/favicon.svg: (cx, cy, r, color, letter).
CIRCLES = [(16, 32, 16, ORANGE, "M"), (48, 32, 16, GREEN, "G")]
LETTER_SIZE = 22  # same units
FONT = ("/System/Library/Fonts/Helvetica.ttc", 1)  # Helvetica Bold (macOS)


def icon(size, background=None, margin=0.0):
    # Draw at 8x and downsample for smooth edges.
    s = size * 8
    img = Image.new("RGBA", (s, s), background or (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    scale = s * (1 - 2 * margin) / 64
    off = s * margin
    font = ImageFont.truetype(FONT[0], round(LETTER_SIZE * scale), index=FONT[1])
    for cx, cy, r, color, letter in CIRCLES:
        x, y, rr = off + cx * scale, off + cy * scale, r * scale
        d.ellipse([x - rr, y - rr, x + rr, y + rr], fill=color)
        # Center the letter's ink, not its line box (which includes space for descenders).
        left, top, right, bottom = font.getbbox(letter)
        d.text((x - (left + right) / 2, y - (top + bottom) / 2), letter, fill="white", font=font)
    return img.resize((size, size), Image.LANCZOS)


if __name__ == "__main__":
    # favicon.ico at the site root, where crawlers (e.g. Slack) look for it.
    icon(64).save("favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    # iOS home-screen / iMessage icon: needs an opaque background and some padding.
    icon(180, background="#000000", margin=0.12).convert("RGB").save("img/apple-touch-icon.png")
    print("wrote favicon.ico, img/apple-touch-icon.png")

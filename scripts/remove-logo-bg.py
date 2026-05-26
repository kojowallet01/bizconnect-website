"""Remove white background from logo (edge flood-fill only)."""
from collections import deque
from pathlib import Path

from PIL import Image

PUBLIC = Path(__file__).resolve().parent.parent / "public"
LOGO = PUBLIC / "logo.png"
THRESHOLD = 250


def is_background(r: int, g: int, b: int, a: int) -> bool:
    return a > 0 and r >= THRESHOLD and g >= THRESHOLD and b >= THRESHOLD


def flood_remove_background(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    w, h = img.size
    px = img.load()
    visited = [[False] * w for _ in range(h)]
    queue: deque[tuple[int, int]] = deque()

    for x in range(w):
        queue.append((x, 0))
        queue.append((x, h - 1))
    for y in range(h):
        queue.append((0, y))
        queue.append((w - 1, y))

    while queue:
        x, y = queue.popleft()
        if x < 0 or x >= w or y < 0 or y >= h or visited[y][x]:
            continue
        visited[y][x] = True
        r, g, b, a = px[x, y]
        if not is_background(r, g, b, a):
            continue
        px[x, y] = (0, 0, 0, 0)
        queue.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))

    return img


def main() -> None:
    img = Image.open(LOGO)
    img = flood_remove_background(img)
    img.save(LOGO, optimize=True)
    img.save(PUBLIC / "favicon.png", optimize=True)
    print(f"Saved transparent logo: {LOGO}")


if __name__ == "__main__":
    main()

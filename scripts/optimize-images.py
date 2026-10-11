#!/usr/bin/env python3
"""
optimize-images.py — convierte las imágenes del sitio a WebP.

  python3 scripts/optimize-images.py            # convierte lo pendiente
  python3 scripts/optimize-images.py --dry-run  # solo muestra qué haría

Reglas (pensadas para cómo se muestra cada imagen):
  certs/*.png                        -> .webp q85, mismo tamaño; borra el .png
  img/proyectos/galeria/**/*.jpg|png -> .webp q85, mismo tamaño (se ven en el
                                        visor a pantalla completa); borra el original
  img/proyectos/*.jpg (portadas)     -> .webp q82 a 800 px de ancho para las
                                        tarjetas (se muestran a 400 px como máximo);
                                        el .jpg se conserva porque es la og:image
                                        de la página estática del proyecto

Es idempotente: si el .webp ya existe y es más nuevo que el original, lo salta.
Después de correrlo hay que apuntar las rutas nuevas en los datos
(projects-data.js, index.html, proyectos.html) y correr `node build-projects.js`.
Requiere Pillow (pip install pillow).
"""
import glob
import os
import sys

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRY = "--dry-run" in sys.argv

RULES = [
    # (patrón, calidad, ancho máximo, borrar original)
    ("certs/*.png", 85, None, True),
    ("img/proyectos/galeria/**/*.jpg", 85, None, True),
    ("img/proyectos/galeria/**/*.jpeg", 85, None, True),
    ("img/proyectos/galeria/**/*.png", 85, None, True),
    ("img/proyectos/*.jpg", 82, 800, False),
]


def convert(src, quality, max_w, delete):
    dst = os.path.splitext(src)[0] + ".webp"
    if os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
        return None
    im = Image.open(src)
    im = im.convert("RGBA") if im.mode in ("P", "RGBA", "LA") else im.convert("RGB")
    if max_w and im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
    before = os.path.getsize(src)
    if DRY:
        return (src, dst, before, None)
    im.save(dst, "WEBP", quality=quality, method=6)
    after = os.path.getsize(dst)
    if delete:
        os.remove(src)
    return (src, dst, before, after)


def main():
    os.chdir(ROOT)
    total_b = total_a = n = 0
    for pattern, q, w, delete in RULES:
        for src in sorted(glob.glob(pattern, recursive=True)):
            r = convert(src, q, w, delete)
            if not r:
                continue
            n += 1
            total_b += r[2]
            if r[3] is not None:
                total_a += r[3]
                print("%-80s %6d KB -> %5d KB" % (r[1], r[2] // 1024, r[3] // 1024))
            else:
                print("convertiría %s -> %s" % (r[0], r[1]))
    if n and not DRY:
        print("\n%d imágenes: %d KB -> %d KB (%d%% menos)" % (n, total_b // 1024, total_a // 1024, 100 - total_a * 100 // max(total_b, 1)))
    elif not n:
        print("Nada pendiente.")


if __name__ == "__main__":
    main()

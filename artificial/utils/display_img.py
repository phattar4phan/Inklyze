from pixcat import Image
from pathlib import Path

def display_and_describe(image: Path):
    # display image in terminal
    Image(image).show()
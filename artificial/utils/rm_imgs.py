# remove images from a given folder
import random
from pathlib import Path

# common modern image extensions
EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

def delete_imgs(directory: Path, n_remove: int) -> tuple[int, list[Path]]:
    # get image files in list by iterate through the directory
    # and check if it's a file and extension end with extensions
    # defined in variable "extensions"
    images = [f for f in directory.iterdir()
            if f.is_file() and f.suffix.lower() in EXTENSIONS]
    
    if n_remove > len(images):
        raise ValueError(
            f'Requested {n_remove} files but only {len(images)} available.'
        )
    else:
        # remove random n images (defined as n_remove
        to_delete = random.sample(images, n_remove)
    
    for file in to_delete:
        file.unlink() # remove file (pathlib: Path)
 
    return int(len(images)), to_delete
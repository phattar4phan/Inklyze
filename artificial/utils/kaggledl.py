# download datasets from kagglehub with automatic file handling
# and also dataset handle handling
import kagglehub
import shutil
from pathlib import Path

def download_from_kaggle(dataset: str, output_path: str) -> None:
    dataset = dataset.replace('"', '') # e.g. "phattar4phan/ocr-dataset" to phattar4phan/ocr-dataset
    path = kagglehub.dataset_download(dataset, output_dir=output_path)
    
    _dotcomplete = Path(f"{path}/.complete")
    shutil.rmtree(_dotcomplete)
    
#    return dataset, path
import kagglehub
import shutil
from colorama import Fore, init
from pathlib import Path

init(autoreset=True) # automatically reset terminal color

def download_from_kaggle(dataset: str, save_path: str):
    if "" in dataset:
        dataset = dataset.strip("'\"") # remove single/double quote(s) from the str
        # e.g. "phattar4phan/ocr-dataset" to phattar4phan/ocr-dataset
    path = kagglehub.dataset_download(dataset, output_dir=save_path)
    
    _dotcomplete = Path(f"{path}/.complete")
    shutil.rmtree(_dotcomplete)
    
    return dataset, path

# _test_:
# if __name__ == "__main__":
#     dataset_handle = input("Enter dataset handle: ").strip()
#     output = input("Save dataset to: ").strip()
#     dataset, path = download_from_kaggle(dataset=dataset_handle, save_path=output)
#     print(f'{Fore.GREEN}Downloaded{Fore.RESET}: {dataset} to {path} (automatically removed ".complete")')
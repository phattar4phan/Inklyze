import torch
import os
import kagglehub
import paddle
import paddleocr
import label_studio

print(f'Torch: {torch.__version__}')
print(f'Kagglehub: {kagglehub.__version__}')
print(f'Paddle: {paddle.__version__}')
print(f'PaddleOCR: {paddleocr.__version__}')
print(f'Label Studio: {label_studio.__version__}')
print(f'CUDA Available: {torch.cuda.is_available()}, Device: {torch.cuda.get_device_name(0)}')
print(f'Directory: {os.getcwd()}')
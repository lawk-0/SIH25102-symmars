# Dropout Pipeline Explanation for ML Engineers

#This notebook demonstrates a **regularization strategy** using dropout in a neural network to prevent overfitting when training on image datasets like Fashion MNIST.

#---

### 1. Importing Dependencies
#```python
import tensorflow as tf
from tensorflow.keras import layers, models, datasets
import matplotlib.pyplot as plt
#```
#We import **TensorFlow** (with Keras for model building), and Matplotlib for visualization.

#---

### 2. Loading and Preprocessing Data
#```python
(x_train, y_train), (x_test, y_test) = datasets.fashion_mnist.load_data()

# Normalize pixel values (0–255 → 0–1)
x_train, x_test = x_train / 255.0, x_test / 255.0
#```
#The Fashion MNIST dataset is loaded and normalized. Normalization improves convergence.

#---

### 3. Defining the Model with Dropout
#```python
model = models.Sequential([
    layers.Flatten(input_shape=(28, 28)),  # Flatten 28×28 image → 784 features
    layers.Dense(256, activation='relu'),  # Hidden layer
    layers.Dropout(0.5),                   # Dropout (50%) during training
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax') # Output layer (10 classes)
])
#```
#- **Dropout layers** randomly set 50% of inputs to 0 during training.
#- This prevents co-adaptation of neurons and reduces overfitting.

#---

### 4. Compiling the Model
#```python
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])
#```
#- **Adam optimizer** is used for adaptive learning.
#- **Sparse categorical crossentropy** is suitable since labels are integers.

#--

### 5. Training the Model
#```python
history = model.fit(x_train, y_train, epochs=10, 
                    validation_data=(x_test, y_test))
#```
#- The model is trained for **10 epochs**.
#- Validation accuracy helps track generalization.

#---

### 6. Evaluating the Model
#```python
test_loss, test_acc = model.evaluate(x_test, y_test)
print(f"Test Accuracy: {test_acc:.4f}")
#```
#This evaluates the model’s performance on unseen test data.

#---

### 7. Plotting Training & Validation Performance
#```python
plt.plot(history.history['accuracy'], label='Train Acc')
plt.plot(history.history['val_accuracy'], label='Val Acc')
plt.xlabel('Epochs')
plt.ylabel('Accuracy')
plt.legend()
plt.show()
#```
#The learning curves show whether the model is overfitting (training accuracy >> validation accuracy) or well-regularized.

#---

#✅ **Summary for ML Engineers:**
#- Dropout improves generalization by preventing overfitting.
#- Can be tuned with different dropout rates (commonly 0.2–0.5).
#- Works well in dense layers, and also applicable in CNNs.
#- Always monitor train vs validation accuracy to confirm effectiveness.
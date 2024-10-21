import os
import numpy as np
from flask import Flask, request, jsonify, render_template, Blueprint
import joblib


bp = Blueprint('cropRecommendationTwo', __name__,template_folder='templates', static_folder='static')

# Load the trained model

RANDOM_FOREST_MODEL_PATH = os.path.join(os.path.dirname(__file__), '../models/random_forest_model.pkl')
rf_model = joblib.load(RANDOM_FOREST_MODEL_PATH)

# Encoder classes
soil_type_classes = ['Alluvial Soil', 'Black Soil', 'Clay Soil', 'Red Soil']
crop_classes = ['All vegetables Tea Coffee Rubber Coconut Cashew Avocado',
                'Cotton Blackgram Oilseeds Pigeonpea',
                'Cotton Jowar Pigeonpea Blackgram',
                'Cotton Rice Pigeonpea Blackgram Sunflower',
                'Cotton Sorghum CerealCrops Blackgram',
                'Cotton Sugarcane Pigeonpea Sorghum',
                'Pearlmillet Basil Blackgram Sorghum',
                'Pearlmillet Maize Pigeonpea Greengram Garlic',
                'Pearlmillet Ragi Groundnut Potato All vegetables',
                'Soybean Pigeonpea Millets Greengram',
                'Soybean Pigeonpea Maize Sorghum']

# Route for the home page
@bp.route('/')
def index():
    return render_template('cropRecommendationTwo/index.html', soil_types=soil_type_classes)

# Route to handle the prediction
@bp.route('/predict', methods=['POST'])
def predict():
    try:
        # Get form data
        soil_type = request.form.get('soil_type')
        soil_depth = float(request.form.get('soil_depth'))
        ph = float(request.form.get('ph'))
        bulk_density = float(request.form.get('bulk_density'))
        ec = float(request.form.get('ec'))
        organic_carbon = float(request.form.get('organic_carbon'))
        soil_moisture_retention = float(request.form.get('soil_moisture_retention'))
        available_water_capacity = float(request.form.get('available_water_capacity'))
        infiltration_rate = float(request.form.get('infiltration_rate'))
        clay_percentage = float(request.form.get('clay_percentage'))

        # Encode soil type
        soil_type_encoded = soil_type_classes.index(soil_type)

        # Create feature array
        features = np.array([[soil_type_encoded, soil_depth, ph, bulk_density, ec, organic_carbon,
                              soil_moisture_retention, available_water_capacity, infiltration_rate, clay_percentage]])

        # Make prediction
        predicted_crop_index = rf_model.predict(features)[0]
        predicted_crop = crop_classes[predicted_crop_index]

        # Split the crops into separate columns (based on spaces)
        predicted_crop_list = predicted_crop.split()

        # Return the predicted crops as a list to the front-end
        return jsonify({'predicted_crop_list': predicted_crop_list})

    except Exception as e:
        return jsonify({'error': str(e)})
from .irrigation_water_requirement_route import bp as irrigation_water_requirement_bp
from .fertilizerRecommendation_route import bp as fertilizerRecommendation_bp
from .cropRecommendationTwo_route import bp as cropRecommendationTwo_bp
from .optimalCroppingSeason_route import bp as optimalCroppingSeason_bp

def register_blueprints(app):
    app.register_blueprint(irrigation_water_requirement_bp,url_prefix="/api/irrigation_water_requirement")
    app.register_blueprint(fertilizerRecommendation_bp,url_prefix="/api/fertilizerRecommendation")
    app.register_blueprint(cropRecommendationTwo_bp,url_prefix="/api/cropRecommendationTwo")
    app.register_blueprint(optimalCroppingSeason_bp,url_prefix="/api/optimalCroppingSeason")
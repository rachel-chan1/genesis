from rest_framework import serializers

from .models import User, CarbonFootprint

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password", "carbon_footprint"]

class CarbonFootprintSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarbonFootprint
        fields = ["id", "user", "carbon_footprint", "carbon_percentage"]
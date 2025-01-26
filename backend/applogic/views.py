from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render, get_object_or_404
# from django.views import generic

from .models import User, CarbonFootprint
from .serializers import UserSerializer, CarbonFootprintSerializer

# Create your views here.
class UserView(APIView):
    def get(self, request):
        user_id = request.query_params.get("user_id")
        user = get_object_or_404(User, id=user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    
    def add(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class ItemsView(generic.ListView):
#     model = User
#     template_name = "applogic/items.html"

class CarbonFootprintView(APIView):
    def post(self, request):
        user_id = request.data.get("user_id")
        user = get_object_or_404(User, id=user_id)

        carbon_footprint_instance, created = CarbonFootprint.objects.get_or_create(user=user)

        return Response({"user": user.username, "carbon_footprint": carbon_footprint_instance.carbon_footprint, "carbon_percentage": carbon_footprint_instance.carbon_percentage})
    
    def put(self, request):
        user_id = request.data.get("user_id")
        user = get_object_or_404(User, id=user_id)

        carbon_footprint_instance, created = CarbonFootprint.objects.get_or_create(user=user)
        carbon_footprint_instance.carbon_footprint -= 100
        carbon_footprint_instance.carbon_percentage = carbon_footprint_instance.carbon_footprint / 100
        carbon_footprint_instance.max = carbon_footprint_instance.carbon_footprint >= 100
        carbon_footprint_instance.save()

        return Response({"user": user.username, "carbon_footprint": carbon_footprint_instance.carbon_footprint, "carbon_percentage": carbon_footprint_instance.carbon_percentage})

class TransactionView(APIView):
    def post(self, request):
        user_id = request.data.get("user_id")
        user = get_object_or_404(User, id=user_id)

        carbon_footprint_instance, created = CarbonFootprint.objects.get_or_create(user=user)
        updated_footprint = carbon_footprint_instance.update_footprint()

        return Response({"user": UserSerializer(user).data, "updated_footprint": updated_footprint})
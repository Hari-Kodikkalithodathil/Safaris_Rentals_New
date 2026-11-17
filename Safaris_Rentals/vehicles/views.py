from django.shortcuts import render
from django.db.models import Q
from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from .models import Vehicle
from .serializers import VehicleSerializer

# Create your views here.

class VehicleAPIView(APIView):

    permission_classes=[AllowAny]

    def get(self, request, pk=None):

        if pk is not None:
            vehicle=get_object_or_404(
                Vehicle,
                pk=pk
            )

            serializer=VehicleSerializer(vehicle)

            return Response(
                serializer.data,
                status=status.HTTP_200_OK
            )

        vehicles=Vehicle.objects.filter(status="ACTIVE")

        search_query=request.query_params.get("search")

        if search_query:
            vehicles = vehicles.filter(
                Q(name__icontains=search_query) |
                Q(description__icontains=search_query)
            )

        vehicle_status = request.query_params.get("status")

        if vehicle_status:
            vehicles = vehicles.filter(
                status__iexact=vehicle_status
            )

        seating_capacity = request.query_params.get(
            "seating_capacity"
        )

        if seating_capacity:
            vehicles = vehicles.filter(
                seating_capacity=seating_capacity
            )

        serializer=VehicleSerializer(vehicles, many=True)

        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )
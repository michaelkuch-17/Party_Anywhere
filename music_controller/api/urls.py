from django.urls import path
from .views import RoomView, RoomCreateView

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', RoomCreateView.as_view())
]

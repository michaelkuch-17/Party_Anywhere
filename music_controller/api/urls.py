from django.urls import path
from .views import RoomView, RoomCreateView, GetRoom, RoomJoin, UserInRoom, RoomLeave

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', RoomCreateView.as_view()),
    path('get-room', GetRoom.as_view()),
    path('join-room', RoomJoin.as_view()),
    path('UIR', UserInRoom.as_view()),
    path('leave-room', RoomLeave.as_view()),
]

from django.urls import path 
from . import views 


urlpatterns = [
    path("", views.todo_list),
    path("<int:pk>/", views.todo_detail),
    #create endpoint
]



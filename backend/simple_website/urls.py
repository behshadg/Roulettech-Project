from django.contrib import admin # type: ignore
from django.urls import path, include # type: ignore
from api.views import HelloWorldView, WelcomeView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/hello/', HelloWorldView.as_view()),
    path('api/welcome/', WelcomeView.as_view()),
    path('', WelcomeView.as_view()),  
]

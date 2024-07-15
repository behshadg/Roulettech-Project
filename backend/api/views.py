from django.http import JsonResponse
from django.views import View

class HelloWorldView(View):
    def get(self, request):
        return JsonResponse({"message": "Hello, World!"})

class WelcomeView(View):
    def get(self, request):
        return JsonResponse({"message": "Welcome to my take-home assessment Django API."})
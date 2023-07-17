import requests
import datetime as dt



BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"
API_KEY= "d4bee7bcd457244d0769a9f082a38076"
CITY="Meerut"



def k_to_c(kelvin):
    celsius=kelvin - 273.15
    fahrenheit= celsius * (9/5)+32
    return celsius, fahrenheit

url=BASE_URL + "appid=" + API_KEY + "&q=" + CITY

response=requests.get(url).json()

temp_kelvin=response['main']['temp']
temp_celsius, temp_fahrenheit=k_to_c(temp_kelvin)
feels_like_kelvin=response['main']['feels_like']
feels_like_celcius, feels_like_fahrenheit=k_to_c(feels_like_kelvin)
wind_speed=response['main']['humidity']
description=response['weather'][0]['description']

print(f"Tempreature in {CITY}: {temp_celsius: .2f} degree celcius")



    
 
import requests
response = requests.get('http://localhost:8000/api/basic-user/', data={'username': 'admin', 'password': 'admin'})
print(response.json())

response = requests.get('http://localhost:8000/api/basic-user/', headers={'Accept':'application/json; version=2.0'}, data={'username': 'admin', 'password': 'admin'})
print(response.json())

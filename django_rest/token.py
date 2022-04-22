import requests

response = requests.post('http://127.0.0.1:8000/api-token-auth/',
                         data={'username': 'admin', 'password': '#'})
print(response.status_code)  # 200
print(response.json())  # {'token': 'ad810413a001a415fb1e82bbc0fe3b92ecd876d2'}

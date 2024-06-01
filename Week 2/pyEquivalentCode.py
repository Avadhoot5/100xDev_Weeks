import requests

send_obj = {
    "method": "GET"
}

url = "http://localhost:3001/sum?counter=100"
response = requests.get(url, data=send_obj)

if response.status_code == 200:
    value = response.json()
    print(value)
else:
    print("Error:", response.status_code)

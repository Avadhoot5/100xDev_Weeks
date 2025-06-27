import requests

send_obj = {
    "method": "GET",
    "counter": 10
}

url = "http://localhost:3000/sum"
response = requests.get(url, data=send_obj)

if response.status_code == 200:
    value = response.json()
    print(value)
else:
    print("Error:", response.status_code)

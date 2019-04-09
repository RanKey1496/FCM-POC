Make a POST to:

curl -X POST \
  https://fcm.googleapis.com/fcm/send \
  -H 'Authorization: key=key' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
    "notification": {
        "title": "Sopa de macaco xddddd",
        "body": "Jimbo eres asombroso",
        "click_action": "http://localhost:3000/",
        "icon": "https://cdn6.aptoide.com/imgs/1/5/a/15a712db7f4bfa20025186ae2fa8a0c3_icon.png?w=240"
    },
    "to": "userToken"
}'
EMAIL="pe@test.com" PASSWORD="TEST" CON_PASSWORD="TEST"

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
          "email": "'"${EMAIL}"'",
          "password": "'"${PASSWORD}"'",
          "password_confirmation": "'"${CON_PASSWORD}"'"
        }
  }'

echo

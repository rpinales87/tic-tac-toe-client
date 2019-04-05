
curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/${ID}" \
  --header "Content-type: application/json" \
  --data '{
  "game": {
    "cell": {
      "index": ,
      "value": " "
    },
    "over": false
  }
}'

echo

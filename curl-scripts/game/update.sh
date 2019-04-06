TOKEN="BAhJIiUwMWFhYTE4ZDNkNmI5N2EzMWYwZjRlM2M3ZTg2ODBhNwY6BkVG--42917eff4ca220dbd6e9ae7d876a3b72b60988db"
INDEX=3 VALUE="o" OVER=false ID=1553

curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --header "Content-type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo

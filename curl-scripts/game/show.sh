TOKEN="BAhJIiUwMWFhYTE4ZDNkNmI5N2EzMWYwZjRlM2M3ZTg2ODBhNwY6BkVG--42917eff4ca220dbd6e9ae7d876a3b72b60988db"

curl --include --request GET "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --header "Content-type: application/json" \
--header "Authorization: Token token=${TOKEN}" \

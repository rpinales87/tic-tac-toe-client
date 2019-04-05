#!/bin/bash

curl --include --request POST "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\
  --data '{
  "game": {
    "id": " ",
    "cells": ["","","","","","","","",""],
    "over": false,
    "player_x": {
      "id": " ",
      "email": " "
    },
    "player_o": null
  }
}'

echo

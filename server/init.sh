#!/bin/bash

curl -H "Content-Type: application/json" -X POST -d '{"name": "Zuivel", "shop":"aldi"}' localhost:8080/api/category
curl -H "Content-Type: application/json" -X POST -d '{"name": "Vlees", "shop":"aldi"}' localhost:8080/api/category
curl -H "Content-Type: application/json" -X POST -d '{"name": "Vis", "shop":"aldi"}' localhost:8080/api/category
curl -H "Content-Type: application/json" -X POST -d '{"name": "Pasta", "shop":"aldi"}' localhost:8080/api/category
curl -H "Content-Type: application/json" -X POST -d '{"name": "Diepvries", "shop":"aldi"}' localhost:8080/api/category
curl -H "Content-Type: application/json" -X POST -d '{"name": "Droge Voeding", "shop":"aldi"}' localhost:8080/api/category

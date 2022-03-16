# blockchain-fullstack

> Entry point to start the blockchain-fullstack server

## Build Setup



``` bash

# EXPORT data.fixer.io environment variable
$ EXPORT BLOCKCHAIN_URL=**BLOCKCHAIN_URL**

# make executable
$ chmod +x start-server.sh

# start 
$ ./start-server.sh


# Postman collection folder
$ /postman/

# External/internal endpoints
$ frontend-server localhost:3000 / 172.27.0.23
$ backend-server localhost:2020 / 172.27.0.22
$ graphql-server localhost:2020/graphql / 172.27.0.22/graphql
$ redis-commander-server 127.0.0.1:8081 / 172.27.0.21

All services running on the same virtual network
# Database


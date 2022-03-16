# blockchain-fullstack-server

> Entry point to start the blockchain-fullstack server

## Build Setup

- Install docker and docker-compose

``` bash

# RUN with docker (recommended)

# EXPORT blockchain environment variable and run docker compose
$ export BLOCKCHAIN_URL=https://blockchain.info && docker-compose up


# RUN with npm

# Install node_modules
$ chmod +x install.sh && ./install.sh
$ chmod +x start-server.sh && ./start-server.sh

# Postman collection and envrironment folder
$ /postman/

# External/internal endpoints
$ frontend-server localhost:3000 / 172.27.0.23
$ backend-server localhost:2022 / 172.27.0.22
$ graphql-server localhost:2022/graphql / 172.27.0.22/graphql
$ redis-commander-server 127.0.0.1:8081 / 172.27.0.21

All services running on the same virtual network
# Database


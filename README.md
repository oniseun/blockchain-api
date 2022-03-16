# blockchain-fullstack-server

> Entry point to start the blockchain-fullstack server

<p align="center">
  <img src="https://user-images.githubusercontent.com/8212534/158582944-1f27b0ff-c797-4517-a7ab-99deae9f2b83.jpeg" width="640" alt="Latest Blocks" /> <br/>
  <img src="https://user-images.githubusercontent.com/8212534/158582932-1ee2a71c-dfb1-4572-a20b-d87034d82242.png" width="640" alt="Block Detail" /> <br/>
  <img src="https://user-images.githubusercontent.com/8212534/158582913-62168511-a457-4b35-a27a-118288f4a062.jpg" width="640" alt="Block transactions" /> <br/>
</p>

## Build Setup

- Install docker and docker-compose

``` bash

# RUN with docker easily (recommended)
$ export BLOCKCHAIN_URL=https://blockchain.info && docker-compose up

then go to http://localhost:3000


# RUN with npm

# Install node_modules
$ create .env files for both /frontend and /backend folder from .envsample
$ chmod +x install.sh && ./install.sh
$ chmod +x start-server.sh && ./start-server.sh
## Test

# run tests for backend
$ cd /backend && npm run test

# run tests for frontend
$ cd /frontend && yarn test

# Postman collection and envrironment folder
$ /postman/

# External/internal endpoints
$ frontend-server localhost:3000 / 172.27.0.23
$ backend-server localhost:2022 / 172.27.0.22
$ graphql-server localhost:2022/graphql / 172.27.0.22/graphql
$ redis-commander-server 127.0.0.1:8081 / 172.27.0.21

All services running on the same virtual network
# Database


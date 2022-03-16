# blockchain-fullstack-server

> Entry point to start the blockchain-fullstack server

<p align="center">
  <img src="https://tinyurl.com/y7634ryu" width="320" alt="Latest Blocks" /> <br/>
  <img src="https://tinyurl.com/ycmvpvps" width="320" alt="Block Detail" /> <br/>
  <img src="https://tinyurl.com/yblqeq57" width="320" alt="Block transactions" /> <br/>
</p>
## Build Setup

- Install docker and docker-compose

``` bash

# RUN with docker easily (recommended)
$ export BLOCKCHAIN_URL=https://blockchain.info && docker-compose up

then go to http://localhost:3000


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


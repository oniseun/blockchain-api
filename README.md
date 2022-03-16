# blockchain-fullstack-server

> Entry point to start the blockchain-fullstack server

<p align="center">
  <img src="https://awesomescreenshot.s3.amazonaws.com/image/1532933/24156874-0f4b99e234c52180baba5d056627869f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220316%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220316T102606Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=6b790e7fc377e6e5f57e6d9054f98fd234109f2ccc04789d807cceb7e69ea878" width="320" alt="Latest Blocks" /> <br/>
  <img src="https://drive.google.com/file/d/1XXd6A4xZv22DxpmECTt-G7Iisg4a5G7C/view" width="540" alt="Block Detail" /> <br/>
  <img src="https://drive.google.com/file/d/1Ef5BK4lW5HsL6Gzl9Mzr_Do6E0mguQSQ/view" width="540" alt="Block transactions" /> <br/>
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


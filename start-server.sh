function run() {

    cd backend && pm2 start npm --name "backend" -- run "start:dev";

    cd frontend && pm2 start yarn --name "frontend" -- run "start";

    pm2 logs 

}

if [ -z $@ ]; then
    run
fi

$@
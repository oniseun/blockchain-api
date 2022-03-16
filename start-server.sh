function run() {
    
    docker-compose up
}

if [ -z $@ ]; then
    run
fi

$@
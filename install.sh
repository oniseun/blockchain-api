function run() {
 cd backend/ && npm i
 cd ..
 cd frontend/ && npm i
}

if [ -z $@ ]; then
    run
fi

$@
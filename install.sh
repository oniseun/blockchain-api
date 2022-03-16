function run() {
 cd backend/ && npm i
 cd ..
 cd frontend/ && yarn
}

if [ -z $@ ]; then
    run
fi

$@
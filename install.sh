function run() {
 cd backend/ && npm i
 cd ..
 cd frontend/ && yarn i
}

if [ -z $@ ]; then
    run
fi

$@
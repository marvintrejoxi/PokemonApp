# PokemonApp

## Instructions

* Git clone project `git@github.com:trejomarvin/PokemonApp.git`
* Move the project folder `cd PokemonApp`
* Install node modules, `npm install`
* Run `react-native start`
* In other terminal run `react native run-android`
* The server address must be in `localhost:8081`

## Problems with watchman

* Run `watchman watch-del-all && watchman shutdown-server`

## Connection limit problem in linux

* Run `sudo sysctl -w fs.inotify.max_user_instances=1024 && sudo sysctl -w fs.inotify.max_user_watches=12288`

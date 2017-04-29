## Simple server skeleton
Aka Simple stupid server (whatever you say) (BETA)

<p class="danger">
  Please Dont Use Windows, at least you run it on vagrant
</p>

base on
  - https://github.com/qawemlilo/node-mysql
  - https://blog.ragingflame.co.za/2014/12/16/building-a-simple-api-with-express-and-bookshelfjs

## How to use it
```sh
npm install
```

### Create Dummy Data
```sh
npm run data:reload
```

### Create Css
```sh
npm run build-css
```

### run via npm
run development mode
```sh
npm start
```
run production mode
```sh
npm run build # to transpile ES6
npm run serve # to run transpiled version
```

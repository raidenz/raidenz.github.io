## install knex manually
```sh
npm install -g knex
knex init
edit knexfile.js
knex migrate:make setup
```

### change environment
```knex migrate:latest --env production```

### run
```knex migrate:latest```

### rollback change
```knex migrate:rollback```

### seed database
```sh
$knex seed:make seedName #make migration
$knex seed:run # run migration
```


### run system
```sh
npm install
npm data:reload # to reload database, now use sqlite3 for testing
npm start # run the app

npm run build # to transpile ES6
npm run serve # to run transpiled version

```

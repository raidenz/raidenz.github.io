## Route

### Get JWT
post to: ```localhost:port/auth/token```
param: ```email,password```

### Get user
post to: ```localhost:port/auth/user```
param header: ``` Authorization: JWT jwtpass ```

### Curl
```sh
$ curl -d "email=sofia_nitzsche@example.com&password=secret" http://yourip:4738
```

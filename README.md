# 🐖 Emoji API

A lightweight Node.js apps collection using Express to create a simple greeting APIs with random emojis. Designed for learning Docker.

## Usage

Pull the *Docker* images:

```shell
$ docker pull sergiobarriel/emoji-api-animals
$ docker pull sergiobarriel/emoji-api-foods
$ docker pull sergiobarriel/emoji-api-sports
```

Run it:

```shell
$ docker run -p 5000:80 sergiobarriel/emoji-api-animals
$ docker run -p 5001:80 sergiobarriel/emoji-api-foods
$ docker run -p 5002:80 sergiobarriel/emoji-api-sports
```

Now, you can call the APIs on `localhost`

```shell
$ curl localhost:5000
🐖
$ curl localhost:5001
🍔
$ curl localhost:5002
🏈
```

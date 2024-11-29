# 🐒 Emoji API

A lightweight APIs with funny emojis. Designed for learning **Docker**.

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

If you clone the repo, you can spin up the three APIs at the same time with *Docker Compose*

```shell
$ docker compose up
sports-1   | 🏓 running on port 80
animals-1  | 🦀 running on port 80
foods-1    | 🍜 running on port 80
```

The you can make requests across all APIs by using `jump` endpoint and DNS names for each container:

```shell
$ curl localhost:5000/jump?url=http://foods/jump?url=http://sports
🐖 🍔 🏈
```

## Support

You can contact me via Twitter [@sergiobarriel](https://twitter.com/sergiobarriel), or if you have an [issue](https://github.com/sergiobarriel/emoji-api/issues), you can open one 🙂

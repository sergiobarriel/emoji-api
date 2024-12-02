# 🐒 Emoji API

A lightweight APIs with funny emojis. Designed for learning **Docker**.

## Usage

Pull the *Docker* images:

```shell
$ docker pull sergiobarriel/emoji-api-animals
$ docker pull sergiobarriel/emoji-api-foods
$ docker pull sergiobarriel/emoji-api-sports
```

Run them:

```shell
$ docker run -p 5000:80 sergiobarriel/emoji-api-animals
$ docker run -p 5001:80 sergiobarriel/emoji-api-foods
$ docker run -p 5002:80 sergiobarriel/emoji-api-sports
```

Now, you can make requests to the APIs on `localhost`

```shell
$ curl localhost:5000
🐖
$ curl localhost:5001
🍔
$ curl localhost:5002
🏈
```

If you clone the repository, you can spin up all the APIs at the same time using *Docker Compose*

```shell
$ docker compose up
animals-1  | 🐖 running on port 80
foods-1    | 🍔 running on port 80
sports-1   | 🏈 running on port 80
```

As in the previous example, you can make calls to each API from the *host* using their respective URIs

```shell
$ curl localhost:5000
🐖
$ curl localhost:5001
🍔
$ curl localhost:5002
🏈
```

But... what happens if you want to make calls from one API to another?

![Docker Network](img/docker%20network.png)

As shown in the diagram, Docker automatically creates a network, assigning an internal IP address and DNS name to each API.

For example, from your *host* you can access the *animals* container using `localhost:5000`, but from inside the *animals* container, you cannot access the *foods* container using `localhost:5001`. Instead, you must use the internal IP address (e.g., http://172.18.0.3) or its DNS name (e.g., http://foods)

Each API includes a route called `/jump`, which allows it to make an HTTP request to another URL via `/jump?url=http://www.example.com`

You can use this method to enable communication between APIs:

```shell
$ curl localhost:5000/jump?url=http://172.18.0.2
🐖 🐖 
```

```shell
$ curl localhost:5000/jump?url=http://foods/jump?url=http://sports
🐖 🍔 🏈
```

## Support

You can contact me via Twitter [@sergiobarriel](https://twitter.com/sergiobarriel), or if you have an [issue](https://github.com/sergiobarriel/emoji-api/issues), you can open one 🙂

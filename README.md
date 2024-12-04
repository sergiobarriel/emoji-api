# 🐒 Emoji API

A lightweight [animals](https://hub.docker.com/repository/docker/sergiobarriel/emoji-api-animals/general), [foods](https://hub.docker.com/repository/docker/sergiobarriel/emoji-api-foods/general) & [sports](https://hub.docker.com/repository/docker/sergiobarriel/emoji-api-sports/general) APIs with funny emojis. Designed for learning 🐋 **Docker**.

## Usage

Pull the *Docker* images:

```shell
$ docker pull sergiobarriel/emoji-api-animals
$ docker pull sergiobarriel/emoji-api-foods
$ docker pull sergiobarriel/emoji-api-sports
```

Run them:

```shell
$ docker run -p 5001:80 sergiobarriel/emoji-api-animals
$ docker run -p 5002:80 sergiobarriel/emoji-api-foods
$ docker run -p 5003:80 sergiobarriel/emoji-api-sports
```

Now, you can make requests to the APIs on `localhost`

```shell
$ curl localhost:5001
🐖
$ curl localhost:5002
🍔
$ curl localhost:5003
🏈
```

If you clone the repository, you can spin up all the APIs at the same time using *Docker Compose*

```shell
$ docker compose up
orchestrator-1 | 🎶 running on port 80
animals-1      | 🐖 running on port 80
foods-1        | 🍔 running on port 80
sports-1       | 🏈 running on port 80
```

When using Docker Compose, a new application named *orchestrator* will be launched. This application leverages environment variables and internal DNS to communicate with other APIs

In the provided [compose.yml](https://github.com/sergiobarriel/emoji-api/blob/main/src/compose.yml) file, you can see an environment block that defines several variables, which are passed directly to the container.
              
```yml
services:

    orchestrator:
        image: orchestrator
        ports:
            - "5000:80"
        environment:
            - ANIMALS_URL=http://animals:80
            - FOODS_URL=http://foods:80
            - SPORTS_URL=http://sports:80
            - ENVIRONMENT=dev

    # ...
    # ...
```

These environment variables can then be accessed by the application using the method `Environment.GetEnvironmentVariable("ANIMALS_URL")`


You can now make a request to `localhost:5000` and see the combined response from the other APIs.

```
$ curl localhost:5000
🐖 🍔 🏈
```

## Support

You can contact me via Twitter [@sergiobarriel](https://twitter.com/sergiobarriel), or if you have an [issue](https://github.com/sergiobarriel/emoji-api/issues), you can open one 🙂

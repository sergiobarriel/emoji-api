FROM node:23-slim

LABEL description="A lightweight Node.js app using Express to create a simple API with random emojis. Designed for learning Docker."
LABEL category="developer-tools"
LABEL org.opencontainers.image.title="Emoji API (animals)"
LABEL org.opencontainers.image.url="https://github.com/sergiobarriel/emoji-api"
LABEL org.opencontainers.image.licenses="MIT"

EXPOSE 80
WORKDIR /application
COPY . .
RUN npm install
ENTRYPOINT [ "node", "server.js" ]

FROM node:20-bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 python3-pip ffmpeg ca-certificates \
  && rm -rf /var/lib/apt/lists/*

RUN python3 -m pip install --no-cache-dir -U yt-dlp

WORKDIR /app
COPY package.json /app/package.json
COPY server.js /app/server.js

ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]


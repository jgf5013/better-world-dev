FROM node:18-alpine

# USER node
WORKDIR /usr/server/app

COPY web/apps/flashcards/package.json ./
COPY web/apps/flashcards/package-lock.json ./

RUN npm ci

COPY web/apps/flashcards/ ./

RUN npm run build

ENV NODE_ENV=production

# will launch the remix app when we run this Docker image.
CMD ["npm", "run", "start"]
EXPOSE 8080:8080
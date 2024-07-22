FROM node:18-alpine

# USER node
WORKDIR /usr/server/app

COPY web/apps/flashcards/package.json ./
COPY web/apps/flashcards/yarn.lock ./

RUN yarn install

COPY web/apps/flashcards/ ./

RUN yarn run build

ENV NODE_ENV=production

# will launch the remix app when we run this Docker image.
CMD ["yarn", "run", "start"]
EXPOSE 8080:8080
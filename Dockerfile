FROM node:18-alpine

# USER node
WORKDIR /bwd

COPY package.json ./
COPY package-lock.json ./

COPY . .
RUN npm ci
RUN npx nx run flashcards:build

# COPY /bwd/apps/flashcards ./
# RUN npm ci --only=production

CMD ["npx", "nx", "run", "flashcards:start"]
expose 3000:3000
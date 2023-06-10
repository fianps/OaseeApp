FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/ .

COPY . .

CMD ["npm", "start"]
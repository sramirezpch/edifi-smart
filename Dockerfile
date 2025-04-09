FROM node:20-alpine

WORKDIR /app

COPY . .

RUN yarn --frozen-lockfile && yarn build

EXPOSE 3001

CMD ["node", "dist/main.js"]
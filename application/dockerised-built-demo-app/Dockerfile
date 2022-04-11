#stage 1
FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
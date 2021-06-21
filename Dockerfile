#stage 1
FROM node:12.14-alpine AS builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY . .
RUN npm i
RUN npm run build --prod

#stage 2
FROM nginx:1.17.1-alpine
COPY --from=builder /usr/src/app/dist/ui-todo /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

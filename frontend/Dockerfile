# Stage 1 - build frontend app
FROM node:alpine as builder

WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY . .
COPY .env /app/.env
RUN npm run build

# Stage 2 - nginx & frontend dist
FROM nginx

COPY nginx/prod.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/ /dist/

CMD ["nginx", "-g", "daemon off;"]
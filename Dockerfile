FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# maxflow.ink is served from the domain root by nginx, so this build uses the
# default base ("/") and site (https://maxflow.ink). BASE_PATH is intentionally
# left unset.
ENV BASE_PATH=/
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

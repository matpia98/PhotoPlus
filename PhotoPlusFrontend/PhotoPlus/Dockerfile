### STAGE 1: Build ###
FROM node:18.19-alpine AS build
WORKDIR /usr/src/app

# Add OpenSSL legacy provider environment variable
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps
RUN npm install -g @angular/cli@13.3.11

COPY . .
RUN ng build --configuration production

FROM nginx:1.25-alpine

COPY --from=build /usr/src/app/dist/PhotoPlus /usr/share/nginx/html
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

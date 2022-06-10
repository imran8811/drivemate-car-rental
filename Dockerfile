FROM node:14 as builder

# Install Global libraries
RUN npm install -g @angular/cli@11.0.1
RUN npm install -g gzipper@4.3.0

# Create app directory
WORKDIR /app

ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc

# Install app dependencies, for disable the progress(npm set progress=false)
COPY package*.json /app/
RUN cd /app && npm install

# Copy project files into the docker image
COPY .  /app

# Build Application
RUN cd /app && npm run build
RUN cd /app && npm run build:en
RUN cd /app && npm run build:th
RUN cd /app && npm run build:zh-cn

# Apply Compression
RUN cd /app/dist/car-rental && npm run build:gzipper
RUN cd /app/dist/en-car-rental && npm run build:gzipper-en
RUN cd /app/dist/th-car-rental && npm run build:gzipper-th
RUN cd /app/dist/zh-cn-car-rental && npm run build:gzipper-zh-cn

# RUN cd /app/dist/landing-pages && ls -al

RUN rm -f .npmrc

FROM nginx:1.16.0-alpine

COPY --from=builder  /app/dist/car-rental /usr/share/nginx/html/car-rental
COPY --from=builder  /app/dist/en-car-rental /usr/share/nginx/html/en-car-rental
COPY --from=builder  /app/dist/th-car-rental /usr/share/nginx/html/th-car-rental
COPY --from=builder  /app/dist/zh-cn-car-rental /usr/share/nginx/html/zh-cn-car-rental

RUN cd /usr/share/nginx/html && ls -al

COPY ./config/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 8080
EXPOSE 8081
EXPOSE 8082
EXPOSE 443

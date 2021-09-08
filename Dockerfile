FROM node:16.3.0

WORKDIR /usr/app
ARG PORT
COPY ./package.json  ./
COPY ./yarn.lock ./

COPY ./dist ./dist
COPY ./.env ./.env

# RUN yarn

EXPOSE ${PORT}
# Running the app

CMD [ "yarn", "start" ]

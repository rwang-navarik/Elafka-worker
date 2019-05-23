FROM gcr.io/rule-six-dev/node:10.15-alpine-1.0.2 AS build_env
RUN apk add git openssh
RUN apk add python make g++
WORKDIR /usr/local/src/build
COPY . .
RUN ./build-setup.sh
RUN npm install && npm run lint && npm test
RUN ./build-cleanup.sh

FROM gcr.io/rule-six-dev/node:10.15-alpine-1.0.2
WORKDIR /usr/local/src/app
COPY --from=build_env /usr/local/src/build/ .

CMD node .

FROM navikt/node-express:12.2.0-alpine
WORKDIR /usr/src/app

COPY build/ build/

COPY src/ src/
COPY package.json package.json
COPY yarn.lock yarn.lock
WORKDIR /usr/src/app/server

RUN yarn install --frozen-lockfile

EXPOSE 3000
ENTRYPOINT ["yarn", "start"]

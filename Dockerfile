FROM navikt/node-express:14
WORKDIR /var/server

#USER apprunner

COPY public/ public/

COPY src/ src/
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --frozen-lockfile
RUN yarn build


EXPOSE 3000
ENTRYPOINT ["yarn", "start"]

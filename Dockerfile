FROM navikt/node-express:14
WORKDIR /usr/src/app

#USER apprunner

COPY public/ public/

COPY src/ src/
COPY package.json package.json
COPY yarn.lock yarn.lock
USER root
RUN chown -R apprunner /usr/src/app
USER apprunner
WORKDIR /usr/src/app

RUN yarn install --frozen-lockfile
RUN yarn build


EXPOSE 3000
ENTRYPOINT ["yarn", "start"]

FROM navikt/node-express:14
WORKDIR /var/server

COPY server/ ./server
COPY build/ ./build

## Give apprunner rights to application's build & run folders
USER root
RUN chown -R apprunner /var/server/build
RUN chown -R apprunner /var/server/server
USER apprunner

WORKDIR /var/server/server
RUN yarn install --frozen-lockfile

EXPOSE 3001
ENTRYPOINT ["node", "server.js"]

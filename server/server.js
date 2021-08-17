/* eslint-disable no-param-reassign, no-console */
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

const basePath = '/samtalestotte-podlet';
const buildPath = path.join(__dirname, '../build');


const startServer = () => {
    app.use(`${basePath}/static`, express.static(buildPath + '/static'));
    app.use(`${basePath}/asset-manifest.json`, express.static(buildPath + '/asset-manifest.json'));

    app.get([`${basePath}/internal/isAlive`, `${basePath}/internal/isReady`], (req, res) =>
        res.sendStatus(200)
    );

    app.listen(port, () => {
        console.log('Server kjører på port', port);
    });
};

startServer();

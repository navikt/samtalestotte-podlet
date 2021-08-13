/* eslint-disable no-param-reassign, no-console */
const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const fs = require('fs');
const app = express();
const port = process.env.PORT || 8080;

const basePath = '/samtalestotte-podlet';
const buildPath = path.join(__dirname, 'build');


const envPath = 'static/js/env.js';

const setupProxy = (fraPath, tilTarget, headers = undefined) =>
    createProxyMiddleware(fraPath, {
        target: tilTarget,
        changeOrigin: true,
        secure: true,
        headers: headers,
        pathRewrite: (path) => {
            const nyPath = path.replace(fraPath, '');
            console.warn(`~> Proxy fra '${path}' til '${tilTarget + nyPath}'`);

            return nyPath;
        },
    });

const manifestMedEnvpath = () => {
    const asset = JSON.parse(fs.readFileSync(`${buildPath}/asset-manifest.json`, 'utf8'));
    if (asset.files) {
        const name = envPath.split('/').pop();
        asset.files[name] = `${basePath}/${envPath}`;
    }
    return JSON.stringify(asset, null, 4);
};

const manifest = manifestMedEnvpath();

const startServer = () => {
    app.use(`${basePath}/static`, express.static(buildPath + '/static'));

    app.get(`${basePath}/asset-manifest.json`, (req, res) => {
        res.type('json').send(manifest);
    });

    app.get([`${basePath}/internal/isAlive`, `${basePath}/internal/isReady`], (req, res) =>
        res.sendStatus(200)
    );

    app.listen(port, () => {
        console.log('Server kjører på port', port);
    });
};

startServer();

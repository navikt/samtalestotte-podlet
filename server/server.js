/* eslint-disable no-param-reassign, no-console */
const path = require('path');
const express = require('express');

const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

const basePath = '/samtalestotte-podlet';
const buildPath = path.join(__dirname, '../build');

const tillateUrler = (cluster) =>{
    switch (cluster){
        case 'dev-gcp': return ['https://arbeidsgiver-q.nav.no','https://dev-fss.nais.io']
        case 'prod-gcp': return ['https://tjenester.nav.no']
        default: return []
    }
};

const corsOptions = {
    origin:
        process.env.IS_LOCALHOST ? ['http://localhost:3000'] : tillateUrler(process.env.NAIS_CLUSTER_NAME),
    optionsSuccessStatus: 200
}

const startServer = () => {
    app.use(cors(corsOptions));
    console.log('cors aktivert: ', corsOptions);
    app.use(`${basePath}/static`, express.static(buildPath + '/static'));
    app.use(`${basePath}/asset-manifest.json`, express.static(buildPath + '/asset-manifest.json'));
    app.use(`${basePath}/index.html`, express.static(buildPath + '/index.html'));

    app.get([`${basePath}/internal/isAlive`, `${basePath}/internal/isReady`], (req, res) =>
        res.sendStatus(200)
    );

    app.listen(port, () => {
        console.log('Server kjører på port', port);
    });
};

startServer();

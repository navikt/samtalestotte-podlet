import React, { FunctionComponent } from 'react';
import './index.css';
import App, { Visningsmodus } from './App';
import reportWebVitals from './reportWebVitals';
import Navspa from '@navikt/navspa';
import { AppProps } from './utils';
import { PROD_DOMENE_ARBEIDSGIVER } from './konstanter';

export const AppContainer: FunctionComponent<AppProps> = ({
    visning,
    prodDomener = [PROD_DOMENE_ARBEIDSGIVER],
    orgnr,
}) => {
    const visningsmodus = Visningsmodus[visning as keyof typeof Visningsmodus];
    return (
        <div id="samtalestotte-podlet">
            <App visning={visningsmodus} prodDomener={prodDomener} orgnr={orgnr} />
        </div>
    );
};

Navspa.eksporter('samtalestotte-podlet', AppContainer);
reportWebVitals();

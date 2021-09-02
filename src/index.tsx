import React, { FunctionComponent } from 'react';
import './index.css';
import App, { Visningsmodus } from './App';
import reportWebVitals from './reportWebVitals';
import Navspa from '@navikt/navspa';
import { AppProps } from './utils';

export const AppContainer: FunctionComponent<AppProps> = ({
    visning,
    prodDomener = ['arbeidsgiver.nav.no'],
}) => {
    const visningsmodus = Visningsmodus[visning as keyof typeof Visningsmodus];

    return (
        <div id="samtalestotte-podlet">
            <App visning={visningsmodus} prodDomener={prodDomener} />
        </div>
    );
};

Navspa.eksporter('samtalestotte-podlet', AppContainer);
reportWebVitals();

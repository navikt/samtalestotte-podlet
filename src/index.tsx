import React, { FunctionComponent, useEffect } from 'react';
import './index.css';
import App, { Visningsmodus } from './App';
import reportWebVitals from './reportWebVitals';
import Navspa from '@navikt/navspa';
import { AppProps } from './utils';
import { PROD_DOMENE_ARBEIDSGIVER } from './konstanter';
import { useCookies } from 'react-cookie';

const ETT_ÅR_I_SEKUNDER = 31536000;

export const AppContainer: FunctionComponent<AppProps> = ({
    visning,
    prodDomener = [PROD_DOMENE_ARBEIDSGIVER],
    orgnr,
}) => {
    const visningsmodus = Visningsmodus[visning as keyof typeof Visningsmodus];
    const altinnRettighet = window.location.href.includes('oppfolgingsplanarbeidsgiver')
        ? 'ARBEIDSGIVERS_OPPFØLGINGSPLAN_FOR_SYKMELDTE'
        : 'SYKEFRAVÆRSSTATISTIKK_FOR_VIRKSOMHETER';
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [cookie, setCookie] = useCookies(['samtalestotte-podlet']);
    useEffect(() => {
        setCookie(
            'samtalestotte-podlet',
            {
                referrer: window.location.href,
                orgnr: orgnr,
                altinnRettighet: altinnRettighet,
            },
            {
                path: '/',
                maxAge: ETT_ÅR_I_SEKUNDER,
                sameSite: true,
            }
        );
    }, [orgnr, altinnRettighet, setCookie]);
    return (
        <div id="samtalestotte-podlet">
            <App visning={visningsmodus} prodDomener={prodDomener} />
        </div>
    );
};

Navspa.eksporter('samtalestotte-podlet', AppContainer);
reportWebVitals();

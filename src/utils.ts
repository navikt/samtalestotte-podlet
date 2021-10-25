import {
    DEV_GCP_DOMENE_ARBEIDSGIVER,
    LABS_DOMENE_ARBEIDSGIVER,
    PATH_SAMTALESTØTTE,
    PROD_DOMENE_ARBEIDSGIVER,
} from './konstanter';

export type AppProps = {
    visning: string;
    prodDomener?: string[]; // optional fra parent app -- default er arbeidsgiver.nav.no
    orgnr?: string;
};

export type SamtalestøtteProps = {
    visning: string;
    prodDomener: string[];
};

export const erLocalhost = (href: string) => {
    return href.startsWith('http://localhost');
};

export function erProdMiljø(prodDomener: string[], origin: string) {
    var kjørerIProd: boolean = false;
    prodDomener.forEach((domene) => {
        if (origin.includes(domene)) {
            kjørerIProd = true;
        }
    });
    return kjørerIProd;
}

const velgPreprodDomene = (origin: string): string => {
    return origin.includes('-q.nav.no') ? DEV_GCP_DOMENE_ARBEIDSGIVER : LABS_DOMENE_ARBEIDSGIVER;
};
export const getSamtalestøtteUrl = (domener: string[], href: string): string => {
    const origin = window.location.origin;

    if (erLocalhost(href)) {
        return 'http://localhost:3005/samtalestotte';
    }

    if (erProdMiljø(domener, origin)) {
        return `https://${PROD_DOMENE_ARBEIDSGIVER}${PATH_SAMTALESTØTTE}`;
    } else {
        return `https://${velgPreprodDomene(origin)}${PATH_SAMTALESTØTTE}`;
    }
};

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

export const erLabsMiljø = (href: string) => {
    return href.startsWith('https://arbeidsgiver.labs.nais.io/');
};

export const getDomene = (href: string): string => {
    if (erLocalhost(href)) {
        return 'localhost';
    }

    if (erLabsMiljø(href)) {
        return 'arbeidsgiver.labs.nais.io'
    }

    return 'nav.no';
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

export const getPreprodDomene = (origin: string): string => {
    let erDevGcp : boolean = false;
    ['arbeidsgiver-q.nav.no/', 'www-gcp.dev.nav.no'].forEach( domene => {
        if (origin.includes(domene)) {
            erDevGcp = true;
        }
    })
    return erDevGcp ? DEV_GCP_DOMENE_ARBEIDSGIVER : LABS_DOMENE_ARBEIDSGIVER;
};

export const getSamtalestøtteUrl = (domener: string[], href: string): string => {
    const origin = window.location.origin;

    if (erLocalhost(href)) {
        return 'http://localhost:3005/samtalestotte';
    }

    if (erProdMiljø(domener, origin)) {
        return `https://${PROD_DOMENE_ARBEIDSGIVER}${PATH_SAMTALESTØTTE}`;
    } else {
        return `https://${getPreprodDomene(origin)}${PATH_SAMTALESTØTTE}`;
    }
};

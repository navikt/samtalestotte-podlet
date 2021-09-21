import {
    LABS_DOMENE_ARBEIDSGIVER,
    PATH_SAMTALESTØTTE,
    PROD_DOMENE_ARBEIDSGIVER,
} from './konstanter';

export type AppProps = {
    visning: string;
    prodDomener?: string[]; // optional fra parent app -- default er arbeidsgiver.nav.no
    orgnr: string;
};

export type SamtalestøtteProps = {
    visning: string;
    prodDomener: string[];
    orgnr: string;
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

export const getSamtalestøtteUrl = (domener: string[]): string => {
    const origin = window.location.origin;

    if (erProdMiljø(domener, origin)) {
        return `https://${PROD_DOMENE_ARBEIDSGIVER}${PATH_SAMTALESTØTTE}`;
    } else {
        return `https://${LABS_DOMENE_ARBEIDSGIVER}${PATH_SAMTALESTØTTE}`;
    }
};

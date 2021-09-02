import { PATH_SAMTALESTØTTE } from './konstanter';

export type AppProps = {
    visning: string,
    prodDomener?: string[]
}

export type SamtalestøtteProps = {
    visning: string,
    prodDomener: string[]
}

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
        return `https://arbedsgiver.nav.no/${PATH_SAMTALESTØTTE}`;
    } else {
        return `https://arbedsgiver.labs.nais.io/${PATH_SAMTALESTØTTE}`;
    }
};

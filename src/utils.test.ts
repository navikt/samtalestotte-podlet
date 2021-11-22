import { erProdMiljø, getPreprodDomene } from './utils';
import { DEV_GCP_DOMENE_ARBEIDSGIVER, LABS_DOMENE_ARBEIDSGIVER } from './konstanter';

describe('getPreprodDomene() returnerer labs eller dev-gcp domene avhengig av origin', () => {
    it('https://www-gcp.dev.nav.no/ er et dev-gcp miljø', () => {
        expect(getPreprodDomene('https://www-gcp.dev.nav.no')).toBe(DEV_GCP_DOMENE_ARBEIDSGIVER);
    });

    it('https://arbeidsgiver.labs.nais.io/ er et labs miljø', () => {
        expect(getPreprodDomene('https://arbeidsgiver.labs.nais.io/')).toBe(
            LABS_DOMENE_ARBEIDSGIVER
        );
    });
});

describe('erProdMiljø() sjekker om applikasjonen kjører i produksjon', () => {
    it('Finner ut om applikasjonen kjører i et prod miljø', () => {
        expect(erProdMiljø(['arbeidsgiver.nav.no', 'tjenester.nav.no'], 'tjenester.nav.no')).toBe(
            true
        );
    });

    it('www.nav.no er et prod miljø', () => {
        expect(
            erProdMiljø(
                ['www.nav.no', 'oppfolgingsplanarbeidsgiver.nais.oera.no'],
                'https://www.nav.no'
            )
        ).toBe(true);
    });

    it('Q er ikke et prod miljø', () => {
        expect(erProdMiljø(['arbeidsgiver.nav.no', 'tjenester.nav.no'], 'tjenester-q.nav.no')).toBe(
            false
        );
    });

    it('Localhost er ikke et prod miljø', () => {
        expect(erProdMiljø(['arbeidsgiver.nav.no', 'tjenester.nav.no'], 'localhost:3000')).toBe(
            false
        );
    });
});

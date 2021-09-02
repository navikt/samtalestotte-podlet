import {erProdMiljø} from "./utils";

describe('sthg', () => {
    it('Finner ut om applikasjonen kjører i et prod miljø', () => {
        expect(
            erProdMiljø(
                ['arbeidsgiver.nav.no', 'tjenester.nav.no'], 'tjenester.nav.no'
            )
        ).toBe(true);
    });

    it('Q er ikke et prod miljø', () => {
        expect(
            erProdMiljø(
                ['arbeidsgiver.nav.no', 'tjenester.nav.no'], 'tjenester-q.nav.no'
            )
        ).toBe(false);
    });

    it('Localhost er ikke et prod miljø', () => {
        expect(
            erProdMiljø(
                ['arbeidsgiver.nav.no', 'tjenester.nav.no'], 'localhost:3000'
            )
        ).toBe(false);
    });
});

import React, { FunctionComponent } from 'react';
import { BodyShort, Link } from '@navikt/ds-react';
import '@navikt/ds-css';

import { ReactComponent as Lampesvg } from '../PaneltittelMedIkon/lampe.svg';
import { PaneltittelMedIkon } from '../PaneltittelMedIkon/PaneltittelMedIkon';
import { Snakkeboble } from '../Snakkeboble/Snakkeboble';
import { Visningsmodus } from '../App';
import { getSamtalestøtteUrl, SamtalestøtteProps } from '../utils';
import styles from './samtalestøttepanel.module.css';

const Samtalestøttepanel: FunctionComponent<SamtalestøtteProps> = ({
    visning,
    prodDomener,
    orgnr,
}) => {
    const lenkeTekst = 'Gå til samtalestøtten';

    if (visning === Visningsmodus.SNAKKEBOBLE) {
        return (
            <Snakkeboble>
                <BodyShort size="s" className={styles.samtalestøttepanel__ingress}>
                    Samtaler rundt sykefravær kan være vanskelige. Vi har laget et verktøy for
                    arbeidsgivere for å gjøre det lettere å forberede seg til samtaler med
                    medarbeidere!
                </BodyShort>
                <Link
                    href={
                        getSamtalestøtteUrl(prodDomener) +
                        '?referer=' +
                        window.location.href +
                        '&orgnr=' +
                        orgnr
                    }
                >
                    {lenkeTekst}
                </Link>
            </Snakkeboble>
        );
    } else {
        return (
            <>
                <PaneltittelMedIkon src={<Lampesvg />} alt="lampeikon">
                    {`Forbered samtale med medarbeider!`}
                </PaneltittelMedIkon>
                <BodyShort size="s" className={styles.samtalestøttepanel__ingress}>
                    Samtaler rundt sykefravær kan være vanskelige. Vi har laget et verktøy for
                    arbeidsgivere for å gjøre det lettere å forberede seg.
                </BodyShort>
                {/* OBS: className 'intern-lenke' kommer fra parent-app f.eks 'sykefraværsstatistikk' */}
                <Link
                    href={
                        getSamtalestøtteUrl(prodDomener) +
                        '?referer=' +
                        window.location.href +
                        '&orgnr=' +
                        orgnr
                    }
                    className="intern-lenke"
                >
                    {lenkeTekst}
                </Link>
            </>
        );
    }
};

export default Samtalestøttepanel;

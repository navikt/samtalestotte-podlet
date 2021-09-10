import React, { FunctionComponent } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { ReactComponent as Lampesvg } from '../PaneltittelMedIkon/lampe.svg';

import { PaneltittelMedIkon } from '../PaneltittelMedIkon/PaneltittelMedIkon';
import Lenke from 'nav-frontend-lenker';
import { Snakkeboble } from '../Snakkeboble/Snakkeboble';
import { Visningsmodus } from '../App';
import { getSamtalestøtteUrl, SamtalestøtteProps } from '../utils';
import styles from './samtalestøttepanel.module.css';

const Samtalestøttepanel: FunctionComponent<SamtalestøtteProps> = ({ visning, prodDomener }) => {
    const lenkeTekst = 'Gå til samtalestøtten';


    if (visning === Visningsmodus.SNAKKEBOBLE) {
        return (
            <Snakkeboble>
                <Normaltekst className={styles.samtalestøttepanel__ingress}>
                    Samtaler rundt sykefravær kan være vanskelige. Vi har laget et verktøy for
                    arbeidsgivere for å gjøre det lettere å forberede seg til samtaler med
                    medarbeidere!
                </Normaltekst>
                <Lenke href={getSamtalestøtteUrl(prodDomener) + '?referer=' + window.location.href}>
                    {lenkeTekst}
                </Lenke>
            </Snakkeboble>
        );
    } else {
        return (
            <>
                <PaneltittelMedIkon src={<Lampesvg />} alt="lampeikon">
                    {`Forbered samtale med medarbeider!`}
                </PaneltittelMedIkon>
                <Normaltekst className="samtalestøttepanel__ingress">
                    Samtaler rundt sykefravær kan være vanskelige. Vi har laget et verktøy for
                    arbeidsgivere for å gjøre det lettere å forberede seg.
                </Normaltekst>
                {/* OBS: className 'intern-lenke' kommer fra parent-app f.eks 'sykefraværsstatistikk' */}
                <Lenke
                    href={getSamtalestøtteUrl(prodDomener) + '?referer=' + window.location.href}
                    className="intern-lenke"
                >
                    {lenkeTekst}
                </Lenke>
            </>
        );
    }
};

export default Samtalestøttepanel;

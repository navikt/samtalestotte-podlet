import React, { FunctionComponent } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { ReactComponent as Lampesvg } from './lampe.svg';
import { ReactComponent as Femalesvg } from './female.svg';

import { PaneltittelMedIkon } from '../PaneltittelMedIkon/PaneltittelMedIkon';
import classNames from 'classnames';
import Lenke from 'nav-frontend-lenker';
import { Snakkeboble } from '../Snakkeboble/Snakkeboble';

import { Visningsmodus } from '../App';
import { getSamtalestøtteUrl, SamtalestøtteProps } from '../utils';

const Samtalestøttepanel: FunctionComponent<SamtalestøtteProps> = ({ visning, prodDomener }) => {
    const lenkeTekst = 'Gå til samtalestøtten';

    const fellesLenke = (
        <Lenke
            href={getSamtalestøtteUrl(prodDomener) + '?referer=' + window.location.href}
            className={classNames('intern-lenke')}
        >
            {lenkeTekst}
        </Lenke>
    );

    if (visning === Visningsmodus.SNAKKEBOBLE) {
        return (
            <>
                <Snakkeboble src={<Femalesvg />} alt="Female rådgiver">
                    <Normaltekst>
                        Samtaler rundt sykefravær kan være vanskelige. Vi har laget et verktøy for
                        arbeidsgivere for å gjøre det lettere å forberede seg til samtaler med
                        medarbeidere!
                    </Normaltekst>
                </Snakkeboble>
                {fellesLenke}
            </>
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
                {fellesLenke}
            </>
        );
    }
};

export default Samtalestøttepanel;

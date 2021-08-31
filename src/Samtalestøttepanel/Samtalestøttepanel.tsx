import React, {FunctionComponent} from 'react';
import {Normaltekst} from 'nav-frontend-typografi';
import {ReactComponent as Lampesvg} from './lampe.svg';
import './Samtalestøttepanel.less';
import {PaneltittelMedIkon} from '../PaneltittelMedIkon/PaneltittelMedIkon';
import {PATH_SAMTALESTØTTE} from '../konstanter';
import classNames from 'classnames';
import Lenke from 'nav-frontend-lenker';
import '../InternLenke/InternLenke.less';

import {Visningsmodus} from "../App";

type SamtalestøttePanelProps = {
    visningsmodus: Visningsmodus;
}

const Samtalestøttepanel: FunctionComponent<SamtalestøttePanelProps> = ({visningsmodus}) => {
    const lenkeTekst = 'Gå til samtalestøtten';

    if (visningsmodus === Visningsmodus.SNAKKEBOBLE) {
        return (<></>);
    } else {
        return (
            <>
                <PaneltittelMedIkon src={<Lampesvg/>} alt="lampeikon">
                    {`Forbered samtale med medarbeider!`}
                </PaneltittelMedIkon>
                <Normaltekst className="samtalestøttepanel__ingress">
                    Samtaler rundt sykefravær kan være vanskelige. Vi har laget et verktøy for
                    arbeidsgivere for å gjøre det lettere å forberede seg.
                </Normaltekst>
                <Lenke
                    href={PATH_SAMTALESTØTTE + '?referer=' + window.location.href}
                    className={classNames('intern-lenke')}
                >
                    {lenkeTekst}
                </Lenke>
            </>)
    }
};

export default Samtalestøttepanel;

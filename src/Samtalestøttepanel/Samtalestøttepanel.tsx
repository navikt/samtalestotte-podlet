import React, {FunctionComponent} from 'react';
import {Normaltekst} from 'nav-frontend-typografi';
import lampeSvg from './lampe.svg';
import './Samtalestøttepanel.less';
import {PaneltittelMedIkon} from '../PaneltittelMedIkon/PaneltittelMedIkon';
import {PATH_SAMTALESTØTTE} from '../konstanter';
import classNames from 'classnames';
import Lenke from 'nav-frontend-lenker';
//import { useSendNavigereEvent } from '../../amplitude/amplitude';
import '../InternLenke/InternLenke.less';

const Samtalestøttepanel: FunctionComponent = () => {
   // const sendNavigereEvent = useSendNavigereEvent();
    const lenkeTekst = 'Gå til samtalestøtten';

    return (
        <>
            <PaneltittelMedIkon src={lampeSvg} alt="lampeikon">
                Forbered samtale med medarbeider!
            </PaneltittelMedIkon>
            <Normaltekst className="samtalestøttepanel__ingress">
                Samtaler rundt sykefravær kan være vanskelige. Vi har laget et verktøy for
                arbeidsgivere for å gjøre det lettere å forberede seg.
            </Normaltekst>
            <Lenke
                href={PATH_SAMTALESTØTTE + '?referer=' + window.location.href}
                className={classNames('intern-lenke')}
                /*onClick={() => {
                    sendNavigereEvent({
                        lenketekst: lenkeTekst,
                        destinasjon: PATH_SAMTALESTØTTE,
                        url: window.location.href,
                    });
                }}*/
            >
                {lenkeTekst}
            </Lenke>
        </>
    );
};

export default Samtalestøttepanel;

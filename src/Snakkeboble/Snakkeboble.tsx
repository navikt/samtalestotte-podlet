import React, { FunctionComponent } from 'react';
import { Systemtittel } from 'nav-frontend-typografi';

interface Props {
    children: any;
    src: any;
    alt: string;
}

export const Snakkeboble: FunctionComponent<Props> = (props) => (
    <div className="snakkeboble">
        <div className="snakkeboble__ikon" aria-label={props.alt}>
            {props.src}
        </div>
        <Systemtittel className="snakkeboble__tittel" tag="h2">
            {props.children}
        </Systemtittel>
    </div>
);

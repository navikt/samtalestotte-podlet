import React, { FunctionComponent } from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import styles from './panelltittelMedIkon.module.css';

interface Props {
    children: string;
    src: any;
    alt: string;
}

export const PaneltittelMedIkon: FunctionComponent<Props> = (props) => (
    <div className={styles.paneltittel_med_ikon}>
        <div className={styles.paneltittel_med_ikon__ikon} aria-label={props.alt}>
            {props.src}
        </div>
        <Systemtittel className={styles.paneltittel_med_ikon__tittel} tag="h2">
            {props.children}
        </Systemtittel>
    </div>
);

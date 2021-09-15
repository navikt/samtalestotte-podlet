import React, { FunctionComponent } from 'react';
import { Title } from '@navikt/ds-react';
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
        <Title level={'2'} size={'m'} className={styles.paneltittel_med_ikon__tittel}>
            {props.children}
        </Title>
    </div>
);

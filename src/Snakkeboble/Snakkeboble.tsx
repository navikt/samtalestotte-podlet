import React, { FunctionComponent } from 'react';
import { ReactComponent as Femalesvg } from './female.svg';
import { ReactComponent as SnakkebobleTriangle } from './SnakkebobleTriangle.svg';
import styles from './snakkeBoble.module.css';

interface Props {
    children: any;
}

export const Snakkeboble: FunctionComponent<Props> = (props) => (
    <div className={styles.snakkeboble}>
        <div className={styles.snakkeboble__ikon_og_pil} aria-label={'Rådgiver'}>
            <Femalesvg className={styles.snakkeboble__ikon} />
            <SnakkebobleTriangle className={styles.snakkeboble__pil} />
        </div>
        <div className={styles.snakkeboble__tekst_og_lenke}>{props.children}</div>
    </div>
);

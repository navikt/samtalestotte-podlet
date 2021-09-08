import React, { FunctionComponent } from 'react';
import { ReactComponent as Femalesvg } from './female.svg';
import { ReactComponent as SnakkebobleTriangle } from './SnakkebobleTriangle.svg';

interface Props {
    children: any;
}

export const Snakkeboble: FunctionComponent<Props> = (props) => (
    <div className="snakkeboble">
        <div className="snakkeboble__ikon-og-pil" aria-label={'Rådgiver'}>
            <Femalesvg className={'snakkeboble__ikon'} />
            <SnakkebobleTriangle className={'snakkeboble__pil'} />
        </div>
        <div className="snakkeboble__tekst-og-lenke">{props.children}</div>
    </div>
);

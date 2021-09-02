import React, { FunctionComponent } from 'react';
import './App.css';
import Samtalestøttepanel from './Samtalestøttepanel/Samtalestøttepanel';
import { SamtalestøtteProps } from './utils';

export enum Visningsmodus {
    SNAKKEBOBLE = 'SNAKKEBOBLE',
    PANEL_MED_IKON_OG_TEKST = 'PANEL_MED_IKON_OG_TEKST',
}

const App: FunctionComponent<SamtalestøtteProps> = (props: SamtalestøtteProps) => {
    console.log('Visningsmodus i App er: ', props.visning);

    return <Samtalestøttepanel visning={props.visning} prodDomener={props.prodDomener} />;
};

export default App;

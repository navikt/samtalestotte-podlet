import React, {FunctionComponent} from 'react';
import './App.css';
import Samtalestøttepanel from "./Samtalestøttepanel/Samtalestøttepanel";

export enum Visningsmodus {
    SNAKKEBOBLE = 'SNAKKEBOBLE',
    PANEL_MED_IKON_OG_TEKST = 'PANEL_MED_IKON_OG_TEKST',
}

type Props = {
    visningsmodus: Visningsmodus;
}
const App: FunctionComponent<Props> = (props: Props) => {
    console.log("Visningsmodus i App er: ", props.visningsmodus);

    return (
        <Samtalestøttepanel visningsmodus={props.visningsmodus}/>
    );
}

export default App;

import React, {FunctionComponent} from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navspa from '@navikt/navspa';

type AppProps={
    orgnr: string;
    ekstraData :string|null;
    visningsversjon: string|null;
}
export const AppContainer: FunctionComponent<AppProps> = ({orgnr, ekstraData, visningsversjon}) => (
    <div id="samtalestotte-podlet" >
                    <App orgnr={orgnr} ekstraData={ekstraData} visningsmodell={visningsversjon}/>
    </div>
);
Navspa.eksporter('samtalestotte-podlet', AppContainer);
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

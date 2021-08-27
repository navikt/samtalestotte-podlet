import React, {FunctionComponent} from 'react';
import './index.css';
import App, {Visningsmodus} from './App';
import reportWebVitals from './reportWebVitals';
import Navspa from '@navikt/navspa';

type AppProps = {
    visning: string
}
export const AppContainer: FunctionComponent<AppProps> = ({visning}) => {
    const visningsmodus = Visningsmodus[visning as keyof typeof Visningsmodus];

    return (
        <div id="samtalestotte-podlet">
            <App visningsmodus={visningsmodus}/>
        </div>
    );
}

Navspa.eksporter('samtalestotte-podlet', AppContainer);
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

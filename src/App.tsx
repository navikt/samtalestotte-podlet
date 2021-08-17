import React, {FunctionComponent} from 'react';
import './App.css';
import Samtalestøttepanel from "./Samtalestøttepanel/Samtalestøttepanel";

type Props ={
  orgnr: string;
  ekstraData: string | null;
  visningsmodell: string | null;
}
const App: FunctionComponent<Props>=(props:Props) =>{
  return (

      <Samtalestøttepanel orgnr={props.orgnr}/>

  );
}

export default App;

import React from "react";
import { Template } from "./components/MainComponents";
import Page from './pages/Home';
import dados from './data.json';

const App = () => {
    return (
        <>
            <Template >
                <Page dados={dados}/>
            </Template>
        </>
    );
};

export default App;
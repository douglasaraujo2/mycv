import React from "react";
import { Template } from "./components/MainComponents";
import Page from './pages/Home';
import dados from './data.json';
import dadosPt from './data-ptBR.json';

const App = () => {
    const language = navigator.language || navigator.userLanguage;
    const brazilLanguageCode = 'pt-BR';
    return (
        <>
            <Template >
                <Page 
                    dados={language === brazilLanguageCode ? dadosPt : dados} 
                    language={language}
                    brazilLanguageCode={brazilLanguageCode} />
            </Template>
        </>
    );
};

export default App;
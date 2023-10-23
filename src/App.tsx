import React from 'react';

import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {Projects} from "./layout/projects/Projects";
import {Technologies} from "./layout/technologies/Technologies";
import {Experience} from "./layout/experience/Experience";
import {Footer} from "./layout/footer/Footer";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Technologies/>
            <Experience/>
            <Footer/>
        </div>
    );
}

export default App;


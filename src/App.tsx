import React from 'react';

import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {Projects} from "./layout/projects/Projects";
import {Technologies} from "./layout/technologies/Technologies";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Technologies/>
        </div>
    );
}

export default App;

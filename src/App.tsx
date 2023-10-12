import React from 'react';

import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {Projects} from "./layout/projects/Projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
        </div>
    );
}

export default App;

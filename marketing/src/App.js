import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';

import Landing from './components/Landing';
import Pricing from './components/Pricing';


const App = () => {

    return <div><StyledEngineProvider>
        <BrowserRouter>
            <Routes>
                <Route exact path='/pricing' Component={Pricing} />
                <Route path='/' Component={Landing} />
            </Routes>
        </BrowserRouter>
    </StyledEngineProvider></div>
}
export default App;
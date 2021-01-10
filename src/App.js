import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import DataContextProvider from './context/DataContextProvider';
import PageNav from './pages';

const App = () => {
    return(
        <Router>
            <DataContextProvider>
                <PageNav />
            </DataContextProvider>
        </Router>
    )
}

export default App;
// export { default as Home } from './home/Home';
import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { DataContext } from '../context/DataContextProvider'

import Home from './home/Home';
import Admin from './admin';

const NavPage = () => {
    const { state } = useContext(DataContext);
    return(
        <Switch>
            <Route exact path="/"><Home state={state} /></Route>
            <Route exact path="/admin"><Admin state={state} /></Route>
        </Switch>
    )
}

export default NavPage;
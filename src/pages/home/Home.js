import React, { useContext } from 'react';

import { DataContext } from '../../context/DataContextProvider';
import { ACTION_TYPES } from '../../constant/Actions';

const Home = props => {
    const { dispatch } = useContext(DataContext);
    console.log('home: ', props.state);
    const update = () => {
        dispatch({ type: ACTION_TYPES.RELOAD_PAGE, payload: true});
    }
    return(
        <button onClick={update}>Home</button>
    )
}

export default Home;
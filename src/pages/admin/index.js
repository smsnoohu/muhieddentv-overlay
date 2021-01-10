import React, { useContext, useEffect } from 'react';

import { DataContext } from '../../context/DataContextProvider';
import { ACTION_TYPES } from '../../constant/Actions';

const Admin = props => {
    const { dispatch } = useContext(DataContext);
    console.log('admin: ', props.state);
    useEffect(() => {
        // dispatch({ type: ACTION_TYPES.UPDATE_DATA });
    console.log('admin123: ', props.state);
    }, [props.state]);
    return(
        <>
            <h1>Admin</h1>
            {props.state.reload && <p>Reload</p>}
        </>
    )
}

export default Admin;
import React, { useEffect, useContext, useReducer, createContext } from 'react';
import { ACTION_TYPES } from '../constant/Actions';

const initialState = {
    update: false,
    loading: false,
    reload: false,
    mainLogo: ''
}

function overlayReducer(state, action){
    switch(action.type){
        case ACTION_TYPES.UPDATE_DATA:
            return{
                ...state,
                update: !state.update
            }
        case ACTION_TYPES.RELOAD_PAGE:
            return{
                ...state,
                reload: action.payload
            };
        case ACTION_TYPES.SET_MAIN_LOGO:
            return{
                ...state,
                ...action.payload
            }
    }
}

export const DataContext = createContext();

const DataContextProvider = props => {
    const [state, dispatch] = useReducer(overlayReducer, initialState);

    useEffect(() => {
        console.log('context: ', state);
    }, [state]);

    return(
        <DataContext.Provider value={
            {
                ...props,
                state,
                dispatch
            }
        }>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
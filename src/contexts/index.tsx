import { createContext, useContext, useReducer } from "react";

import { ActionInterface } from '../actions';
import reducer, { initialState } from '../reducers';

export interface PrizeDetailInterface {
    title: string,
    text: string,
}

export interface GameStateInterface {
        phase: string|null,
        active: boolean,
        answers: Array<number>,
        user: {
            firstName: string,
            lastName: string,
            activity: string,
            position: string,
            phone: string,
            email: string,
            company: string,
            siret: string,
            how: string,
            optin: boolean,
        },
        prize: number|null,      
        prizeDetail: PrizeDetailInterface|null,          
}

export interface AppStateInterface {
    page: string,
    catering: string,
    game: GameStateInterface,
    isVideoShown: boolean,
}

export interface AppContextInterface {
    state: AppStateInterface,
    dispatch: (action: ActionInterface) => void
}

export const AppContext = createContext<AppContextInterface>(null!);

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({ children })  => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = {
        state,
        dispatch,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext<AppContextInterface>(AppContext);
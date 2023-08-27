import { ActionInterface, ADD_ANSWER, CHANGE_PAGE, SET_CATERING, SET_PHASE, SET_PRIZE, SET_PRIZE_DETAIL, SET_VIDEO_SHOW_STATUS, START_GAME, STOP_GAME } from "../actions";

import { AppStateInterface, GameStateInterface } from "../contexts";

export const initialGameState: GameStateInterface = {
    phase: null,
    active: false,
    answers: [],
    user: {
        firstName: '',
        lastName: '',
        activity: '',
        position: '',
        phone: '',
        email: '',
        company: '',
        siret: '',
        how: '',
        optin: false,
    },
    prize: null,      
    prizeDetail: null,
};

export const initialState: AppStateInterface = {
    page: 'home',
    catering: '',
    game: initialGameState,
    isVideoShown: false,
}


const reducer = (state : AppStateInterface, action: ActionInterface) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page,
            };
        case SET_CATERING:
            return {
                ...state,
                catering: action.catering,
            };
        case START_GAME:
            return {
                ...state,
                game: {
                    ...initialGameState,
                    active: true,
                    phase: state.game.phase,
                },
            };
        case STOP_GAME:
            return {
                ...state,
                game: {
                    ...initialGameState,
                    phase: state.game.phase,
                },
            };
        case ADD_ANSWER:
            return {
                ...state,
                game: {
                    ...state.game,
                    answers: [...state.game.answers, action.answer],
                },
            };
        case SET_PRIZE:
            return {
                ...state,
                game: {
                    ...state.game,
                    prize: action.prize,
                },
            };
        case SET_PRIZE_DETAIL:
            return {
                ...state,
                game: {
                    ...state.game,
                    prizeDetail: action.prizeDetail,
                },
            };
        case SET_PHASE:
            return {
                ...state,
                game: {
                    ...state.game,
                    phase: action.phase,
                },
            };
        case SET_VIDEO_SHOW_STATUS:
            return {
                ...state,
                isVideoShown: action.status,
            };
        default:
            return state;
    }
};

export default reducer;
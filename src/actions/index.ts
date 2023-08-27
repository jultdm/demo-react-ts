/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrizeDetailInterface } from "../contexts";

export interface ActionInterface {
    type: string,
    [key:string]:any,
}

export const CHANGE_PAGE = "CHANGE_PAGE";

export const changePage = (page: string) => ({
    type: CHANGE_PAGE,
    page,
});

export const SET_CATERING = "SET_CATERING";

export const setCatering = (catering: string) => ({
    type: SET_CATERING,
    catering,
});


export const START_GAME = "START_GAME";

export const startGame = () => ({
    type: START_GAME,
});

export const STOP_GAME = "STOP_GAME";

export const stopGame = () => ({
    type: STOP_GAME,
});

export const ADD_ANSWER = "ADD_ANSWER";

export const addAnswer = (answer: number) => ({
    type: ADD_ANSWER,
    answer,
});

export const SET_PRIZE = "SET_PRIZE";

export const setPrize = (prize: number| null) => ({
    type: SET_PRIZE,
    prize,
});

export const SET_PRIZE_DETAIL = "SET_PRIZE_DETAIL";

export const setPrizeDetail = (prizeDetail: PrizeDetailInterface | null) => ({
    type: SET_PRIZE_DETAIL,
    prizeDetail,
});

export const SET_VIDEO_SHOW_STATUS = "SET_VIDEO_SHOW_STATUS";

export const setVideoShowStatus = (status: boolean) => ({
    type: SET_VIDEO_SHOW_STATUS,
    status,
});

export const SET_PHASE = "SET_PHASE";

export const setPhase = (phase: string) => ({
    type: SET_PHASE,
    phase,
});
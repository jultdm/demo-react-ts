import { useEffect } from 'react';
import api from '../services/api';
import { useAppContext } from '../contexts';
import { setPhase } from '../actions';

const usePhase = () => {
    
    const { dispatch } = useAppContext();
    useEffect(
        () => {
        const apiCall = async () => {
            const response = await api.getPhase();
            if (response.status === 1){
                dispatch(setPhase(response.phase));
            }
        };
        apiCall();
        },
        [dispatch],
    );
    };

export default usePhase;
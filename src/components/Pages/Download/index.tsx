import { useAppContext } from "../../../contexts";
import CollectiveDownload from "./collective";
import CommercialDownload from "./commercial";

const Download = () => {
    const { state } = useAppContext();
    
    if (state.catering === 'collective'){
        return <CollectiveDownload />;
    }else{
        return <CommercialDownload />;
    }
};

export default Download;
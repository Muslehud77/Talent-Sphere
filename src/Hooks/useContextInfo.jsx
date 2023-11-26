
import { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthContext';

const useContextInfo = () => {

    const info = useContext(AuthContext)
    console.log(info);
    return info
};

export default useContextInfo;
import { useEffect } from "react";

const Logout = ({logoutHandler}) => {

    useEffect(() => {
        logoutHandler();
    },[])

    return null;
};

export default Logout;
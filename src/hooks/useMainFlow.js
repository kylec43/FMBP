import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

function useMainFlow() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = getAuth().onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                console.log("User logged in!");
            } else {
                setIsLoggedIn(false);
                console.log("User not logged in!");
            }
    
        });
        console.log("Added firebase auth listener");

        return () => unsubscribe();
    }, []);

    return { isLoggedIn }
}

export default useMainFlow;
import createDataContext from "./createDataContext";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function reducer(state, action) {

    switch (action.type) {

        case "authenticated":
            return {...state, user: action.payload}
        case "logout":
            return {...state, user: null}
        default:
            return state;
    }
}


const signup = (dispatch) => (email, password) => {

    return new Promise(async (resolve, reject) => {
        try {
            await createUserWithEmailAndPassword(getAuth(), email, password);
            const user = getAuth().currentUser;
            dispatch({type: "authenticated", payload: user});

            console.log("Signup Successful!");
            resolve(user);
        } catch (e) {
            console.log("Signup Unsuccessful!", e);
            reject(e);
        }
    });
};


const login = (dispatch) => (email, password) => {

    return new Promise(async (resolve, reject) => {

        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            const user = getAuth().currentUser;
            dispatch({type: "authenticated", payload: user});

            console.log("Login Successful!");
            resolve(user);
        } catch(e) {
            console.log("Login Error!");
            reject(e);
        }
    });
};


const logout = (dispatch) => () => {
    return new Promise(async (resolve, reject) => {
        try {
            await getAuth().signOut();
            dispatch({type: "logout", payload: null});
            console.log("Logout Success!");
            resolve();
        } catch (e) {
            console.log("Error logging out!");
            reject(e);
        }
    });
}


export const {Context, Provider} = createDataContext(
    reducer,
    { signup, login, logout },
    { user: null }
);
const LOGIN = 'LOGIN'

const initialState = {

};

const booleanReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN:
            return {
                state
            }
    }
    return state
};

// interface ILogin {
//     type: typeof LOGIN
// }
// type LoginActionsTypes = ILogin

export const loginAC = () => {
    return { type: LOGIN }
}

export default booleanReducer;

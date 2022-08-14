import DarkModeReducer from "./darkModeReducer";
const { createContext, useReducer } = require("react")

const INITIAL_STATE = {
    darkMode: false
}
export const DarkModeContext = createContext();
export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
    return (
        <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    );
}


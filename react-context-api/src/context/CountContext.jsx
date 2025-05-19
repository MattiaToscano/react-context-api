import { createContext, useState } from 'react';

// Create the context
export const CountContext = createContext();

// Create a provider component
export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
};


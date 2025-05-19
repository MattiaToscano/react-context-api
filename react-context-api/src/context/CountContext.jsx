import React, { createContext, useState, useContext } from 'react';

// Create the context
const CountContext = createContext();

// Custom hook for using the context
export const useCount = () => useContext(CountContext);

// Provider component
export const CountProvider = ({ children }) => {

    return (
        <CountContext.Provider value={value}>
            {children}
        </CountContext.Provider>
    );
};
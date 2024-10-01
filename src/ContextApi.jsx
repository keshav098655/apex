// ContextApi.jsx
import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => {
    return useContext(SidebarContext);
};

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </SidebarContext.Provider>
    );
};

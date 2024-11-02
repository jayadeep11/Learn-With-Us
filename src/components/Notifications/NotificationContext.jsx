// NotificationContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

export const useNotification = () => {
    return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
    const [notificationMessage, setNotificationMessage] = useState('');

    useEffect(() => {
        const handleCopy = () => {
            setNotificationMessage('copied!');
            setTimeout(() => {
                setNotificationMessage('');
            }, 2000); // Notification visible for 2 seconds
        };

        document.addEventListener('copy', handleCopy);
        return () => {
            document.removeEventListener('copy', handleCopy);
        };
    }, []);

    return (
        <NotificationContext.Provider value={{ notificationMessage }}>
            {children}
            {notificationMessage && (
                <div className="fixed top-4 right-4 bg-violet-950 text-white  ease-in-out px-4 py-2 rounded-xl shadow-lg transition-all duration-500">
                    {notificationMessage}
                </div>
            )}
        </NotificationContext.Provider>
    );
};


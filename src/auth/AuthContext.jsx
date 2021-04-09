import React from 'react';

const AuthContext = React.createContext();

//Auth context has two parts, provider and consumer components
//provider is the value, consumer is the value provided
//props.children wrap by the child components

const AuthProvider = (props)=>
{
    return (
        <AuthContext.Provider value={{role:'admin', uid:null, isUser:false}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export {AuthProvider}

export default AuthContext;
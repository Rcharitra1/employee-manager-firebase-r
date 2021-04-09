import React, {useState, useContext} from 'react';
import styled from "styled-components";
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';


import firebaseApp from '../firebase/firebaseConfig.js';
import AuthContext from '../auth/AuthContext.jsx';
import Button from '../components/buttons/Button';
import FormInput from '../components/forms/FormInput';




const LoginPageStyes=styled.aside`
 width:380px;
    margin: 6rem auto 0;
    header{
        text-align:center;

    }
    h1{
        font-size:2.25rem;
        margin:0.5rem 0;
        font-weight:500;
    }
    input{
        margin:0.25rem 0;
    }
    button{
        margin:0.5rem 0;
    }
    .links{
        color:blue;
        text-decoration:none;
        
    }
    .links:hover{
        border-bottom:1px solid blue;
    }
    .error{
        margin:0;
        padding:0;
        color:red;
        font-size:0.8rem;
    }
`

const LoginPage = (props) => {

    const auth = useContext(AuthContext)
    const [email, setEmail]= useState('');
    const [password, setPassword]=useState('');
    const [errors, setError]=useState('');  
    const [isValid, setIsValid]=useState(false);
    
    const handleClick = (e) => 
    {
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential)=> {
            setIsValid(true);
            auth.isUser=true;
            auth.uid=userCredential.user.uid;       
            
        }).catch(err=> setError(err))
    }

    if(isValid)
    {
        return   (<Redirect to='/dashboard'/>)

    }else
    {
        return ( 

        
        
            <LoginPageStyes>
            <header>
                <h1>
                    Login
                </h1>
            </header> 
            <FormInput label="email address" type="email" onChange={(e)=> setEmail(e.target.value.trim
                ())}/>
                {errors && errors.code===('auth/invalid-email') && <p className="error">{errors.message}</p>}
                
            <FormInput label="password" type="password" onChange={(e)=> setPassword(e.target.value.trim())}/>
            {errors && errors.code===('auth/wrong-password') && <p className="error">{errors.message}</p>}
            
    
            <Button label="Login" uistyle="login" onClick={handleClick}/>
    
            <p>Not a member? <Link className="links" to="/register">Register</Link></p>
            </LoginPageStyes>
            
            );

    }
    

       

}

 
export default LoginPage;
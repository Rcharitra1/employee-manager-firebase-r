import React, {useState}  from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid' ;

import firebaseApp from '../../../firebase/firebaseConfig';

import Button from 'components/buttons/Button';
import FormInput from 'components/forms/FormInput';
import { UserAdd } from 'components/icons';


const WidgetStyles = styled.aside `  
    background:#ffffff;
    box-shadow:0 0 3px 0px #c5c5c5;
    border-radius: 8px;
    padding: 2rem;
    header{
      display:flex;
      align-items:center;
      margin-bottom:1rem;
    }
    svg{
      width:1.5rem;
      margin-right: 0.25rem;
    }
    p{
      font-size:0.8rem;
      color:firebrick;
    }
`


const AddEmployeeWidget = (props) => {
 
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [error, setError] = useState('');
  console.log(name);
  console.log(department);

  const handleInsert = (e)=>
  {
    setError(undefined);
    console.log(name)
    console.log(department)
      
    if((name.trim().length>0) && (department.trim().length>0))
    {
      const id = uuidv4().substr(0, 8);
      const userId = firebaseApp.auth().currentUser.uid;
  
      const docRef = firebaseApp.firestore().collection(userId).doc('hr').collection('employees').doc(id);
      docRef.set({id,
                name,
                department 
              })
    }
    else
    {
      if(name.trim().length===0 && department.trim().length===0)
      {
        setError({code:'P',message:'Department and name are  required field'});
        
      }else
      {
        if(name.trim().length===0)
        {
          setError({code:'N',message:'Name is  required field'});
        }
        if(department.trim().length===0)
        {
          setError({code:'B',message:'Department is  required field'})
        }
      }
    
    }
        
    }
  
  
    return ( 
       <WidgetStyles>
          <header>
            <UserAdd/>
              <h2>
               Add New Employee
              </h2>
          </header>
          {error && error.code==="P" && <p>{error.message}</p>}
        <FormInput type="text" label="fullname" onChange={(e)=> setName(e.target.value.trim())}/>
        {error && error.code==="N" && <p>{error.message}</p>}
        <FormInput type="text" label="department" onChange={(e)=> setDepartment(e.target.value.trim())}/>
        {error && error.code==="B" && <p>{error.message}</p>}
        <Button label="add employee" onClick={handleInsert}/>
       </WidgetStyles>
     );
}
 
export default AddEmployeeWidget;
import React from 'react'
import { auth} from '../firebase/firbase';
import { useState } from 'react';

import { signInWithEmailAndPassword ,signOut} from "firebase/auth";


export const Login = () => {


  
  const[Pass,Setpass]=useState("");
  const[Email,Setmail]=useState("");

  
  const username =(e)=>{
    Setmail(e.target.value)
 }

 const pass=(e)=>{
    Setpass(e.target.value)

 }

const login=async()=>{
  signInWithEmailAndPassword(auth, Email, Pass)
  .then((userCredential) => {
    // Signed in 
    const user =  userCredential.user;
    const home=()=>{
   
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}




const logout=async()=>{
     
 const sign=await signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
     }




  return (
    <div className='container  ' id='container'>


 <h2 id='sign_up' className='d-flex justify-content-center'>Login</h2>
    <div className='sample'  >


        
     
     <form id='form' >
     
     <div className="form-group row d-flex justify-content-center" id='comment'>
         <label for="inputPassword" className="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-4">
               <input name='name'  className="form-control" id="input" placeholder="Enter your Email" onChange={username}/>
          </div>

    </div>


     <div className="form-group row d-flex justify-content-center" id='comment'>
         <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-4">
               <input name='name' type="password" className="form-control" id="input" placeholder="Enter your password"  onChange={pass}/>
          </div>
</div>

   
    

    
</form>

<div  className=' d-flex justify-content-center   '  id='button'>
    
     
    <button  className='  btn btn-outline-info ' onClick={login}>Login</button>
    
   </div>
 
 </div>
 <div  className=' col-sm-9  d-flex justify-content-end  '  id='button'>
    
<a href='/changepassword' id='login_link' > Forget password</a>

    </div>


    <div  className='d-flex justify-content-center  '  id='button'>
    
    <a href='/' id='login_link' > Don't have an account Create account</a>
    
        </div>
    


        <button type="button" className="btn btn-outline-success" id='feed-submit' onClick={logout} >Signout</button>

 </div>




    
  )
}

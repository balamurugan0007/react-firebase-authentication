import React, { useState } from 'react'
import "./style.css"
import { auth} from '../firebase/firbase';



import { createUserWithEmailAndPassword,signOut } from "firebase/auth";



export const Signup = () => {

    const[Name,Setname]=useState("");
    const[Email,Setemail]=useState("");
    const[Password,Setpassword]=useState("");
    const[Phone,Setphone]=useState("");
    const[Address,Setaddress]=useState("");



  const username =(e)=>{
     Setname(e.target.value)
  }

  const password=(e)=>{
     Setpassword(e.target.value)
  }
  const email=(e)=>{
     Setemail(e.target.value)
  }
  const phone=(e)=>{
     Setphone(e.target.value)
  }
  const address=(e)=>{
     Setaddress(e.target.value)
  }


  const create=async()=>{
   const users= await  createUserWithEmailAndPassword(auth, Email, Password)
  .then((userCredential)  => {
    // Signed in 
    const user = userCredential.user;
    

  
    window.location("/home");
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
    // ..
  });
  }








  return (
    <div className='container  ' id='container' >



     <h2 id='sign_up' className='d-flex justify-content-center'>Create an Account</h2>
    <div className='sample'  >


        
     
     <form id='form' >
     <div className="form-group row d-flex justify-content-center" id='comment'>
         <label for="inputPassword" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-4">
               <input name='name'  className="form-control" id="input" placeholder="Enter your Username " onChange={username} />
          </div>

    </div>

    <div className="form-group row d-flex justify-content-center" id='comment'>
         <label for="inputPassword" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-4">
               <input name='name'  className="form-control" id="input" placeholder="Enter your Phone Number " onChange={phone} />
          </div>

    </div>


    <div className="form-group row justify-content-center" id='comment'>
         <label for="inputPassword" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-4">
               <input name='name'  className="form-control" id="input" placeholder="Enter your Email " onChange={email} />
          </div>

    </div>

    <div className="form-group row d-flex justify-content-center" id='comment'>
         <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-4">
               <input name='name' type="password" className="form-control" id="input" placeholder="Enter your password" onChange={password} />
          </div>

    </div>

     

    <div class="form-group row  justify-content-center" id='comment'>
         <label for="inputPassword" className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-4">
               <input name='name'  className="form-control" id="input" placeholder="Enter your Address " onChange={address} />
          </div>

    </div>

    
</form>
 
 </div>


 <div  className='d-flex justify-content-center '  id='button'>
    
     
     <button type="button" className="btn btn-outline-success" id='feed-submit' onClick={create} >Create an account</button>
  
 </div>



 <div  className='d-flex justify-content-center  '  id='button'>
    
<a href='/login' id='login_link' > Already have an account please Login</a>

    </div>


    
    </div>
  )
}


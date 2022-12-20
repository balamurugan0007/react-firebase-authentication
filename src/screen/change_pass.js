import React from 'react'
import { useState } from 'react';
export const Changepassword = () => {

  
  const[Pass1,Setpass1]=useState("");
  const[Pass2,Setpass2]=useState("");

const password1=(e)=>{
  Setpass1(e.target.value);

}

const password2=(e)=>{
  Setpass2(e.target.value);
}


  return (
    <div id="container">
       
     <h2 id='sign_up' className='d-flex justify-content-center'>Change Password</h2>
    <div className='sample'  >


        
     
     <form id='form' >
     
     <div className="form-group row d-flex justify-content-center" id='comment'>
         <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-4">
               <input name='pass1' type="password" className="form-control" id="input" placeholder="Enter your new password "  onChange={password1}/>
          </div>

    </div>


     <div className="form-group row d-flex justify-content-center" id='comment'>
         <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-4">
               <input name='pass2' type="password" className="form-control" id="input" placeholder="Confirm password"  onChange={password2}/>
          </div>

    </div>

   
    

    
</form>

<div  className='d-flex justify-content-center  '  id='button'>
    
     
    <button  className='btn btn-outline-success'>Submit</button>
    
   </div>
 
 </div>
    </div>
  )
}

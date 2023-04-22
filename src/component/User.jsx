import React from 'react'
import './ui.css'
import { BsPlusSquareFill,BsThreeDotsVertical } from "react-icons/bs";
const User = () => {
  return (
    <div className='main'>
         <div className="img" style={{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:'url(https://cdn.luxe.digital/media/2019/09/12090502/business-professional-dress-code-men-style-luxe-digital.jpg)'}}>
          <  BsPlusSquareFill className='plus'/>
          <BsThreeDotsVertical className='dot'/>
         </div>
         <div className="content">
          <h2 style={{color:"black",fontSize:"30px"}}>Rahul Arora</h2>
          <p>Front'end Web Developer </p>
          <div className="number">
<table cellPadding={3}>
     <thead>
       <tr>
         <td >102</td>
         <td >103</td>
         <td >104</td>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td >Posts</td>
         <td >Followers</td>
         <td >Following</td>
       </tr>
     </tbody>
 </table>
</div> 
         </div>
        
    </div>
  )
}

export default User

 

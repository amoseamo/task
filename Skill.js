import React from 'react';
 class Skill extends React.Component{
   render(){
        const {userEmployee}=this.props;
        const storeEmployee=userEmployee.map((e)=>{
         return(
            <div>
            <ul>
            <li>Name:{e.name}</li>
            <li>skills:{e.skills.map((n)=>{
               return(
                  <ul>
                     <li>Name:{n.name}</li>
                     <li>Type:{n.type}</li>
                  </ul>
               )
            })}
             
             </li>
             </ul>
            </div>
            
         )
            
        })
        return(
           <div>
              <p>hiii</p>
              <ul>
              {storeEmployee}
              </ul>
           </div> 
        );
    }
}
export default Skill;
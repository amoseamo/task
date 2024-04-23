import {useState} from 'react';
import Addlist from './Addlist.js';

function CrudOpt(){

  const list=[
     {
        id:1,
        name:"Ponraj",
        profession:"Senior Developer"
     },
     {
        id:2,
        name:"Amose",
        profession:"Editor"
     },
     {
        id:3,
        name:"Antro",
        profession:"Junior Developer"
     }
  ]
  const[lists,setlist]=useState(list);
  const[update,setupdate]=useState(null)
  const store=lists.map((current,i)=>{
    return(
      
       <tr key={i}>
         <td>{i+1}</td>
         <td>{
         update===current.id ? <input defaultValue={current.name} 
         onChange={(e)=>current.name=e.target.value}/>:current.name 

            }</td>
         <td>{
         update===current.id ? <input defaultValue={current.profession} 
         onChange={(e)=>current.profession=e.target.value}/>:current.profession 

            }</td>
         <td>
            {
            update===current.id ? <button onClick={()=>saveupdate()}>saveupdate</button>:
            <button onClick={()=>handleEdit(current.id)} >Edit</button>
            }
         </td>
         <td> 
            <button onClick={()=>handleDelete(current.id)}>Delete</button>
         </td>
      </tr>
            
    )
  })
  function handleEdit(id){
   setupdate(id)
  }
  function handleDelete(id){
      const newlist=lists.filter((li)=>li.id !==id);
    setlist(newlist);
  }
  function saveupdate(){
     setupdate(null) 
  }

    return(
     <div>
         <Addlist setlist={setlist}/>
      
       <table className="crud-table">
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Profession</th>
            <th colspan="2">Update</th>
        </thead>
        <tbody>{store}</tbody>
       </table>
      
    
     </div>
    );

}
export default CrudOpt;
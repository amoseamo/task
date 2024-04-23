import {useState} from "react";
import { Data } from "./Data";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

  function Search(){
    console.log(Data);
     const[searched, setsearched]=useState("")
     console.log(searched);
    return(
        <div className="search-table">
          <h1>Search filter</h1>
            <form 
             onChange={(e)=>{
              setsearched(e.target.value)
             }}
          
            
            >
              <InputGroup className="mb-3">
               <Form.Control placeholder="Search filter"/>
              </InputGroup>
            </form>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {
          Data.filter((item)=>{
           return searched.toLowerCase()===""?item:item.first_name.toLowerCase().includes(searched)
          }).map((item)=>{
            return(
              
                <tr>
                 <td>{item.id}</td>
                 <td>{item.first_name}</td>
                 <td>{item.last_name}</td>
                 <td>{item.email}</td>
                 <td>{item.gender}</td>
               </tr>
            
            )
            
         
          })  
        }
          
        
      </tbody>
    </Table>
        </div>
    );
}
export default Search;
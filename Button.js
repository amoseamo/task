import {useState} from "react";

const Buttoncreate=()=>{
    const [message,setmessage]=useState("You are not authorized user");
    return(
        <div className="container">
            <p>Message:{message}</p>
            <button onClick={()=>setmessage("you are sign in")}>Sign in</button>
            <button onClick={()=>setmessage("you are sign out")}>Sign out</button>
        </div>
    ); 
}
export default Buttoncreate;
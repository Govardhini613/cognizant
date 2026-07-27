import { useState } from "react";
import Guest from "./Components/Guest";
import User from "./Components/User";

function App() {

  const [login,setLogin]=useState(false);

  return (

    <div style={{textAlign:"center"}}>

      <h1>Ticket Booking App</h1>

      {
        login
        ?
        <>
            <button onClick={()=>setLogin(false)}>
                Logout
            </button>

            <User/>
        </>
        :
        <>
            <button onClick={()=>setLogin(true)}>
                Login
            </button>

            <Guest/>
        </>
      }

    </div>

  );

}

export default App;
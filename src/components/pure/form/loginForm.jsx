import React, {useState} from "react";


const Loginform = () => {

    const initialCredential =[

        {
            user : "",
            password : ""
        }
    ] 
    
    const [credential, setCredential] = useState(initialCredential);

    return(
        <div>

        </div>
    )

}


export default Loginform;
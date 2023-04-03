
import React, {useState} from 'react'

export default function Registerform() {

    const initialData = [
        {
            user: "",
            name: "",
            email: "",
            password: ""
        }
    ]

    const [data, setData] = useState(initialData)

  return (
    <div>registerForm</div>
  )
}

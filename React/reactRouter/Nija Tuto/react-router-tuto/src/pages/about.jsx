import React, { useState } from "react";
import { Navigate } from "react-router-dom";
export default function About() {
    const [user, setUser] = useState("ilorez")
    if (!user) {
        return (<Navigate to="/" replace={true} />)
    }
    return (
        <>

            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quos fugiat animi exercitationem consectetur vitae, minus cupiditate dicta. Assumenda, blanditiis.</p>

            <button onClick={() => setUser(undefined)}>Logout</button>
        </>
    )
}
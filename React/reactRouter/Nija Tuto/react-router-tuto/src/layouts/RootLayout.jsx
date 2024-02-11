import { Outlet, NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

import "./RootLayout.css"
import { useState } from "react";
export default function RootLayout() {
    const [user, setUser] = useState("ilorez")
    let btnValue = user ? 'logout' : 'login'
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="careers">Careers</NavLink>
                    {
                        <button type="button" onClick={() => setUser(!user)}>{btnValue}</button>
                    }
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
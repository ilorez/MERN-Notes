import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function Help() {
    return (
        <div>
            <p>In what you need Help</p>
            <div className="help-nav">
                <Link to="faq">Faq</Link>
                <Link to="contact">Contact</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>

    )
}
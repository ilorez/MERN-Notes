import { Outlet } from "react-router-dom";

export default function CareersLayout() {
    return (
        <>
            <h2>Careers List</h2>
            <div>
                <Outlet />
            </div>
        </>
    )
}
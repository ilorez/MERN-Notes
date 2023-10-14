import { Link, useRouteError } from "react-router-dom";

export default function CareersError() {
    const err = useRouteError()
    return (
        <div className="careers-error">
            <h4>{err.message}</h4>
            <Link to="/" >Back to Homepage</Link>
        </div>
    )

}
import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()

    return (
        <div className="careers-container">
            {careers.map(c => (
                <div key={c.id}>
                    < Link to="/"  >
                        <p >{c.title}</p>
                        <p >{c.location}</p>
                    </Link >
                </div>
            ))}
        </div>
    )
}

export const loadingCarrers = async () => {
    const res = await fetch("http://localhost:4000/careers")

    return res.json()
}
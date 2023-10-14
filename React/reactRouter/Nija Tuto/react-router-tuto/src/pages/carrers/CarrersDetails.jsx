import { useLoaderData, useParams } from "react-router-dom";

export default function CareersDetails() {
    // const { id } = useParams()
    const career = useLoaderData()
    return (
        <div className="careers-details">
            <h3>Career: {career.title} </h3>
            <p>Salary: {career.salary}</p>
            <p>location: {career.location}</p>
            <h4>Details</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis libero itaque, a ad, iste tempore dolorem sunt amet reiciendis, in necessitatibus et distinctio at neque enim! Magnam, voluptatum veniam.
            </p>

        </div>
    )
}

export const loadingCarrerDetails = async ({ params }) => {
    const { id } = params
    // console.log(id)
    const res = await fetch("http://localhost:4000/careers/" + id)
    if (!res.ok) {
        throw Error("this career not found")
    }
    return res.json()
}
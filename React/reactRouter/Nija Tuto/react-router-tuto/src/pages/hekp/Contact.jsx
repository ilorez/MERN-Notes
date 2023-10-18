import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
    const data = useActionData()
    return (
        <div>
            <p>I'm the page of Contact</p>
            <Form method="post" action="/help/contact" >
                <div>
                    <label htmlFor="username">Username : </label>
                    <input type="text" name="username" id="username" placeholder="username" required />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" id="email" placeholder="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message : </label>
                    <textarea type="message" name="message" id="message" placeholder="message" required ></textarea>
                </div>
                {data && data.error && <p style={{ color: "red" }}>{data.error}</p>}
                <div>
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </div>
    )
}

export const contactAction = async ({ request }) => {

    const data = await request.formData()
    const submission = {
        username: data.get("username"),
        email: data.get("email"),
        message: data.get("message"),
    }
    console.log(submission)
    // conditions and connection with db
    if (submission.message.length < 15) {
        return { error: "the message length must be over 15 chars" }
    }

    // redirect
    return redirect("/")

}
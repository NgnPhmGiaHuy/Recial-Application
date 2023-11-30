import axios from "axios";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    if (req.method === "POST") {
        const {session_key, hashedPassword, session_firstname, session_lastname} = await req.json();

        const dataToSend = {
            session_key,
            hashedPassword,
            session_firstname,
            session_lastname,
        };

        try {
            const response = await axios.post("http://localhost:8080/api/auth/register", dataToSend);

            if (response.data.userExists) {
                console.log("Existed User");
                return res.status(200).json({ userExists: true });
            } else {
                console.log("Wrong thing with response.data.userExists");
                return res.status(200).json({ userExists: false });
            }
        } catch (error) {
            console.log(error)
            return NextResponse.json({error: "Server error"})
        }
    } else {
        return NextResponse.json({error: "Method not allowed"});
    }
}
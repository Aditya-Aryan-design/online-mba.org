"use server"
import { Resend } from "resend";
const resend = new Resend("re_hmLtsAeA_4VNHttgby8orxwBcQTehCFRt")


export default async function(
    name:string,
    email:string,
    phone:string,
    course:string
){

    try {


        await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: "adityaaryan987654321@gmail.com",
            subject: "New Applicant",
            html: `
            <h1>Name:<b>${name}</b></h1>
            <h1>Phone:<b>${phone}</b></h1>
            <h1>Email:<b>${email}</b></h1>
            <h1>Course:<b>${course}</b></h1>
            `
        }) 
        
        return true
    } catch (e) {
        console.log(e);
        
        return false
    }

}
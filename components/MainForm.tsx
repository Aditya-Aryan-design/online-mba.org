"use client"
import { memo, useRef, useState } from "react"
import FormButton from "./FormButton"
import emailjs from "@emailjs/browser"


const MainForm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [course, setCourse] = useState("OnlineMBA")
  const [univercity, setUnivercity] = useState("Dr.D.Y.PatilUniversity")
  const [err, setErr] = useState(true)
  const [msg, setMsg] = useState("")


  const handleSubmit=async()=>{
  
    
    try {
      const res = await emailjs.send("service_7t9otim","template_mqytsfo",{
        name,email,phone,course,univercity
      },{publicKey:"-TP_H6z9wVE4hM3Eb"})

    
      if(!res){
        
        setMsg("Oops, some error accurd!")
        setErr(true)
        return
      }

      setMsg("Thanks, our team will contact you soon.")
      setErr(false)
      setName("")
      setEmail("")
      setPhone("")
      
    } catch (e) {
      console.log(e);
      
      setMsg("Oops, some error accurd!")
      setErr(true)
    }

    
  }

  return (
    <section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">

    <iframe width="100%" height="100%" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter: "grayscale(0.5) contrast(1.2) opacity(0.4)"}}></iframe>

  </div>

  <form className="container px-5 py-24 mx-auto flex" id="form" action={handleSubmit}>

    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">

      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Fill the form</h2>

      <div className="relative mb-4 flex flex-col space-y-3">
        <input type="text" name="name" placeholder="Name" className="inp" value={name} onChange={(e)=>setName(e.target.value)} required/>
      
        <input type="email" name="email" placeholder="Email" className="inp" value={email} onChange={(e)=>setEmail(e.target.value)} required/>

        <input type="tel" name="phone" placeholder="Phone" className="inp" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>

        <select name="course" className="inp" value={course} onChange={(e)=>setCourse(e.target.value)}>
            <option value="OnlineMBA">Online MBA</option>
            <option value="OnlineBBA">Online BBA</option>
            <option value="OnlineMCA">Online MCA</option>
            <option value="OnlineBCA">Online BCA</option>
        </select>

        <select name="course" className="inp" value={univercity} onChange={(e)=>setUnivercity(e.target.value)}>
        <option value="Dr.D.Y.PatilUniversity">Dr. D. Y. Patil University</option>
            <option value="AmityUniversity">Amity University</option>
            <option value="ManipalUniversity">Manipal University</option>
            <option value="SureshGyanVihar University">Suresh GyanVihar University</option>
        </select>
      </div>

      <p className={`text-[0.6rem] sm:text-xs text-center font-semibold ${err?"text-red-500":"text-green-500"}`}>{msg}</p>
      
      <FormButton />
    </div>
  </form>
</section>
  )
}

export default memo(MainForm)

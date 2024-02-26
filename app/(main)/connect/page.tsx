"use client"
import { memo } from "react"
import ownerDetails from "@/data/ownerDetails"
import FormButton from "@/components/FormButton"
import { useState } from "react"
import emailjs from "@emailjs/browser"



const page = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [course, setCourse] = useState("OnlineMBA")
  const [univercity, setUnivercity] = useState("Dr.D.Y.PatilUniversity")
  const [err, setErr] = useState(true)
  const [msg, setMsg] = useState("")

  const handleSubmit=async()=>{
  
    
    try {
      const res = await emailjs.send("service_w6cvjlt","template_9zcch3c",{
        name,email,phone,course,univercity
      },{publicKey:"rZx2nD2tV6fx042R8"})

      console.log(res);
      
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
  <div className="container px-5 py-3 mx-auto">
    <div className="flex flex-col text-center w-full">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Connect Us</h1>

    </div>
    <form action={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap">

        <div className="px-2 w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-600 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            
            value={name}
            onChange={(e)=>setName(e.target.value)}
            
            />
          </div>
        </div>

        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-600 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
            />
          </div>
        </div>

        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="phone" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-600 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="course" className="leading-7 text-sm text-gray-600">Course</label>
            <select id="course" name="course" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-600 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            
            value={course}
            onChange={(e)=>setCourse(e.target.value)}
            
            >

            <option value="OnlineMBA">Online MBA</option>
            <option value="OnlineBBA">Online BBA</option>
            <option value="OnlineMCA">Online MCA</option>
            <option value="OnlineBCA">Online BCA</option>

            </select>
          </div>
        </div>

        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="univercity" className="leading-7 text-sm text-gray-600">University</label>
            <select id="univercity" name="univercity" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-600 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            
            value={univercity}
            onChange={(e)=>setUnivercity(e.target.value)}
            
            >

            <option value="Dr.D.Y.PatilUniversity">Dr. D. Y. Patil University</option>
            <option value="AmityUniversity">Amity University</option>
            <option value="ManipalUniversity">Manipal University</option>
            <option value="SureshGyanVihar University">Suresh GyanVihar University</option>

            </select>
          </div>
        </div>
        <p className={`text-[0.6rem] sm:text-xs text-center font-semibold ${err?"text-red-500":"text-green-500"}`}>{msg}</p>
        <div className="p-2 w-full">
          <FormButton /></div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">

          <p className="font-semibold">
            For any query feel free to send mail on <a className="text-orange-600" href={`mailto:${ownerDetails.email}`}>{ownerDetails.email}</a> or Whatsapp <a className="text-orange-600" href={`tel:${ownerDetails.phone}`}>{ownerDetails.phone}</a>

          </p>
          
        </div>
      </div>
    </form>
  </div>
</section>
  )
}

export default memo(page)

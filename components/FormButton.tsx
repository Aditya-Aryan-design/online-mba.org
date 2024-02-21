import { useFormStatus } from "react-dom"

const FormButton = () => {

    const formStatus = useFormStatus()

  return (
    <button className="text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded text-lg" type="submit" disabled={formStatus.pending}>{formStatus.pending?"Submiting...":"Enroll Now"}</button>
  )
}

export default FormButton

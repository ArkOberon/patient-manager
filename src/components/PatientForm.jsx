import { useState, useEffect } from "react"
import Error from "./Error"

const PatientForm = ({ patients, setPatients, infoPatient }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [symptoms, setSymptoms] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    
  },[infoPatient])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación del Formulario
    if([firstName, lastName, email, date, symptoms].includes("")) {
      setError(true)
      return
    } 

    setError(false)

    const infoPatient = {
      firstName, 
      lastName, 
      email, 
      date, 
      symptoms,
      id: generarId()
    }  

    setPatients([...patients, infoPatient])

    setFirstName("")
    setLastName("")
    setEmail("")
    setDate("")
    setSymptoms("")
  }

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Patient Form</h2>
      <p className="text-center text-lg mt-2 mb-10">Add your patients here</p>

      <form 
        onSubmit={handleSubmit}
        className="bg-gray-100 shadow-lg rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error message="Please, fill all fields"/>}
        
        <div className="mb-5">
          <label htmlFor="firstName" className="block text-gray-700 uppercase font-bold">
            First Name
          </label>
          <input
            id="firstName" 
            type="text"
            placeholder="Patient´s first name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            value={firstName}
            onChange={ (e) => setFirstName(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="lastName" className="block text-gray-700 uppercase font-bold">
            Last Name
          </label>
          <input
            id="lastName" 
            type="text"
            placeholder="Patient´s last Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            value={lastName}
            onChange={ (e) => setLastName(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email" 
            type="email"
            placeholder="Patient´s contact email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
            Registration Date
          </label>
          <input
            id="date" 
            type="date"            
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            value={date}
            onChange={ (e) => setDate(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
            Patient Symptoms
          </label>
          <textarea 
            id="symptoms" 
            type="text"
            placeholder="Patient´s symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
            value={symptoms}
            onChange={ (e) => setSymptoms(e.target.value) }
          />
        </div>

        <input 
          type="submit" 
          value="Add Patient"
          className="bg-teal-500 w-full p-3 text-white uppercase font-bold
           hover:bg-yellow-500 rounded-lg cursor-pointer transition-all"        
        />               
      </form>    
    </div>    
  )
}

export default PatientForm
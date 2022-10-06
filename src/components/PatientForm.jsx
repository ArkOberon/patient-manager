import { useState, useEffect } from "react"

const PatientForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [symptoms, setSymptoms] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación del Formulario
    if([firstName, lastName, email, date, symptoms].includes("")) {
      console.log("faltan campos por rellenar")
    } else {
      console.log("todo está correcto")
    }
  }

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Patient Form</h2>
      <p className="text-center text-lg mt-2 mb-10">Add your patients here</p>

      <form 
        onSubmit={handleSubmit}
        className="bg-gray-100 shadow-lg rounded-lg py-10 px-5 mb-10"
      >
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
          className="bg-teal-700 w-full p-3 text-white uppercase font-bold
           hover:bg-yellow-500 rounded-lg cursor-pointer transition-all"        
        />               
      </form>    
    </div>    
  )
}

export default PatientForm
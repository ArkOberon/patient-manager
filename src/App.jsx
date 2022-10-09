import { useState, useEffect } from 'react'
import Header from './components/Header'
import PatientForm from './components/PatientForm'
import PatientList from './components/PatientList'

function App() {

  const [patients, setPatients] = useState([])
  const [infoPatient, setInfoPatient] = useState({})

  useEffect( () => {

    const obtainLS = () => {
      const patientLS = JSON.parse(localStorage.getItem("Patient List")) ?? [];
      setPatients(patientLS) 
    }

    obtainLS()
    
  },[])
  
  useEffect(() => {
    localStorage.setItem("Patient List", JSON.stringify( patients ))
  },[patients])  

  const deletePatient = id =>{
    
    const patientListUpdate = patients.filter( infoPatient => infoPatient.id !==  id )
    setPatients(patientListUpdate)
  }  

  return (
    <div className='container mx-auto mt-20 p-10'>
      <Header />
      <div className='mt-12 md:flex'>
        <PatientForm 
          patients={patients}
          setPatients={setPatients}
          infoPatient={infoPatient}
          setInfoPatient={setInfoPatient} 
        />
        <PatientList 
          patients={patients}   
          setInfoPatient={setInfoPatient}  
          deletePatient={deletePatient}   
        />
      </div>
      
    </div>
  )
}

export default App

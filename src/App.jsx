import { useState } from 'react'
import Header from './components/Header'
import PatientForm from './components/PatientForm'
import PatientList from './components/PatientList'

function App() {

  const [patients, setPatients] = useState([])
  const [infoPatient, setInfoPatient] = useState({})

  return (
    <div className='container mx-auto mt-20 p-10'>
      <Header />
      <div className='mt-12 md:flex'>
        <PatientForm 
          patients={patients}
          setPatients={setPatients}
          infoPatient={infoPatient}
        />
        <PatientList 
          patients={patients}   
          setInfoPatient={setInfoPatient}     
        />
      </div>
      
    </div>
  )
}

export default App

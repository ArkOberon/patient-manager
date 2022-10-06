import Patient from "./Patient"

const PatientList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Patient List</h2>
      <p className="text-center text-lg mt2 mb-10">Manage your patients</p> 
      <div className="md:h-screen overflow-y-scroll">
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
      </div>         
    </div>    
  )
}

export default PatientList
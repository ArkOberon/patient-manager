import Patient from "./Patient"

const PatientList = ({ patients, setInfoPatient }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5">    
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient List</h2>
          <p className="text-center text-lg mt2 mb-10">Manage your patients</p> 
          <div className="md:h-screen overflow-y-scroll">
            
            {patients.map( infoPatients => (
              <Patient 
                key={infoPatients.id}
                infoPatients={infoPatients}
                setInfoPatient={setInfoPatient}
              />
            ))}           
          </div>
        </>
        ) : (
          <>          
            <h2 className="font-black text-3xl text-center">Patient´s list is empty</h2>
            <p className="text-center text-lg mt2 mb-10">Start adding your own patients</p>                   
          </>
        )     
      }                 
    </div>    
  )
}

export default PatientList
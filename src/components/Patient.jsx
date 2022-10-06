const Patient = ({ infoPatients }) => {

  const { firstName, lastName, email, date, symptoms } = infoPatients

  return (
    <div className="m-3 bg-white px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">First Name: {''}
        <span className="font-normal normal-case">{firstName}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Last Name: {''}
        <span className="font-normal normal-case">{lastName}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Registration Date: {''}
        <span className="font-normal normal-case">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Patient´s symptoms: {''}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>    
      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-teal-500 text-white font-bold hover:bg-teal-700 rounded-lg"
        >
          Editar
        </button>
        <button 
          type="button"
          className="py-2 px-10 bg-red-600 text-white font-bold hover:bg-red-900 rounded-lg"
        >
          Eliminar
        </button>
      </div>  
    </div>    
  )
}

export default Patient
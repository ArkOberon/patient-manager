import React from 'react'

const Pacient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">First Name: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Last Name: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Registration Date: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Patient´s symptoms: {''}
        <span className="font-normal normal-case">Lorem ipsum dolor sit, amet consectetur 
          adipisicing elit. Minima voluptatem iste maxime, odio officia veritatis accusamus 
          provident eveniet laboriosam non at rem adipisci exercitationem quae sint assumenda 
          repellat a culpa!
        </span>
      </p>      
    </div>
  )
}

export default Pacient
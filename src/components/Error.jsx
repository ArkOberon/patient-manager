import { useState, useEffect } from "react"

const Error = ({ message }) => {
  return (
    <div className="bg-red-800 text-white text-center py-5 px-5 uppercase font-bold mb-3 rounded-md">
      <p>{message}</p>
    </div>
  )
}

export default Error
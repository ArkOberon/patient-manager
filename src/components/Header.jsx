import medicineUndraw from '../assets/undraw_medicine_b-1-ol.svg'

function Header() {
  return (
    <>    
      <img src={medicineUndraw} className='sm:w-40 md:w-60 mx-auto mb-10' alt='medicine svg' />
      <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto'>
        Patient Schedule {""}
        <span className='text-teal-500'>Manager</span>
      </h1>
    </>
  )
}

export default Header
import { useState } from 'react';
import 'animate.css';

const App = ()=> {

  const model = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    username: '',
    mobile: ''
  }

  const errModel = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    username: null,
    mobile: null
  }
  const [form, setForm] = useState(model)
  const [formError, setFormError] = useState(errModel)

  const validator = (key, value)=> {
    if(value.length === 0){
      setFormError({
        ...formError,
        [key]:  `${key} field required`
      })
    }
    else {
      setFormError({
        ...formError,
        [key]: null
      })
    }
  }

  const getFormValue = (e)=> {
    const input = e.target
    const value = input.value
    const key = input.name
    
    setForm({
      ...form,
      [key]: value
    })

    validator(key, value)
  }

  const signup = (e)=> {
    e.preventDefault()
    const keys = Object.keys(form)
    for(let key of keys){
      let value = form[key]
      validator(key, value)
    }
  }
  return (

    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      
      <div className="bg-white px-8 py-6 w-[450px] shadow-lg rounded-lg animate__animated animate__zoomIn">
        
        <h1 className='text-2xl font-bold mb-5 text-center text-green-600'>Manjit Singh Sign up Form</h1>
        <form action="" className='flex flex-col gap-4' onSubmit={signup}>
          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-lg font-semibold'>First Name</label>
            <input 
                type="text" 
                placeholder='Enter First name' 
                name='firstname'
                className='border p-2 rounded border-gray-300'
                onChange={getFormValue}
            />
            { formError.firstname && <small className='text-rose-600 font-semibold text-sm'>{formError.firstname}</small> }
            
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-lg font-semibold'>Last Name</label>
            <input 
                type="text" 
                placeholder='Enter Last name' 
                name='lastname'
                className='border p-2 rounded border-gray-300'
                onChange={getFormValue}
            />
            { formError.lastname && <small className='text-rose-600 font-semibold text-sm'>{formError.lastname}</small> }
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-lg font-semibold'>Email</label>
            <input 
                type="email" 
                placeholder='abc@gmail.com' 
                name='email'
                className='border p-2 rounded border-gray-300'
                onChange={getFormValue}
            />
            { formError.email && <small className='text-rose-600 font-semibold text-sm'>{formError.email}</small> }
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-lg font-semibold'>Password</label>
            <input 
                type="password" 
                placeholder='*******' 
                name='password'
                className='border p-2 rounded border-gray-300'
                onChange={getFormValue}
            />
            { formError.password && <small className='text-rose-600 font-semibold text-sm'>{formError.password}</small> }
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-lg font-semibold'>Username</label>
            <input 
                type="text" 
                placeholder='@Username' 
                name='username'
                className='border p-2 rounded border-gray-300'
                onChange={getFormValue}
            />
            { formError.username && <small className='text-rose-600 font-semibold text-sm'>{formError.username}</small> }
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-lg font-semibold'>Mobile No.</label>
            <input 
                type="number" 
                placeholder='894847358' 
                name='mobile'
                className='border p-2 rounded border-gray-300'
                onChange={getFormValue}
            />
            { formError.mobile && <small className='text-rose-600 font-semibold text-sm'>{formError.mobile}</small> }
          </div>

          <button className='border-0 bg-indigo-600 text-white rounded py-2 font-semibold '>SUBMIT</button>
        </form>
        
      </div>
      
    </div>
  )
}
export default App
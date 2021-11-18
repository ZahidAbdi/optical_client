import React, {useState} from 'react'
const Context = React.createContext()

function ContextProvider(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [appointmentTime, setAppointmentTime] = useState('')
  const [appointmentDate, setAppointmentDate] = useState('')
  const [doctor, setDoctor] = useState('')
  const [eyeExam, setEyeExam] = useState(false)
  const [contactLensExam, setContactLensExam] = useState(false)
  const [insurer, setInsurer] = useState('')
  const [groupNumber, setGroupNumber] = useState('')
  const [insured, setInsured] = useState(false)
  const [outOfPocket, setOutOfPocket] = useState(false)

  function handleFirstName (e) {
    setFirstName(prev => e.target.value)
  }
  
  function handleLastName (e) {
    setLastName(prev => e.target.value)
  }
  
  function handleDateOfBirth (e) {
    setDateOfBirth(prev => e.target.value)
  }

  function handlePhoneNumber (e) {
    setPhoneNumber(prev => e.target.value)
  }

  function handleAddress (e) {
    setAddress(prev => e.target.value)
  }

  function handleAppointmentTime (e) {
    setAppointmentTime(prev => e.target.value)
  }

  function handleAppointmentDate (e) {
    setAppointmentDate(prev => e.target.value)
  }

  function handleDoctor (e) {
    setDoctor(prev => e.target.value)
  }

  function handleEyeExam (e) {
    e.preventDefault()
    setEyeExam(prev => true)
    setContactLensExam(prev => false)
  }

  function handleContactLensExam (e) {
    e.preventDefault()
    setContactLensExam(prev => true)
    setEyeExam(prev => false)
  }

  function handleInsurer (e) {
    setInsurer(prev => e.target.value)
  }

  function handleGroupNumber (e) {
    setGroupNumber(prev => e.target.value)
  }

  function handleInsured (e) {
    e.preventDefault()
    setInsured(prev => true)
    setOutOfPocket(prev => false)
  }

  function handleOutOfPocket (e) {
    e.preventDefault()
    setOutOfPocket(prev => true)
    setInsured(prev => false)
  }

  function handleSubmit() {
    //
  }

  return (
    <Context.Provider value={{firstName, handleFirstName, lastName, handleLastName, dateOfBirth, handleDateOfBirth, phoneNumber, handlePhoneNumber, address, handleAddress, appointmentTime, handleAppointmentTime, appointmentDate, handleAppointmentDate, doctor, handleDoctor, eyeExam, handleEyeExam, contactLensExam, handleContactLensExam, insurer, handleInsurer, groupNumber, handleGroupNumber, insured, handleInsured, outOfPocket, handleOutOfPocket, handleSubmit}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}

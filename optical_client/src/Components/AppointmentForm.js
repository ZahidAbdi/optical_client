import React, {useContext} from 'react'
import {Context} from '../Context'

function AppointmentForm() {
  const {firstName, handleFirstName, lastName, handleLastName, dateOfBirth, handleDateOfBirth, phoneNumber, handlePhoneNumber, address, handleAddress, appointmentTime, handleAppointmentTime, appointmentDate, handleAppointmentDate, doctor, handleDoctor, handleEyeExam, handleContactLensExam, insurer, handleInsurer, groupNumber, handleGroupNumber, insured, handleInsured, handleOutOfPocket, handleSubmit} = useContext(Context)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name
          <input
            type="text"
            name="first name"
            value={firstName}
            onChange={handleFirstName}
          />
        </label>
        <br />
        <label>Last Name
          <input
            type="text"
            name="last name"
            value={lastName}
            onChange={handleLastName}
          />
        </label>
        <br />
        <label>Date of Birth
          <input
            type="date"
            name="date of birth"
            value={dateOfBirth}
            onChange={handleDateOfBirth}
          />
        </label>
        <br />
        <label>Phone #
          <input
            type="text"
            name="phone number"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
        </label>
        <br />
        <label>Address
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleAddress}
          />
        </label>
        <br />
        <label>Date
          <input
            type="date"
            name="appointment date"
            value={appointmentDate}
            onChange={handleAppointmentDate}
          />
        </label>
        <br />
        <label>Time
          <input
            type="text"
            name="appointment time"
            value={appointmentTime}
            onChange={handleAppointmentTime}
          />
        </label>
        <br />
        <label>Doctor
          <input
            type="text"
            name="doctor"
            value={doctor}
            onChange={handleDoctor}
          />
        </label>
        <br />
        <button onClick={handleEyeExam}>Eye Exam</button>
        <button onClick={handleContactLensExam}>Contact Lens Exam</button>
        <button onClick={handleInsured}>Insurance</button>
        <button onClick={handleOutOfPocket}>Out of Pocket</button>
        {insured && 
          <>
            <label>Insurer
              <input
                type="text"
                name="insurer"
                value={insurer}
                onChange={handleInsurer}
              />
            </label>
            <br />
            <label>Group Number
              <input
                type="text"
                name="group number"
                value={groupNumber}
                onChange={handleGroupNumber}
              />
            </label>
          </>
        }
        <button>Submit</button>
      </form>    
    </div>
  )
}

export default AppointmentForm

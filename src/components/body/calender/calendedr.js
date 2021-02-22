import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

function Calen() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
      <Calendar 
      value={dateState}
      onChange={changeDate}
      />
    </>
  )
}


export default Calen;
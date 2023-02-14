import React from 'react'

export default function Checkbox({checker, setChecker}) {
  return (
    <>
        <input type="checkbox" onChange={()=>{setChecker(!checker)}} />
        {checker ? "False" : "True"}
    </>
  )
}

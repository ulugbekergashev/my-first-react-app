import React from 'react'
import Checkbox from './Checkbox'

export default function Item({title}) {
  return (
    <li>
      <Checkbox checked={true} />
        {/* Salom mening ismim {title} */}
    </li>
  )
}

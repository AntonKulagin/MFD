import React from 'react'
import s from './radioInput.module.css'
import {getRandomValue} from '../../../utils/randomValue'

export const RadioInput = ({label, name, value, checked, onChange}) => {
  const endpoint = getRandomValue(0, 10000)
  return (
    <div className={s.radioBlock}>
      <label className={s.label} htmlFor={value + '_' + endpoint}>
        {label}
      </label>
      <input
        className={s.input}
        type='radio'
        name={name}
        value={value}
        id={value + '_' + endpoint}
        checked={checked}
        onChange={(e) => onChange(e.target)}
      />
    </div>
  )
}

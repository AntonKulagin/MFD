import React from 'react'
import s from './input.module.css'
import {getRandomValue} from '../../../utils/randomValue'

export const Input = ({value, type, name, placeholder, icon, onChange}) => {
  const endpoint = getRandomValue(0, 10000)

  const getClassInput = () => {
    const classInput = [s.input]
    if (icon) {
      classInput.push(s.padding)
    }
    return classInput.join(' ')
  }

  return (
    <div>
      <label className={s.label} htmlFor={name + '_' + endpoint}>
        {placeholder}
      </label>
      <div className={s.inputBlock}>
        <input
          className={getClassInput()}
          value={value}
          type={type}
          name={name}
          id={name + '_' + endpoint}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target)}
        />
        {icon && icon}
      </div>
    </div>
  )
}

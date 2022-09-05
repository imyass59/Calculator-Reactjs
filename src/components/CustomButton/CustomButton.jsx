import React from 'react'

export default function CustomButton(props) {
   const Hover = props.ColorHover;
  return (
    <>
        <span className={`flex justify-center items-center font-bold p-5 text-3xl text-white ${props.Bgcolor} hover:${Hover} cursor-pointer transition ease-in-out delay-50`}>
            {props.params}
        </span>
    </>
  )
}

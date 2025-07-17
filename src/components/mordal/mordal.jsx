import React from 'react'

function Mordal({text,setOpenMordal, className}) {
  return (
    <React.Fragment>
        <div className='mo_wrapper'>
            <div className='mo_container'>
                <span>{text}</span>
                <button onClick={() => setOpenMordal(false)} className={className}>
                    ok
                </button>
            </div>
        </div>
    </React.Fragment>
  )
}

export  {Mordal}
import React from 'react'
import {Link} from "react-router-dom"
function Mordal({text,setOpenMordal, className, to}) {
  return (
    <React.Fragment>
        <div className='mo_wrapper'>
            <div className='mo_container'>
                <span>{text}</span>
                <Link to={to}>
                
                <button onClick={() => setOpenMordal(false)} className={className}>
                    ok
                </button>
                </Link>
            </div>
        </div>
    </React.Fragment>
  )
}

export  {Mordal}
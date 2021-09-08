import React from 'react'

const Rating = ({value}) => {console.log(value)
    return (
        <div className='rating'>
           <span style={{color:'yellow'}}>
           <i className={
               value >= 1
               ? "fas fa-star-half"
               :value>=0.5
               ?"fas fa-star-half"
               :"far fa-start"}></i> 
            </span> 
            <span style={{color:'yellow'}}>
           <i className={
               value >= 2
               ? "far fa-star"
               :value>=1.5
               ?"far fa-star-half"
               :"far fa-start"}></i> 
            </span> 
            <span style={{color:'yellow'}}>
           <i className={
               value >= 3
               ? "far fa-star"
               :value>=2.5
               ?"far fa-star-half"
               :"far fa-start"}></i> 
            </span> 
            <span style={{color:'yellow'}}>
           <i className={
               value >= 4
               ? "far fa-star"
               :value>=3.5
               ?"far fa-star-half"
               :"far fa-start"}></i> 
            </span> 
            <span style={{color:'yellow'}}>
           <i className={
               value >= 5
               ? "far fa-star"
               :value>=4.5
               ?"far fa-star-half"
               :"far fa-start"}></i> 
            </span> 
        </div>
    )
}

export default Rating
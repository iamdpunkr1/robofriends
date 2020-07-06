import React from 'react'

const Card = ({id,name,email}) => {
  
    return(
        <div className='card col center'>

            <div className="card-image">
               <img src={`https://robohash.org/${id}?150x150`} alt='robo'/>
   
                </div>
                <div className="card-content ">
                        <h5>{name}</h5>
                        <p>{email}</p>
              </div>
  
        </div>
    )
}

export default Card;
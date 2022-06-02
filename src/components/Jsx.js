import React, {Fragment} from 'react'

const Jsx = () => {
  //const saludo = 'hola JSX'
  const temperature = 21;
  return (
    <Fragment>
    <h2>Cold or Hot</h2>
    <h4>
      {
        temperature > 20 ? ' Hot' : 'Cold'
      }
    </h4>
    </Fragment>
     
  )
}

export default Jsx

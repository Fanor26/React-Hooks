import React, {useState, Fragment} from 'react'

const Counter = () => {
//Hook
    const [number, setNumber] = useState(0);

    const increase = () => {
      console.log('you gave me a click');
      setNumber(number +1)
    }
  
  return (
    <Fragment>
        <h3>You Clicked {number} times</h3>
        <button onClick={increase}>Click Me</button>
        
    </Fragment>
  )
}

export default Counter

/*onClick event to process an action, 
example when you click on the button,
 what contains the keys inside an html 
 tag or another programming language will 
 be executed*/
import React, {useState, Fragment} from 'react'

const List = () => {
    const [arrayNumber, setArrayNumber] = useState([1,2,3,4,5]);
    const [number, setNumber] = useState(5)

    const addelement = () =>{

        setNumber(number+1)
        //console.log('click');
        setArrayNumber([
            ...arrayNumber,
            number
        ]);
    }
  return (
      <Fragment>
           <h2>List</h2>
           <button onClick={addelement}>Add</button>
           {
               arrayNumber.map((item, index) =>
                   <p key={index}>{item} - {index}</p>
               )
           }
      </Fragment>
   
  )
}

export default List
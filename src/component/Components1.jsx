import React from 'react'
import FunctionComponent from './FunctionComponent'
import ClassComponent from './Classcomponent'


const Components1 = () => {
  return (
    <div className='comp1'> 
    <div>
      <FunctionComponent/>
      </div>
      <div>
      <ClassComponent/>
      </div>
      
      
    </div>
  )
}

export default Components1

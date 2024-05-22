import React from 'react'

const Filter = ({ filterTodo }) => {

  return (
    
    <select className='filter-filter'  name="" id="" onChange={filterTodo}>
            {/* <option value="">All</option> */}
            <option value={false}>Active</option>
            <option value={true}>Completed</option>
          </select>
    
  )
}

export default Filter
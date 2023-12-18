import React from 'react'

const ListFile = ({todos,onDeleteHandler}) => {
  return (
    <div>
     {
        todos.map((todo)=>(
            <div id={todo.id}>  
                <h3>{todo.data}</h3>
                <button onClick={()=>onDeleteHandler(todo.id)}  >Delete</button> 
           </div>
        ))
     }

    </div>
  )
}

export default ListFile
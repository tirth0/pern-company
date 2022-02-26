import React, {useState} from 'react'
import List from '../Lists/List'
import useStyle from './ProjectStyle'
import { DragDropContext } from 'react-beautiful-dnd';


function Project() {

  const [lists, setLists] = useState([1])    
  const {classes, cx} = useStyle();

  const handleAddList = () => {
    console.log(lists)
    setLists([...lists, lists.length + 1])
  }

  return (
    <DragDropContext>
    <div className={classes.project}>
        <button onClick={handleAddList}>Add List</button>
        <div className={classes.container}>
        {
          lists.map((list, id) => {
            return <List 
              key={id} 
              id={id}
            />
          })
        }
        </div>
    </div>
    </DragDropContext>
  )
}

export default Project
import React, {useState, useEffect} from 'react'
import useStyles from './ListStyle';
import Card from '../Cards/Card';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


export default function List(props) {
  const {classes, cx} = useStyles();
  const [cards, setCards] = useState(["1","2","3","4","5","6","7","8","9"])
  return (
	<Droppable droppableId={`${props.id}`} type="LIST">
		{(provided) => (
		<div className={classes.container} {...provided.droppableProps} ref={provided.innerRef}>
			<div className={classes.title}>
				<h1>List</h1>
			</div>
			<div className={classes.cardContainer}>
				{
					<>
					{cards.map((card, id) => {
						return <Card key={id} id={card} listId={props.id}/>
					})}
					{provided.placeholder}
					</>

				}
				
			</div>
		</div>
		)}	
	</Droppable>
  )
}

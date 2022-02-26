import React, {useState} from 'react'
import useStyles from './CardStyle'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { RichTextEditor } from '@mantine/rte';
import { useClickOutside } from '@mantine/hooks';

function Card(props) {

    const {classes, cx} = useStyles();
    const [opened, setOpened] = useState(false);

    const [value, setValue] = useState("");
    const ref = useClickOutside(() => setOpened(false));
    return (
        <Draggable draggableId={`${props.id+props.listId}`} index={parseInt(props.id)}>
            {(provided) => (
            <div className={classes.card} 
                ref={provided.innerRef} 
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
                onClick={()=>setOpened(true)}
            >
                <div
                    ref={ref}
                >
                <div className={classes.cardHeader}>
                    <p>Card</p>
                </div>
                <div className={classes.cardBody} >
                    Here is the text of my body and what are you gonna do about it bitch
                </div>
                <div className={classes.cardActions} >
                {opened && <RichTextEditor
                    controls={[
                        
                        ['unorderedList', 'h1', 'h2', 'h3'],
                        ['sup', 'sub'],
                        ['alignLeft', 'alignCenter', 'alignRight'],
                    ]}
                    value={value}
                    onChange={setValue}
                />}
                </div>
                </div>
            </div>
            )}
        </Draggable>
    )
}

export default Card
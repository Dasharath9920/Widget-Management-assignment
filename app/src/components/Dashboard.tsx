import { useContext, useEffect, useState } from 'react'
import widgetData from '../data';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Widget from './Widget';
import { addWidget } from '../constants';
import AddWidgetModal from './AddWidgetModal';
import { MyContext } from '../ContextProvider';

const Dashboard = () => {
   const { state } = useContext(MyContext);

   const [widgets, setWidgets] = useState([...state.addedWidgets]);
   const [openModal, setOpenModal] = useState(false);

   const handleDragEnd = (data: any) => {
      if(!data.destination) return;
      
      let newItems = [...widgets];
      const [movedItem] = newItems.splice(data.source.index,1);
      newItems.splice(data.destination.index,0,movedItem);
      setWidgets(newItems);
   }

   useEffect(() => {
      setWidgets([...state.addedWidgets]);
   }, [state.addedWidgets]);

  return (
    <div className='p-3'>
      <DragDropContext onDragEnd={handleDragEnd}>
         <Droppable droppableId='widget-container'>
            {(provided) => (
               <div className='flex flex-wrap gap-2 justify-evenly transition-transform duration-300 ease-in-out' {...provided.droppableProps} ref={provided.innerRef}>
                  {widgets.map((widget, index) => {
                     return <Draggable key={widget.id} draggableId={widget.id} index={index}>
                        {(provided) => (
                           <div className='cursor-grab' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                              <Widget widget={widget} openModal={setOpenModal}/>
                           </div>
                        )}
                     </Draggable>
                  })}
                  <div className='cursor-pointer'>
                     <Widget widget={addWidget} openModal={setOpenModal}/>
                  </div>
                  <AddWidgetModal isOpen={openModal} closeModal={() => setOpenModal(false)} onAddWidget={() => console.log('')}/>
               </div>
            )}
         </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Dashboard;
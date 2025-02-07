import { useContext, useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Widget from './Widget';
import { addWidget, Actions, Themes } from '../constants';
import AddWidgetModal from './AddWidgetModal';
import { MyContext } from '../ContextProvider';

const Dashboard = () => {
   const { state, dispatch } = useContext(MyContext);
   const isDarkTheme = state.theme === Themes.DARK;

   const [widgets, setWidgets] = useState([...state.addedWidgets]);
   const [openModal, setOpenModal] = useState(false);
   const [isResizing, setIsResizing] = useState(false);

   const handleDragEnd = (data: any) => {
      if(!data.destination) return;

      let newItems = [...widgets];
      const [movedItem] = newItems.splice(data.source.index,1);
      newItems.splice(data.destination.index,0,movedItem);
      setWidgets(newItems);
      dispatch({
         type: Actions.UPDATE_WIDGETS,
         payload: newItems
      })
   }

   const handleRemoveWidget = (widgetId: string) => {
      let newItems = state.addedWidgets.filter(widget => widget.id !== widgetId);
      dispatch({
         type: Actions.UPDATE_WIDGETS,
         payload: newItems
      })
   }

   useEffect(() => {
      setWidgets([...state.addedWidgets]);
   }, [state.addedWidgets]);

  return (
    <div className={`p-3 h-screen ${isDarkTheme? 'bg-blue-950/70': 'white'}`}>
      <DragDropContext onDragEnd={handleDragEnd}>
         <Droppable droppableId='widget-container'>
            {(provided) => (
               <div className='flex items-center'>
                  <div className='flex flex-wrap gap-2 transition-transform duration-300 ease-in-out' {...provided.droppableProps} ref={provided.innerRef}>
                     {widgets.map((widget, index) => {
                        return <Draggable key={widget.id} draggableId={widget.id} index={index} isDragDisabled={isResizing}>
                           {(provided) => (
                              <div className='cursor-grab' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                 <Widget widget={widget} openModal={setOpenModal} removeWidget={handleRemoveWidget} isResizing={setIsResizing}/>
                              </div>
                           )}
                        </Draggable>
                     })}
                     <div className='cursor-pointer'>
                        <Widget widget={addWidget} openModal={setOpenModal} removeWidget={handleRemoveWidget} isResizing={setIsResizing}/>
                     </div>
                     <AddWidgetModal isOpen={openModal} closeModal={() => setOpenModal(false)}/>
                  </div>
               </div>
            )}
         </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Dashboard;
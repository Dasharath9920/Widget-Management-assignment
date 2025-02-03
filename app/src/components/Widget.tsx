import React, { useContext, useState } from 'react'
import { Actions, WidgetType } from '../constants';
import { MyContext } from '../ContextProvider';
import { getWidgetComponent } from '../helper';

const Widget = ({widget, openModal, removeWidget}: {widget: WidgetType, openModal: (shouldOpen: boolean) => void, removeWidget: (widgetId: string) => void}) => {

   const { state, dispatch } = useContext(MyContext);

   const isAddButtonWidget: boolean = widget.id === 'add-widget';
   const [width, setWidth] = useState(widget.size?.width || 120);
   const [height, setHeight] = useState(widget.size?.height || 120);

   const openAddWidgetModal = () => {
      if(!isAddButtonWidget)
         return;
      openModal(true);
   }

   const Component: React.ReactNode = getWidgetComponent(widget);

   const handleMouseDown = (e: React.MouseEvent) => {
      e.preventDefault();

      const initialX = e.clientX;
      const initialY = e.clientY;
      const startWidth = width;
      const startHeight = height;

      const handleMouseMove = (e: MouseEvent) => {
         const newWidth = startWidth + (e.clientX - initialX);
         const newHeight = startHeight + (e.clientY - initialY);

         setWidth(Math.max(120, Math.min(newWidth, 240)));
         setHeight(Math.max(120,Math.min(newHeight, 240)));
      }

      const handleMouseUp = (e: MouseEvent) => {
         const newWidth = Math.max(120, Math.min(startWidth + (e.clientX - initialX), 240));
         const newHeight = Math.max(120,Math.min(startHeight + (e.clientY - initialY), 240));

         const widgetsAdded = state.addedWidgets.map((addedWidget: WidgetType) => {
            if(widget.id === addedWidget.id){
               addedWidget.size!.height = newHeight;
               addedWidget.size!.width = newWidth;
            }
            return addedWidget;
         });

         dispatch({
            type: Actions.UPDATE_WIDGETS,
            payload: widgetsAdded
         });

         document.removeEventListener('mousemove', handleMouseMove);
         document.removeEventListener('mouseup', handleMouseUp);
      }

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
   }

  return (
    <div 
      className={`relative rounded-2xl text-blue-50 bg-blue-950 p-3 overflow-scroll group ${isAddButtonWidget? 'flex items-center justify-center text-5xl transition-all duration-200 ease-in-out hover:text-6xl': ''}`} onClick={openAddWidgetModal}
      style={{height: `${height}px`, width: `${width}px`}}>
      {!isAddButtonWidget && <div className='absolute bottom-0 right-0 w-5 h-5 bg-blue-400 cursor-se-resize' onMouseDown={handleMouseDown}></div>}
      <button
         className={`absolute opacity-30 right-3 top-3 leading-none rounded-2xl w-3 h-1 bg-red-400 font-bold text-3xl transition-transform duration-200 cursor-pointer ease-in-out group-hover:opacity-90 group-hover:scale-150 ${isAddButtonWidget? 'hidden': ''}`} onClick={() => removeWidget(widget.id)}></button>
      {isAddButtonWidget ? '+': Component}
   </div>
  )
}

export default Widget;
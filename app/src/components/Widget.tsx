import React from 'react'

const Widget = ({widget, openModal}) => {
   const isAddButtonWidget: boolean = widget.id === 'add-widget';

   const openAddWidgetModal = () => {
      if(!isAddButtonWidget)
         return;
      openModal(true);
   }

  return (
    <div className={`w-[120px] h-[120px] rounded-2xl text-blue-50 bg-blue-950 p-3 ${isAddButtonWidget? 'flex items-center justify-center text-5xl transition-all duration-200 ease-in-out hover:text-6xl': ''}`} onClick={openAddWidgetModal}>
      {isAddButtonWidget ? '+': widget.title}
   </div>
  )
}

export default Widget;
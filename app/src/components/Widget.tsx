import React from 'react'
import WeatherWidget from './WeatherWidget';
import { WidgetType } from '../constants';
import CalendarWidget from './CalenderWidget';
import NewsWidget from './NewsWidget';
import StocksWidget from './StocksWidget';
import CryptoWidget from './CryptoWidget';
import TodoWidget from './TodoWidget';
import NotesWidget from './NotesWidget';

const Widget = ({widget, openModal, removeWidget}: {widget: WidgetType, openModal: (shouldOpen: boolean) => void, removeWidget: (widgetId: string) => void}) => {
   const isAddButtonWidget: boolean = widget.id === 'add-widget';

   const openAddWidgetModal = () => {
      if(!isAddButtonWidget)
         return;
      openModal(true);
   }

   const Component: React.FC = () => {
      switch(widget.id) {
         case 'weather-widget': {
            return <WeatherWidget widget={widget}/>
         }
         case 'calendar-widget': {
            return <CalendarWidget widget={widget} />
         }
         case 'news-widget': {
            return <NewsWidget widget={widget} />
         }
         case 'stocks-widget': {
            return <StocksWidget widget={widget} />
         }
         case 'crypto-widget': {
            return <CryptoWidget widget={widget} />
         }
         case 'todo-widget': {
            return <TodoWidget widget={widget} />
         }
         case 'notes-widget': {
            return <NotesWidget widget={widget} />
         }
         default:
            return <>{widget.title}</>
      }
   }

  return (
    <div className={`relative w-[120px] h-[120px] rounded-2xl text-blue-50 bg-blue-950 p-3 md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] overflow-scroll group ${isAddButtonWidget? 'flex items-center justify-center text-5xl transition-all duration-200 ease-in-out hover:text-6xl': ''}`} onClick={openAddWidgetModal}>
      <button className={`absolute opacity-30 right-3 top-3 leading-none rounded-2xl w-3 h-1 bg-red-400 font-bold text-3xl transition-transform duration-200 cursor-pointer ease-in-out group-hover:opacity-90 group-hover:scale-150 ${isAddButtonWidget? 'hidden': ''}`} onClick={() => removeWidget(widget.id)}></button>
      {isAddButtonWidget ? '+': <Component />}
   </div>
  )
}

export default Widget;
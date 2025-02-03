import { WidgetType } from "./constants";
import CalendarWidget from './components/CalenderWidget';
import NewsWidget from './components/NewsWidget';
import StocksWidget from './components/StocksWidget';
import CryptoWidget from './components/CryptoWidget';
import TodoWidget from './components/TodoWidget';
import NotesWidget from './components/NotesWidget';
import FinanceWidget from './components/FinanceWidget';
import FitnessWidget from './components/FitnessWidget';
import MusicWidget from './components/MusicWidget';
import EmailWidget from './components/EmailWidget';
import WeatherWidget from "./components/WeatherWidget";

export const getWidgetComponent = (widget: WidgetType): JSX.Element => {
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
      case 'finance-widget': {
         return <FinanceWidget widget={widget} />
      }
      case 'fitness-widget': {
         return <FitnessWidget widget={widget} />
      }
      case 'music-widget': {
         return <MusicWidget widget={widget} />
      }
      case 'email-widget': {
         return <EmailWidget widget={widget} />
      }
      default:
         return <>{widget.title}</>
   }
}
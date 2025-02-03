import CalendarWidget from "./components/widgets/CalenderWidget";
import CryptoWidget from "./components/widgets/CryptoWidget";
import EmailWidget from "./components/widgets/EmailWidget";
import FinanceWidget from "./components/widgets/FinanceWidget";
import FitnessWidget from "./components/widgets/FitnessWidget";
import MusicWidget from "./components/widgets/MusicWidget";
import NewsWidget from "./components/widgets/NewsWidget";
import NotesWidget from "./components/widgets/NotesWidget";
import StocksWidget from "./components/widgets/StocksWidget";
import TodoWidget from "./components/widgets/TodoWidget";
import WeatherWidget from "./components/widgets/WeatherWidget";
import { WidgetType } from "./constants";

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
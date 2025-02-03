import { useContext, useEffect } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import { MyContext } from './ContextProvider'
import { Actions, savedThemeKey, savedWidgetsKey, Themes, WidgetType } from './constants'
import widgets from './data'

function App() {
  const { dispatch } = useContext(MyContext);

  const updateState = () => {
    const savedWidgetIds = localStorage.getItem(savedWidgetsKey)? JSON.parse(localStorage.getItem(savedWidgetsKey)!): [];
    const savedWidgets = widgets.filter((widget: WidgetType) => savedWidgetIds.some((widgetId: string) => widgetId === widget.id));
    const savedTheme = localStorage.getItem(savedThemeKey)? JSON.parse(localStorage.getItem(savedThemeKey)!): Themes.LIGHT;
    dispatch({
      type: Actions.TOGGLE_THEME,
      payload: savedTheme
    });
    if(savedWidgets.length){
      dispatch({
        type: Actions.UPDATE_WIDGETS,
        payload: savedWidgets
      });
    }
  }

  useEffect(() => {
    updateState();
  },[]);
  return (
    <>
      <div className='w-full lg:mt-10'>
        <div className=''>
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default App

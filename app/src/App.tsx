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
    const savedWidgetData = localStorage.getItem(savedWidgetsKey)? JSON.parse(localStorage.getItem(savedWidgetsKey)!): [];

    let savedWidgets: WidgetType[] = widgets.filter((widget: WidgetType) => savedWidgetData.some((_widget: WidgetType) => _widget.id === widget.id));

    savedWidgets = savedWidgets.map((widget: WidgetType) => {
      let savedWidget = savedWidgetData.find((savedWidget: WidgetType) => savedWidget.id === widget.id);
      widget.size!.width = savedWidget.width;
      widget.size!.height = savedWidget.height;
      return widget;
    })
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

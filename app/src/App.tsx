import { useContext, useEffect } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import { MyContext } from './ContextProvider'
import { Actions, savedThemeKey, savedWidgetsKey, SavedWidgetType, Themes, WidgetType } from './constants'
import widgets from './data'

function App() {
  const { dispatch } = useContext(MyContext);

  const updateState = () => {
    const savedWidget: SavedWidgetType[] = localStorage.getItem(savedWidgetsKey)? JSON.parse(localStorage.getItem(savedWidgetsKey)!): [];

    const savedWidgets: WidgetType[] = savedWidget.filter((savedWidget: SavedWidgetType) => widgets.some(widget => widget.id === savedWidget.id)).map((widget: SavedWidgetType) => {
      let savedWidget = widgets.find((savedWidget: WidgetType) => savedWidget.id === widget.id);
      savedWidget!.size!.width = widget.width;
      savedWidget!.size!.height = widget.height;
      return savedWidget!;
    });

    const savedTheme = localStorage.getItem(savedThemeKey)? JSON.parse(localStorage.getItem(savedThemeKey)!): Themes.LIGHT;

    dispatch({
      type: Actions.TOGGLE_THEME,
      payload: savedTheme === Themes.DARK? Themes.LIGHT: Themes.DARK
    })

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

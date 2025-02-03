import { createContext, ReactNode, useReducer } from "react";
import { Actions, ActionType, savedThemeKey, savedWidgetsKey, StateType, Themes, WidgetType } from "./constants";

export const initialState: StateType = {
   theme: Themes.LIGHT,
   addedWidgets: []
}

export const MyContext = createContext<{
   state: StateType,
   dispatch: React.Dispatch<ActionType>
}>({
   state: initialState,
   dispatch: () => {}
});

export const reducer = (state: StateType, action: ActionType): StateType => {
   if(action.type === Actions.UPDATE_WIDGETS) {
      const widgetIds = (action.payload as WidgetType[]).map((widget: WidgetType) => {
         return {
            id: widget.id,
            width: widget.size!.width,
            height: widget.size!.height
         }
      });
      const savedWidgets = JSON.stringify(widgetIds);
      localStorage.setItem(savedWidgetsKey,savedWidgets);
   } else if(action.type === Actions.TOGGLE_THEME) {
      const savedTheme = action.payload === Themes.LIGHT? String(Themes.DARK): String(Themes.LIGHT);
      localStorage.setItem(savedThemeKey, JSON.stringify(savedTheme));
   }
   switch(action.type) {
      case Actions.TOGGLE_THEME: {
         return {...state, theme: action.payload === Themes.LIGHT? Themes.DARK: Themes.LIGHT};
      }
      case Actions.UPDATE_WIDGETS: {
         return {...state, addedWidgets: action.payload as Array<WidgetType>};
      }
      default:
         return state;
   }
}

export const ContextProvider = ({children}: { children: ReactNode}) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   return (
      <MyContext.Provider value={{ state, dispatch }}>
         {children}
      </MyContext.Provider>
   )
}
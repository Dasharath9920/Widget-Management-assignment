import { createContext, ReactNode, useReducer } from "react";
import { Actions, ActionType, StateType, Themes, WidgetType } from "./constants";


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
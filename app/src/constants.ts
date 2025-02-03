export type StateType = {
   theme: string,
   addedWidgets: Array<WidgetType>
}

export const savedWidgetsKey : string = 'savedWidgets';
export const savedThemeKey : string = 'savedTheme';

export enum Themes {
   LIGHT = 'light',
   DARK = 'dark'
}

export enum Actions {
   TOGGLE_THEME = 'toggle theme',
   UPDATE_WIDGETS = 'update widgets'
}

export type ActionType = {
   type: Actions,
   payload: string | Array<WidgetType>
}

export type WidgetType = {
   id: string,
   type?: string,
   title?: string,
   position?: {
      x: number,
      y: number
   },
   size?: {
      width: number,
      height: number
   },
   data?: any
}

export type SavedWidgetType = {
   id: string,
   width: number,
   height: number
}

export const addWidget = {
   id: 'add-widget',
  type: 'controls'
 }
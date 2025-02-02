import { useContext } from 'react';
import logo from '../assets/wm-logo.png';
import { MyContext } from '../ContextProvider';
import { Actions, Themes } from '../constants';
const Navbar = () => {
   const { state, dispatch } = useContext(MyContext);

   const toggleTheme = () => {
      dispatch({
         type: Actions.TOGGLE_THEME,
         payload: state.theme
      });
   }

  return (
    <nav className='flex items-center justify-between shadow-lg h-12 py-5 px-2'>
      <div className='flex items-center'>
         <img src={logo} alt="logo" height={20} width={20} className='me-1'/>
         <h2>Custom Dashboard</h2>
      </div>
      <button className={`w-9 h-5 rounded-2xl border-2 p-0`} onClick={toggleTheme}>
         <div id='toggle-ball' className={`w-4 h-4 bg-blue-950 rounded-full transition-transform duration-300 ease-in-out ${state.theme === Themes.DARK? 'transform translate-x-4': ''}`}></div>
      </button>
    </nav>
  )
}

export default Navbar;
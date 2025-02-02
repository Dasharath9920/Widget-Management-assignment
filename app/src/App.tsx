import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

function App() {
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

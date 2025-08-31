import { useRoutes } from 'react-router-dom';
import routes from './router';
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {
  const content = useRoutes(routes);
  return (
    <>
      <ToastContainer />
      {content}
    </>
  )
}

export default App

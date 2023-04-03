
import './App.css';
import TaskList from './components/container/TaskList';
import LoginFormik from './components/pure/form/loginFormik';
import OptionalRendel from './components/pure/form/optionalRender';



function App() {
  return (

    <div className="App">
      {/* <OptionalRendel/> */}
      <div>
        <LoginFormik />
        {/* <TaskList/> */}
      </div>
    </div>
    
  );
}

export default App;

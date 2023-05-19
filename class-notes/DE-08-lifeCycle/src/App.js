import React from 'react'
import LifeCycleMethods from './components/LifeCycleMethods';
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from './Clock';

function App() {
  return (
    <div className='container text-center mt-4'>
        <LifeCycleMethods/>

        <Clock/>
    </div>
  );
}

export default App;

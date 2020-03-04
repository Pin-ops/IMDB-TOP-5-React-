import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import GeneralView from './components/GeneralView';



function App() {
  return (
    <div className="container">
     <Header/>
     <GeneralView/>
    </div>
  );
}

export default App;

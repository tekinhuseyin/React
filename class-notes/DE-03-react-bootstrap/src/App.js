import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import MyNavbar from './components/MyNavbar';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <MyNavbar/>
        <CourseCard veri= {data}/>
        <Footer/>
    </div>
  );
}

export default App;

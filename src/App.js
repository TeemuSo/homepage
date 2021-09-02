import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Achievements from './Components/Achievements';
import Portfolio from './Components/Portfolio';

import React, { useState, useEffect } from 'react'

const App = () => {

  const [resumeData, setResumeData] = useState({})

  useEffect(() => {
    initializeGA()
    populateResumeData(setResumeData)
  }, [])

    return (
      <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        <Portfolio data={resumeData.portfolio}/>
        <Achievements data={resumeData.achievements}/>
        {/* <Contact data={resumeData.main}/> */}
        <Footer data={resumeData.main}/>
      </div>
    )
}

function populateResumeData(setResumeData) {
  $.ajax({
    url:'/resumeData.json',
    dataType:'json',
    cache: false,
    success: (data) => {
      setResumeData(data)
    },
    error: function(xhr, status, err){
      console.log(err);
      alert(err);
    }
  })
}

function initializeGA() {
  ReactGA.initialize('UA-110570651-1')
  ReactGA.pageview(window.location.pathname)
}

export default App;

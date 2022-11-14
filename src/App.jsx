import './App.css';
import React, { Component } from 'react'
import Parent from './components/Parent/Parent'
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';

export default class App extends Component {
  state={

  }
  render() {
    return (
      <>
      <h1 className='text-white text-center pt-5'>Product mangement system</h1>
      <Parent/>
      <div className="container mt-5 py-3 px-4 bg-color rounded-3">
        <div className="row gx-3">
          <div className="col-md-6 text-white">
            <div className="bg-color2 p-4">
            <Gallery/>
            </div>
          </div>
          <div className="col-md-6 text-white ">
            <div className="bg-color2 p-4">
            <Contact/>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}


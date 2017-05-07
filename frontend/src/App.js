import React, { Component } from 'react'

import Header from './features/Header'
import HeroBanner from './features/HeroBanner'
import HowItWorks from './features/HowItWorks'
import GetStarted from './features/GetStarted'
import Footer from './features/Footer'

import './Main.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      formTriggered: true
    }
  }

  triggerForm = () => {
    this.setState({
      formTriggered: !this.state.formTriggered
    })
  }

  render() {
    const isTriggered = this.state.formTriggered
    const $content = isTriggered
      ? <GetStarted />
      : <div className="App">
          <Header />
          <HeroBanner />
          <HowItWorks />
          <div>
            <button onClick={this.triggerForm}>Get Started</button>
          </div>
          <Footer />
        </div>

    return $content;
  }
}

export default App;

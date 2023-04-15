import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(preState => ({mango: preState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(preState => ({banana: preState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="container">
        <h1>
          Bob ate <span className="count">{mango}</span> Mangoes{' '}
          <span className="count">{banana}</span> Bananas
        </h1>
        <div className="fruit-container">
          <div className="mango-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="image"
              alt="Mango"
            />
            <button onClick={this.eatMango} type="button" className="button">
              Eat Mango
            </button>
          </div>
          <div className="banana-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="image"
              alt="Banana"
            />
            <button onClick={this.eatBanana} type="button" className="button">
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

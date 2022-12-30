import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="fruitsContainer">
        <div className="card-container">
          <h1>
            Bob ate <span className="count"> {mangoesCount} </span>mangoes
            <span className="count"> {bananasCount} </span>bananas
          </h1>
          <div className="fruitContainer">
            <div className="fruitCard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button
                className="mangoButton"
                type="button"
                onClick={this.onClickEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruitCard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="bananas"
              />
              <button
                className="mangoButton"
                type="button"
                onClick={this.onClickEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter

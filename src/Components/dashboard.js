import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
  constructor(props){
  super(props)
}
render(){
  let stocks = this.props.stocks.map((stock, index)=>{
    let pathname = `/stocks/${stock.symbol}`
    return(
      <li className="stocks-stock" key={index}>
        {stock.name} (<Link to={{pathname,state: {selectedStock: stock}}}>
            {stock.symbol}
          </Link>)
      </li>
)
  })

  return(
    <div className="stocks">
      <h2>Stocks</h2>
      <ul className="stocks-list">
        {stocks}
      </ul>
    </div>
  )
}
}

export default Dashboard

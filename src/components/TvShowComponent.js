import React { Component } from "react"

class TvShowComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: {}
    }
    this.fetchShow = this.fetchShow.bind(this)
  }

  fetchShow() {
    fetch('http://api.tvmaze.com/shows/:id')
    .then(response => response.json())
    .then(data => {
      this.setState({
        shows: data
      })
    })
  }

  componentDidMount() {
    this.fetchShow()
  }

  render() {
    return (
      <div>
        <img className='showimage' src={this.state.image.original}></img>
        <h3>{this.state.name}</h3>
        <span>{this.state.premiered}</span>
        <p>{this.state.summary}</p>
      </div>
    )
  }
}

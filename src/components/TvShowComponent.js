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
    return ()
  }
}

const TvShowTile = props => {
  return (
    <div className='showtile'>
      <img className='tileimage' src={props.data.image.original}></img>
      <h3>{props.data.name}</h3>
      <span>{props.data.premiered}</span>
    </div>
  )
}

export default TvShowTile

function DataDisplay(props) {
  return(  <div
        key={props.elem.id}
        className="posts">
        <h3>{props.elem.id}</h3>
        <h1>{props.elem.title}</h1>
        <p>{props.elem.body}</p>
    </div>
    )
}

export default DataDisplay
function ShowPost(props){
    return(
        <div
            className="posts"
            key={props.elem.id}>
                <h4>{props.elem.id}</h4>
                <h2>{props.elem.title}</h2>
                <p>{props.elem.body}</p>
            </div>
    )
}

export default ShowPost;
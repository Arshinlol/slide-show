function Slide(props){
    return(
        <div className="Slidee" style={{backgroundImage: props.img }}>
            <button className="arrow" onClick={() => props.click(-1)}>&#9668;</button>
                <p className="RT">{props.text}</p>
            <button className="arrow" onClick={() => props.click(1)}>&#9658;</button>
        </div>
    )
}
export default Slide; 



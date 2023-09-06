function Krug(props){
    let stl ='dot';
    if (props.active){
        stl += " active"
    }
    return(
        <span className={stl} onClick={() => props.change(props.index)}> 
           
        </span>
    );
}

export default Krug;

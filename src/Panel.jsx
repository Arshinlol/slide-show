import Krug from "./Krug";

function Panel(props){
    return(
        <div className="Dot"> 


        {props.sl.map((element, index) => (
            <Krug key={index} active={index === props.cur ? true : false} change={props.change} index={index}></Krug>
        ))}

        </div>
    );
}

export default Panel;

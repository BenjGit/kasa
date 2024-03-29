import { useState } from "react";
import './style.css'

function Collapse(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`collapse-container ${props.isHalf ? 'collapse-50' : ''}`} style={props.containerStyle}>
            <div className="collapse-header" onClick={toggleCollapse} style={props.headerStyle}>
                <h3 className='collapse-title'>{props.title}</h3>
                <i className={`fa-solid fa-chevron-up ${isCollapsed ? 'rotate-back' : 'rotate'}`}></i>
            </div>
            <div className={`collapse-content ${isCollapsed ? 'close' : 'open'}`} style={props.contentStyle}>
                {props.description}
            </div>
        </div>
    )
}

export default Collapse
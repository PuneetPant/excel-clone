import React, { useEffect, useState  ,useRef} from 'react';
import ReactDOM from 'react-dom';


const HeaderNavbar = () => {
    const [ open, setOpen ] = useState(false);
    const [active , setActive] = useState(0);
    const containerRef = useRef(null);
    

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside, true);
        }
    })

    const handleClickOutside = event => {

        if(containerRef.current.contains(event.target)){
            // console.log('inside');
            // setOpen(true);
        } else{
            // console.log('outside');
            setOpen(false);
        }
    }

    const handleDropdownMouseEnter = (e , index) => {
        setActive(index);
    }
    const handleNavbarClick = (e) => {
        setOpen(!open);

    }
    return (
        <div className="header-nav" ref = {containerRef} >
            <div className="dropdown"
                onMouseEnter={(e) => handleDropdownMouseEnter(e , 1)}
                onClick={(e) => handleNavbarClick(e , 1)}
            >
                <button className={`dropbtn ${open === true && active === 1? "active" : ""}`}>
                    File
                </button>
                <div className={`dropdown-content ${open === true && active === 1? "" : "hidden"}`} >
                    <div className="option-section ">
                        <div className="option">
                            <div className="align-option">
                                <span>Share</span>
                            </div>
                        </div>
                    </div>
                    <div className="option-section">
                        <div className="option">
                            <div className="align-option">
                                <span>New</span>
                                <i className="material-icons">arrow_right</i>
                            </div>
                        </div>


                        <div className="option">
                            <div className="align-option">
                                <span>Open</span>
                                <i className="material-icons">arrow_right</i>
                            </div>
                        </div>
                        <div className="option">
                            <div className="align-option">
                                <span>Import</span>
                            </div></div>
                        <div className="option">
                            <div className="align-option">
                                <span>Make a copy</span>
                            </div></div>
                    </div>
                    <div className="option-section">
                        <div className="option">
                            <div className="align-option">
                                <span>Email</span>
                                <i className="material-icons">arrow_right</i>
                            </div></div>
                        <div className="option">
                            <div className="align-option">
                                <span>Download</span>
                                <i className="material-icons">arrow_right</i>
                            </div></div>
                        <div className="option">
                            <div className="align-option">
                                <span>Make available online</span>
                            </div></div>
                        <div className="option"><
                            div className="align-option">
                            <span>View history</span>
                            <i className="material-icons">arrow_right</i>
                        </div></div>
                    </div>
                </div>
            </div>
            <div className="dropdown"
                onMouseEnter={(e) => handleDropdownMouseEnter(e ,2)}
                onClick={(e) => handleNavbarClick(e,2)}
            >
                <button className={`dropbtn ${open === true && active === 2? "active" : ""}`}
                >
                    Edit
                    
                </button>
                <div className={`dropdown-content ${open === true && active === 2? "" : "hidden"}`}>
                    <div className="option-section ">
                        <div className="option">
                            <div className="align-option">
                                <span>Undo</span>
                            </div>
                        </div>
                        <div className="option">
                            <div className="align-option">
                                <span>Redo</span>
                            </div>
                        </div>
                    </div>
                    <div className="option-section">
                        <div className="option">
                            <div className="align-option">
                                <span>Cut</span>
                            </div>
                        </div>


                        <div className="option">
                            <div className="align-option">
                                <span>Copy</span>
                            </div>
                        </div>
                        <div className="option">
                            <div className="align-option">
                                <span>Past</span>
                            </div></div>
                    </div>
                </div>
            </div>
            <div className="dropdown"
            onMouseEnter={(e) => handleDropdownMouseEnter(e ,3)}
                onClick={(e) => handleNavbarClick(e,3)}
            >
                <button className={`dropbtn ${open === true && active === 3? "active" : ""}`}>View</button>
                <div className={`dropdown-content ${open === true && active === 3? "" : "hidden"}`}>
                    <div className="option-section ">
                        <div className="option">
                            <div className="align-option">
                                <span>Zoom</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown"
            onMouseEnter={(e) => handleDropdownMouseEnter(e ,4)}
                onClick={(e) => handleNavbarClick(e,4)}
            >
                <button className={`dropbtn ${open === true && active === 4? "active" : ""}`}>Insert</button>
                <div className={`dropdown-content ${open === true && active === 4? "" : "hidden"}`}>
                    <div className="option-section ">
                        <div className="option">
                            <div className="align-option">
                                <span>Random</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="dropdown"
                onMouseEnter={(e) => handleDropdownMouseEnter(e ,5)}
                onClick={(e) => handleNavbarClick(e,5)}
            >
                <button className={`dropbtn ${open === true && active === 5? "active" : ""}`}>Format</button>
                <div className={`dropdown-content ${open === true && active === 5? "" : "hidden"}`}>
                    <div className="option-section ">
                        <div className="option">
                            <div className="align-option">
                                <span>Theme</span>
                            </div>
                        </div>
                    </div>
                    <div className="option-section">
                        <div className="option">
                            <div className="align-option">
                                <span>Bold</span>
                            </div>
                        </div>


                        <div className="option">
                            <div className="align-option">
                                <span>Italic</span>
                            </div>
                        </div>
                        <div className="option">
                            <div className="align-option">
                                <span>Underline</span>
                            </div>
                        </div>
                        <div className="option">
                            <div className="align-option">
                                <span>Strike-through</span>
                            </div>
                        </div>
                    </div>
                    <div className="option-section ">
                        <div className="option">
                            <div className="align-option">
                                <span>Font-size</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default React.memo(HeaderNavbar);
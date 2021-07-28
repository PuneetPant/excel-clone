import React, { useState, useRef, useEffect ,useMemo} from 'react';
import './functionBar.scss';
const FunctionBar = () => {
    const [zoomSection, setZoomSection] = useState(false);
    const [zoomValue, setZoomValue] = useState(100);
    const [fontSection, setFontSection] = useState(false);
    const [fontValue, setFontValue] = useState(1);
    const [format, setFormat] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside, true);
        }
    })
    const handleClickOutside = event => {

        if (containerRef.current.contains(event.target)) {
            // console.log('inside');
            // setOpen(true);
        } else {
            // console.log('outside');
            setZoomSection(false);
            setFontSection(false);
        }
    }
    const zoomValues = [50, 75, 90, 100, 125, 150, 200];
    const zoomDropdown = zoomValues.map((val, index) => {
        return (
            <div key={index} className="option-section" onClick={() => { setZoomValue(val) }}>
                {`${val}%`}
            </div>
        )
    })

    const fontValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 18, 24, 36]
    const fontDropdown = fontValues.map((val, index) => {
        return (
            <div key={index} className="option-section" onClick={() => { setFontValue(val) }}>
                {val}
            </div>
        )
    })


    // const fontValues = []
    const handleFormat = (e) => {
        console.log(e.target.innerHTML);
        if (format.includes(e.target.innerHTML)) {
            let arr = format.filter((item, idx) => {
                return item != e.target.innerHTML
            })
            setFormat([...arr]);
        } else {
            setFormat([...format, e.target.innerHTML])
        }
    }

    return (
        <div className="function-bar" ref={containerRef}>
            <div className="action-section">
                <i className="material-icons icon-formating">undo</i>
                <i className="material-icons icon-formating">redo</i>
                <i className="material-icons icon-formating">print</i>
                <i className="material-icons icon-formating">format_paint</i>
            </div>

            <div className="action-section">
                <div className="dropdown-section " onClick={() => { setZoomSection(!zoomSection) }}>
                    <input type="text" min="50" max="100" value={`${zoomValue}%`}></input>
                    <i className="material-icons icon-formating">arrow_drop_down</i>
                    <div className={`dropdown-content ${zoomSection === true ? "" : "hidden"}`}>
                        {zoomDropdown}
                    </div>
                </div>
            </div>

            <div className="action-section">
                <div className="dropdown-section " onClick={() => { setFontSection(!fontSection) }}>
                    <input type="number" min="1" max="10" defaultValue="1" value={fontValue}></input>
                    <i className="material-icons icon-formating">arrow_drop_down</i>
                    <div className={`dropdown-content ${fontSection === true ? "" : "hidden"}`}>
                        {fontDropdown}
                    </div>
                </div>
            </div>

            <div className="action-section">
                <i className={`material-icons icon-formating ${format.includes("format_bold") ? "active" : ""}`} onClick={handleFormat}>format_bold</i>
                <i className={`material-icons icon-formating ${format.includes("format_italic") ? "active" : ""}`} onClick={handleFormat}>format_italic</i>
                <i className={`material-icons icon-formating ${format.includes("strikethrough_s") ? "active" : ""}`} onClick={handleFormat}>strikethrough_s</i>
                <i className={`material-icons icon-formating ${format.includes("format_color_text") ? "active" : ""}`} onClick={handleFormat}>format_color_text</i>
            </div>

            <div className="action-section">
                <i className="material-icons icon-formating">align_horizontal_left</i>
                <i className="material-icons icon-formating">align_horizontal_center</i>
                <i className="material-icons icon-formating">align_horizontal_right</i>
                <i className="material-icons icon-formating">vertical_align_bottom</i>
                <i className="material-icons icon-formating">vertical_align_top</i>
                <i className="material-icons icon-formating">vertical_align_center</i>
                <i className="material-icons icon-formating">wrap_text</i>
            </div>

            {/* <i className="material-icons icon-formating">comment</i>
            <i className="material-icons icon-formating">comment</i>
            <i className="material-icons icon-formating">comment</i> */}
        </div>
    )
}
export default React.memo(FunctionBar);
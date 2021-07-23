import React from 'react';
import ReactDOM from 'react-dom';

class HeaderTitle extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inputWidth: 'auto',
            inputText: localStorage.getItem("headerTitle") != null ? localStorage.getItem("headerTitle") : ""
        }
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        document.title = localStorage.getItem("headerTitle") != null ? localStorage.getItem("headerTitle") : "";
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        // console.log(this);
        const domNode = ReactDOM.findDOMNode(this);
        // console.log('domNode: ', domNode);

        if (!domNode || !domNode.contains(event.target)) {
            // console.log('punee');
            // console.log(this.inputRef.current.value);
            // save in local storage
            if(localStorage.getItem("headerTitle") === null){
                localStorage.setItem("headerTitle", this.inputRef.current.value);

                // make title change
                document.title = this.inputRef.current.value;
            }
            else if(localStorage.getItem("headerTitle") !== null && localStorage.getItem("headerTitle") !== this.inputRef.current.value){
                localStorage.setItem("headerTitle", this.inputRef.current.value);

                // make title change
                document.title = this.inputRef.current.value;
            }
        }
    }
    // Logic for changing input field
    handleInputSize = (event) => {
        let getTextWidth = (event.target.value.length) * 8;
        let getWidth = this.inputRef.current.offsetWidth;
        console.log(getWidth, getTextWidth);

        this.setState({
            inputText: event.target.value
        })

        if (getTextWidth > getWidth) {
            let getNewWidth;

            if (this.state.inputWidth === 'auto') {
                getNewWidth = getTextWidth;
            } else {
                getNewWidth = this.state.inputWidth + 8;
            }
            console.log('getNewWidth: ', getNewWidth);
            this.setState({
                inputWidth: getNewWidth,

            })
        }
        // When the user removes all the data from input field
        if (getTextWidth == 0) {
            this.setState({
                inputWidth: 'auto'
            })
        }
    }

    // componentDidMount = () => {
    //     
    // }
    render() {
        console.log(this.state);
        const { inputWidth, inputText } = this.state;
        return (
            <div className="header-name">
                <input
                    style={{ width: inputWidth == 'auto' ? `${inputWidth}` : `${inputWidth}px` }}
                    ref={this.inputRef}
                    className="header-title-area"
                    onChange={(e) => this.handleInputSize(e)}
                    value={inputText}
                    type="text"
                    placeholder="Untitled Spreadsheet"
                >

                </input>
            </div>
        )
    }
}

export default HeaderTitle;
import React , {createRef} from 'react';

class OutsideClickHandler extends React.PureComponent {

    wrapperRef = createRef();

    componentDidMount() {
        document
            .addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document
            .removeEventListener('mousedown', this.handleClickOutside);
    }

    // onOutsideClick = (name) => {
    //     console.log(name);
    // }

    handleClickOutside = (event) => {
        if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            // this.onOutsideClick(this.props.getComponentName);
            this.props.onOutsideClick();
            console.log('CLICKED OUTSIDE CLICK HANDLER!!');
        }
    }

    render() {
        console.log('in OutsideClickHandler' , this.props);
        return (
            <div ref={this.wrapperRef}>
                {this.props.children}
            </div>
        )
    }
}

export default OutsideClickHandler;
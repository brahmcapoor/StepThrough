import React from 'react';
import {Navbar, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import './styles.css'

const prevTooltip = (props) => {
    return <Tooltip {...props}>Left arrow key</Tooltip>
}

const nextToolTip = (props) => {
    return <Tooltip {...props}>Right arrow key</Tooltip>
}


class NavBar extends React.Component {

    componentDidMount(){
       document.addEventListener("keydown", event => {
            if (event.keyCode === 37 && this.props.stage > 0) this.props.prevStage();
            if (event.keyCode === 39 && this.props.stage + 1 !== this.props.numStages) this.props.nextStage();  
       });
    };

    render() {
        return (
            <div>
            <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="http://brahmcapoor.com/StepThrough">StepThrough</Navbar.Brand>
            <div className="ml-auto right-part">
                <OverlayTrigger
                    placement="bottom"
                    delay={{show: 600, hide: 100}}
                    overlay={prevTooltip}
                >
                    <Button 
                        variant="outline-info" 
                        onClick={this.props.prevStage} 
                        disabled={this.props.stage === 0}
                    > 
                        Previous 
                    </Button>
                </OverlayTrigger>
                &nbsp; &nbsp; 
                <span>
                    {this.props.stage + 1} / {this.props.numStages}
                </span>
                &nbsp; &nbsp;
                <OverlayTrigger
                    placement="bottom"
                    delay={{show: 200, hide: 100}}
                    overlay={nextToolTip}
                >
                    <Button 
                        variant="outline-success" 
                        onClick={this.props.nextStage}
                        disabled={this.props.stage + 1 === this.props.numStages}
                    > 
                        Next 
                    </Button>
                </OverlayTrigger>
            </div>
            </Navbar>
            </div>
        );
    };
}

export default NavBar;
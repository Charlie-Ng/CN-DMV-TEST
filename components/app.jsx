import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import TagFaces from 'material-ui/lib/svg-icons/image/tag-faces';
import LibraryBooks from 'material-ui/lib/svg-icons/av/library-books';
import Dvr from 'material-ui/lib/svg-icons/device/dvr';
import ErrorOutline from 'material-ui/lib/svg-icons/alert/error-outline';

export default class LeftNavUndockedExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    //handleToggle = () => this.setState({open: !this.state.open});
    handleToggle() {this.setState({open: !this.state.open});};

    //handleClose = () => this.setState({open: false});
    handleClose() {this.setState({open: false});};

    render() {
        return (
            <div>
                <RaisedButton
                    label="Open LeftNav"
                    onTouchTap={this.handleToggle}
                />
                <LeftNav
                    docked={true}
                    width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                >
                    <MenuItem primaryText="Welcome" leftIcon={<TagFaces />}/>
                    <MenuItem primaryText="Practice" leftIcon={<LibraryBooks />}/>
                    <MenuItem primaryText="Test" leftIcon={<Dvr />}/>
                    <MenuItem primaryText="About us" leftIcon={<ErrorOutline />}/>
                </LeftNav>
            </div>
        );
    }
}
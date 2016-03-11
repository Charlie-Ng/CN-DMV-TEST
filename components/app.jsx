import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import TagFaces from 'material-ui/lib/svg-icons/image/tag-faces';
import LibraryBooks from 'material-ui/lib/svg-icons/av/library-books';
import Dvr from 'material-ui/lib/svg-icons/device/dvr';
import ErrorOutline from 'material-ui/lib/svg-icons/alert/error-outline';
import Paper from 'material-ui/lib/paper';

const style = {
    leftNav: {
        backgroundColor: '#BBDEFB'
    },
    paper: {
        textAlign: 'center',
        paddingTop: '24',
        paddingBottom: '24',
        fontSize: '24',
        backgroundColor: '#BBDEFB'
    }
};

export default class LeftNavUndockedExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle() {this.setState({open: !this.state.open});};

    handleClose() {this.setState({open: false});};

    render() {
        return (
            <div>
                <RaisedButton
                    label="Open LeftNav"
                    onTouchTap={this.handleToggle}
                />
                <LeftNav
                    style={style.leftNav}
                    docked={true}
                    width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                >
                    <Paper style={style.paper}zDepth={0}>DMV<br/>Chinese Test</Paper>
                    <MenuItem primaryText="Welcome" leftIcon={<TagFaces />}/>
                    <MenuItem primaryText="Practice" leftIcon={<LibraryBooks />}/>
                    <MenuItem primaryText="Test" leftIcon={<Dvr />}/>
                    <MenuItem primaryText="About us" leftIcon={<ErrorOutline />}/>
                </LeftNav>
            </div>
        );
    }
}
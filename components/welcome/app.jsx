import React from 'react';
import LeftNav from '../../node_modules/material-ui/lib/left-nav';
import MenuItem from '../../node_modules/material-ui/lib/menus/menu-item';
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
import TagFaces from '../../node_modules/material-ui/lib/svg-icons/image/tag-faces';
import LibraryBooks from '../../node_modules/material-ui/lib/svg-icons/av/library-books';
import Dvr from '../../node_modules/material-ui/lib/svg-icons/device/dvr';
import ErrorOutline from '../../node_modules/material-ui/lib/svg-icons/alert/error-outline';
import Paper from '../../node_modules/material-ui/lib/paper';

import Toolbar from '../../node_modules/material-ui/lib/toolbar/toolbar';

//FIXME use propType style later
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
    },
    toolbar: {
        width: 20
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

                <LeftNav
                    style={style.leftNav}
                    docked={true}  //https://github.com/callemall/material-ui/issues/957
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
import './styles.scss';
import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
 import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import menuItems from '../../data/sideBarData.json'

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(item) {
    this.setState(prevState => ({ [item]: !prevState[item] }));
  }

  handler(children) {
    const { state } = this;
    return children.map(subOption => {
      if (!subOption.children) {
        return (
          <div key={subOption.title}>
            <ListItem button key={subOption.title}>
              <Link to={subOption.url}>
                <ListItemText inset primary={subOption.title} />
              </Link>
            </ListItem>
          </div>
        );
      }
      return (
        <div key={subOption.title}>
          <ListItem button onClick={() => this.handleClick(subOption.title)}>
            <ListItemText inset primary={subOption.title} />
            {state[subOption.title] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state[subOption.title]} timeout="auto" unmountOnExit>
            {this.handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  }
  render() {
    const { classes, drawerOpen, menuOptions } = this.props;
    return (
      <div>
        <Drawer
          variant="persistent"
          anchor="left"
          open
        >
          <div>
            <List>
              {this.handler(menuItems)}
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}
export default SideMenu;

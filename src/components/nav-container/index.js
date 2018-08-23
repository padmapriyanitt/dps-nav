import { h, Component } from "preact";
import "./style.scss";
import {fa} from "font-awesome/css/font-awesome.css"
import classNames from "classnames";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  toggleSideNav() {
    this.setState({
      collapsed: !this.state.collapsed
    });
    console.log('collapsed:', this.state.collapsed);
  };

  render(props) {
    return (
      <div class={classNames({[navContainer]: true, [collapsed]: this.state.collapsed})}>
        <div class="dpLogo">
          <img src={`../../assets/images/dp-logo.png`}></img>
          <div class="titleContainer">
            <div class="hwxText"><span>Hortonworks</span></div>
            <div class="dpText"><span>DataPlane</span></div>
          </div>
        </div>
        <ul className={style.menu}>
          <li><a><i className="fa fa-server"></i><span className={style.menuItemText}>Clusters</span></a></li>
          <li><a><i className="fa fa-users"></i><span className={style.menuItemText}>Users</span></a></li>
          <li><a><i className="fa fa-server"></i><span className={style.menuItemText}>Services</span></a></li>
        </ul>
        <div onClick={this.toggleSideNav}  className={style.expander}>
          {this.state.collapsed?<i className="fa fa-angle-double-right"></i>:<i className="fa fa-angle-double-left"></i>}
        </div>
      </div>
    );
  }
}


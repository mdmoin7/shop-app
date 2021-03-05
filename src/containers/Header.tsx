import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import HeaderService from "../services/HeaderService";
type Props = { theme: string };
class Header extends React.Component<Props> {
  state = { menuData: [] };
  async componentDidMount() {
    try {
      const response = await HeaderService.getMenuItems();
      this.setState({ menuData: response.data });
    } catch (e) {
      console.log("error", e);
    }
  }
  render() {
    const { theme } = this.props;
    return (
      <nav
        className={`fixed-top navbar navbar-expand-lg navbar-${theme} bg-${theme} shadow-sm`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="fab fa-amazon fa-2x"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Menu menuList={this.state.menuData} />
            {this.props.children}
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;

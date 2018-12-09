import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Container } from "./styles";

class Menu extends Component {
  state = {
    showOptions: false
  };

  showOptionsHandler = () => {
    if (this.state.showOptions) return;

    document.addEventListener("click", this.closeOptionsHandler);
    this.setState({ showOptions: true });
  };

  closeOptionsHandler = () => {
    if (!this.state.showOptions) return;

    document.removeEventListener("click", this.closeOptionsHandler);
    this.setState({ showOptions: false });
  };

  logoutHandler = () => {
    window.localStorage.removeItem("@reactpeople:auth");

    setTimeout(() => this.props.unsetAuth(), 100);
  };

  render() {
    return (
      <Container>
        {!this.state.showOptions ? (
          <i
            aria-hidden="true"
            className="icon material-icons"
            onClick={this.showOptionsHandler}
          >
            more_vert
          </i>
        ) : (
          <i
            aria-hidden="true"
            className="icon material-icons"
            onClick={this.closeOptionsHandler}
          >
            close
          </i>
        )}

        <nav className={"menu" + (this.state.showOptions ? " opened" : "")}>
          <Link to="/profile/edit-your-location">
            <i aria-hidden="true" className="icon material-icons">
              pin_drop
            </i>
            <span>Edit your location</span>
          </Link>

          <Link to="/" onClick={this.logoutHandler}>
            <i aria-hidden="true" className="icon material-icons">
              logout
            </i>
            <span>Logout</span>
          </Link>
        </nav>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  unsetAuth: () => dispatch({ type: "UNSET_AUTH" })
});

export default connect(
  null,
  mapDispatchToProps
)(Menu);

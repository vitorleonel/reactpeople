import React, { Component } from "react";
import { connect } from "react-redux";

import api from "../../services/api";

class AuthPage extends Component {
  componentDidMount() {
    const code = new URLSearchParams(this.props.location.search).get("code");

    if (code) this.authHandler(code);
  }

  authHandler = async code => {
    try {
      const { data } = await api.post("/auth", { code });

      window.localStorage.setItem("@reactpeople:auth", JSON.stringify(data));

      this.props.setAuth(data);
    } catch (error) {}

    this.props.history.push("/");
  };

  render() {
    return <React.Fragment />;
  }
}

const mapDispatchToProps = dispatch => ({
  setAuth: data => dispatch({ type: "SET_AUTH", payload: data })
});

export default connect(
  null,
  mapDispatchToProps
)(AuthPage);

import React, { Component } from "react";
import { connect } from "react-redux";

import { Container, Message, ConfirmLocation } from "./styles";
import api from "../../services/api";

class EditLocation extends Component {
  state = {
    loading: false
  };

  myCurrentLocationHandler = () => {
    if (!("navigator" in window)) return;

    window.navigator.geolocation.getCurrentPosition(position => {
      this.props.setLocation({
        lng: position.coords.longitude,
        lat: position.coords.latitude
      });
    });
  };

  newLocationHandler = async () => {
    if (!this.props.user.location) return;

    this.setState({ loading: true });

    try {
      await api.put(
        `/users/${this.props.user._id}/location`,
        this.props.markerLocation
      );

      this.props.history.push("/");
    } catch (error) {}
  };

  render() {
    return (
      <Container>
        <Message>
          Click on the map or{" "}
          <span onClick={this.myCurrentLocationHandler}>click here</span> to set
          your location
        </Message>

        {this.props.markerLocation ? (
          <ConfirmLocation onClick={this.newLocationHandler}>
            <i
              aria-hidden="true"
              className="icon material-icons"
              onClick={this.closeOptionsHandler}
            >
              save
            </i>

            {this.state.loading ? "Saving..." : "Save"}
          </ConfirmLocation>
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  markerLocation: state.auth.location,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch({ type: "SET_LOCATION", payload: location })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLocation);

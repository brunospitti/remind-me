import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { redirectTo } from "@reach/router";

export function requireAuth(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    render() {
      if (this.props.authenticated) {
        return <ComposedComponent {...this.props} />;
      }
      return null;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.user };
  }

  return connect(mapStateToProps)(Authentication);
}

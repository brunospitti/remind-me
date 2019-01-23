import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";

import { userLogin } from "../redux/actionCreators/userLogin";

import Loading from "../components/basics/Loading";
import SignIn from "../components/SignIn";

const loading = () => <Loading />;

const LoadableToDosPage = Loadable({
  loader: () => import("../components/ToDosPage"),
  loading
});

class HomePage extends React.PureComponent {
  state = {
    signIn: true
  };

  static contextTypes = {
    router: PropTypes.object
  };

  UNSAFE_componentWillUpdate(nextProps) {
    if (nextProps.user) {
      this.setState({ signIn: false });
    } else {
      this.setState({ signIn: true });
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.user === "loading" ? (
          <Loading />
        ) : this.state.signIn ? (
          <SignIn userLogin={this.props.userLogin} />
        ) : (
          <LoadableToDosPage />
        )}
      </React.Fragment>
    );
  }
}

// styled components

function mapStateToProps({ user }) {
  return { user };
}

export default connect(
  mapStateToProps,
  { userLogin }
)(HomePage);

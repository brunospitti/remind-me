import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import styled from "styled-components";
import { lighten } from "polished";

import { colors } from "../assets/globalStyles";
import UserIcon from "../assets/icons/user.svg";

import { userLogin } from "../redux/actionCreators/userLogin";

import Loading from "../components/basics/Loading";
import { Button } from "../components/basics/Button";

const loading = () => <Loading />

const LoadableToDosPage = Loadable({
  loader: () => import("../components/ToDosPage"),
  loading
});


class SignIn extends React.PureComponent {
  state = {
    signIn : true
  }

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.user) {
      this.setState({signIn : false})
    } else {
      this.setState({signIn : true})
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.user === "loading" ? (
          <Loading />
          ) : (
            this.state.signIn ? (
              <StyledContainer>
              <h2>Sign In to start</h2>
              <StyledButton
                clickBehavior={this.props.userLogin}
                text="Sign in with Google"
              />
            </StyledContainer>
            ) : (
              <LoadableToDosPage />
            )
          )
        }
      </React.Fragment>
    );
  }
}

// styled components
const StyledContainer = styled("div")`
  width: 60%;
  height: 55vh;
  margin: 30px auto;
  position: relative;
  padding: 0 20px;
  border-radius: 3px;
  box-shadow: 1px 1px 4px ${colors.lightGrey};
  background: ${lighten(0.025, colors.light)};
  text-align: center;
  padding-top: 15vh;
  h2 {
    text-transform: capitalize;
    font-size: 2em;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
  }
`;

const StyledButton = styled(Button)`
  display: block;
  width: 300px;
  padding: 20px 30px 20px 80px;
  margin-top: 3vh;
  font-size: 1.3em;
  background: #4081ec;
  border: 1px solid #4081ec;
  position: relative;
  transition: all 0.25s ease;
  &:before{
    content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z' fill='#fbbb00'/><path d='M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z' fill='#518ef8'/><path d='M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z' fill='#28b446'/><path d='M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z' fill='#f14336'/></svg>");
    position: absolute;
    left: 0;
    top: 0;
    width: 35px;
    height: 35px;
    padding: 15px;
    background: white;
  }
  &:hover{
    background: ${lighten(0.08, "#4081ec")};
    border: 1px solid ${lighten(0.08, "#4081ec")};
  }
`

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { userLogin })(SignIn);

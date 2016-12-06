/**
 * Created by sang on 12/6/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export const REDIRECT_IF_GUEST = 'redirect if guest';
export const REDIRECT_IF_AUTHENTICATED = 'redirect if authenticated';

export function requireAuth(Component, redirectCheck = REDIRECT_IF_GUEST, redirect = '/login') {
  class AuthenticatedComponent extends React.Component {
    checkAuth(guest) {
      switch (redirectCheck) {
        case REDIRECT_IF_GUEST:
          if (guest) {
            const redirectAfterLogin = this.props.location.pathname;
            browserHistory.push(`${redirect}?next=${redirectAfterLogin}`);
          }
          break;
        case REDIRECT_IF_AUTHENTICATED:
          if (!guest) {
            const nextUrl = this.props.location.query.next;
            if (nextUrl) {
              browserHistory.push(nextUrl);
            } else browserHistory.push(redirect);
          }
          break;
        default:
      }
    }
    componentDidUpdate() {
      this.checkAuth(this.props.guest);
    }
    componentDidMount() {
      this.checkAuth(this.props.guest);
    }
    render() {
      let component;
      console.log(this.props.location);
      switch (redirectCheck) {
        case REDIRECT_IF_GUEST:
          component = !this.props.guest ? <Component {...this.props} /> : null;
          break;
        case REDIRECT_IF_AUTHENTICATED:
          component = this.props.guest ? <Component {...this.props} /> : null;
          break;
        default:
      }
      return (
        <div>
          {component}
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    guest: state.auth.authenticated.guest,
  })

  return connect(mapStateToProps)(AuthenticatedComponent);
}

export function redirectIfGuest(Component, redirect = '/login') {
  return requireAuth(Component, REDIRECT_IF_GUEST, redirect);
}

export function redirectIfAuthenticated(Component, redirect = '/') {
  return requireAuth(Component, REDIRECT_IF_AUTHENTICATED, redirect);
}

/**
 * @flow
 */
import React from 'react';
import { Redirect } from "react-router-dom";
import { Formik, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { createBrowserHistory } from "history";
import { KitButton } from 'kit';
import { Form } from 'react-bootstrap';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required')
});

const history = createBrowserHistory({
  initialEntries: ['/'],
  // basename: '/kickstart', // The base URL of the app (see below)
  forceRefresh: true, // Set true to force full page refreshes
  keyLength: 6 // The length of location.key
  // A function to use to confirm navigation with the user (see below)
  // getUserConfirmation: (message, callback) => callback(window.confirm(message))
});


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const Container = styled.div`
  border-top:10px solid purple;
  display:flex;
  // background:purple;
  padding-top:50px;
  align-items:center;
  height:100%;
  flex-direction:column;
  `

const InnerContainer = styled.div`
  width:300px
  `

const Title = styled.h2`
 color:purple;
 margin:20px;
 text-align:center;
  `

export default class Login extends React.Component {
  state = {
    // redirectToReferrer: false,
    errorText: "",
    // is_logged_in: ''
  };

  onSubmit = (values_param, setSubmitting_param) => {
      console.log('onsubmit')
      
      // console.log(this.props.loginSuccess(true))
    //  return false;
    // () => {
      setTimeout(() => {
        // console.log(values_param.email);
        this.props.loginSuccess(false, values_param.email)

        // let {isLoggedIn, userEmail} = this.props.auth.loginReducer
        // console.log(isLoggedIn)
        // console.log(userEmail)
        
        // localStorage.setItem("useremail", values_param.email);

        // fakeAuth.authenticate(() => {
          if (
            values_param.email === "royprashenjeet25@gmail.com" &&
            values_param.password === "12345"
          ) {
            localStorage.setItem("isLoggedIn", true);
            
            this.props.loginSuccess(true, values_param.email)
            
            // this.setState({
            //   is_logged_in: localStorage.setItem("isLoggedIn", true)
            // });
            // this.setState({ redirectToReferrer: true });
            // return false;
            // history.push('/home', { redirectToReferrer: true })
          } else {
            // localStorage.removeItem("useremail");
            setSubmitting_param.setSubmitting(false);
            this.setState({
              errorText: "Put correct username password"
            });
          }
        // });
      }, 400);
    // }
  }

  render() {
    console.log('login props', this.props.auth);
    let {isLoggedIn, userEmail} = this.props.auth.loginReducer
    // const { redirectToReferrer } = this.state

    if ((userEmail !== null || userEmail === '') && isLoggedIn) {
      return <Redirect to={'/'} push />
    }

    return (
      <Container>
        <InnerContainer>
          <Title>Login</Title>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            // validate={values => {
            //   let errors = {};
            //   if (!values.email) {
            //     errors.email = 'Required';
            //   } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //   ) {
            //     errors.email = 'Invalid email address';
            //   }
            //   return errors;
            // }}
            validationSchema={SignupSchema}

            onSubmit={(values, { setSubmitting })=>this.onSubmit(values, { setSubmitting })}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValid,
              isInvalid
            }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      // isValid={touched.email && !errors.email}
                      isInvalid={touched.email && !!errors.email}
                    />
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    <ErrorMessage name="email" render={msg => <span style={{ color: 'red' }}>{msg}</span>} />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      isInvalid={touched.password && !!errors.password}
                    />
                    <ErrorMessage name="password" render={msg => <span style={{ color: 'red' }}>{msg}</span>} />
                  </Form.Group>

                  <KitButton type="submit" disabled={isSubmitting}>Log in</KitButton>
                </form>
              )}
          </Formik>

          <br />
          <br />
          {this.state.errorText}
          {/* <button onClick={this.props.loginSuccess}>loginSuccess</button> */}
        </InnerContainer>
      </Container>
    );
  }
}


/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default-member */
/**
 * @flow
 */
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Login from 'containers/Login/Loadable';
import Home from 'containers/Home/Loadable';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import GlobalStyle from 'global-styles';
import Footer from 'components/Footer';
import About from 'containers/About/Loadable';
import PostDetails from 'containers/PostDetails/Loadable';
import Forms from 'containers/Forms/Loadable';
import ErrorBoundary from 'utils/errorboundary';
import { createBrowserHistory } from "history";
import { library } from '@fortawesome/fontawesome-svg-core';
import PrivateRoute from 'components/PrivateRoute';
import { connect } from 'react-redux';
import {
  faCoffee,
  faBath,
  faHome,
  faChartBar,
  faUserCircle,
  faChartPie,
  faGlobeEurope,
  faSearch,
  faAngleDown,
  faAngleUp,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faCoffee,
  faBath,
  faHome,
  faChartBar,
  faUserCircle,
  faChartPie,
  faGlobeEurope,
  faSearch,
  faAngleDown,
  faAngleUp,
  faUser,
)

const customHistory = createBrowserHistory({
  // basename: '/kickstart', // The base URL of the app (see below)
  forceRefresh: true, // Set true to force full page refreshes
  keyLength: 6 // The length of location.key
  // A function to use to confirm navigation with the user (see below)
  // getUserConfirmation: (message, callback) => callback(window.confirm(message))
});


const AppWrapper = styled.div`
  // max-width: calc(1024px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  // padding: 0 16px;
  // flex-direction: column;
`;

const InnerContainer = styled.div`
  display:flex;
  flex-direction:row;
  height:100%;
  background:#f2f2f2;
`;

const Left = styled.div`
  height: 100%;  /*allows both columns to span the full height of the browser window*/
  display: flex;
  flex-direction: column;  /*places the left and right headers above the bottom content*/
  flex-shrink: 0;
`

const Right = styled.div`
  height: 100%;  /*allows both columns to span the full height of the browser window*/
  display: flex;
  flex-direction: column;  /*places the left and right headers above the bottom content*/
  overflow-y: auto;  /*adds scroll to this container*/
  width:100%;
  position:relative;
  z-index:88;
`;

const MiddleWrap = styled.div`
  min-height:calc(100vh - 123px);
  height:100%;
  padding-top:50px;
  padding:60px 20px;
  flex:1;
  overflow-y:auto;
`;

function Analytics() {
  return (
    <div>
      <h2>Analytics</h2>
    </div>
  );
}


function Commerce() {
  return (
    <div>
      <h2>Commerce</h2>
    </div>
  );
}

function NoMatch() {
  // let location = useLocation();

  return (
    <div style={{
      justifyContent: 'center',
      alignItems: 'center',
      // border:'1px solid black',
      // backgroundColor:'yellow',
      display: 'flex',
      height: '100%',
      flexDirection: 'column'
    }}>
      <h3>
        No match found!
      </h3>
    </div>
  );
}



class App extends React.Component {
  
  render(){
    // console.log(this.props.loginAuth.isLoggedIn);
    // return false
    // let {isLoggedIn, userEmail} = this.props.loginAuth

    // console.log(this.props.loginAuth)
  // let usrname = localStorage.getItem("useremail");
  // let isloggedin = localStorage.getItem("isLoggedIn");
  // console.log('username', usrname)
  // console.log('isloggedin', isloggedin)

  
  // console.log('usrname combine', usrname === null || usrname === '');
  // console.log('isllogedin combine', JSON.parse(!isloggedin) === false || isloggedin === null)

 
  // console.log('username single',usrname)
  // console.log('isloggedin', JSON.parse(!isloggedin))
  // return false;
  // console.log((usrname === null || usrname === '') && (JSON.parse(!isloggedin) === false || isloggedin === null))
  // return false;

    // if ((userEmail === null || userEmail === '') && (isLoggedIn === false || isLoggedIn === null)) {
    //   console.log('if')
    //   return (
    //     <ErrorBoundary>
    //       <BrowserRouter
    //         history={customHistory}
    //       // basename="/kickstart"
    //       >
    //         <Switch
    //         >
    //           <Route exact path="/" component={Login} />
    //           <Redirect to="/" />
    //           {/* <PrivateRoute exact path='/home' component={Home} auth={usrname} /> */}
    //           {/* <PrivateRoute path='/home' component={Home} /> */}
  
    //           {/* <Route path="*">
    //             <NoMatch />
    //           </Route> */}
    //         </Switch>
    //       </BrowserRouter>
  
    //       <GlobalStyle />
    //     </ErrorBoundary>
    //   )
    // } else {
    //   console.log('else')
    //   return (
    //     <ErrorBoundary>
    //       <BrowserRouter
    //         history={customHistory}
    //       // basename="/kickstart"
    //       >
    //         <InnerContainer>
    //           <Left>
    //             <Sidebar />
    //           </Left>
  
    //           <Right>
    //             <Header />
  
    //             <MiddleWrap>
    //               <Switch>
  
    //                 <PrivateRoute exact path='/home' component={Home} auth={userEmail} />
    //                 {/* <Route exact path="/home" component={Home} /> */}
    //                 <Route path="/about" component={About} />
    //                 <Route path="/analytics" component={Analytics} />
    //                 <Route path="/commerce" component={Commerce} />
    //                 <Route path="/forms" component={Forms} />
    //                 <Redirect to="/home" />
    //                 {/* <Route path="*">
    //                     <NoMatch />
    //                   </Route> */}
  
    //               </Switch>
    //             </MiddleWrap>
  
    //             <Footer />
    //           </Right>
    //         </InnerContainer>
    //       </BrowserRouter>
    //       <GlobalStyle />
    //     </ErrorBoundary>
    //   );
    // }
    // console.log(localStorage.getItem("isLoggedIn"))

    if (localStorage.getItem("isLoggedIn") === 'true' ) {
      return (
        <ErrorBoundary>
          <BrowserRouter
            history={customHistory}
          // basename="/kickstart"
          >
            <InnerContainer>
              <Left>
                <Sidebar />
              </Left>
  
              <Right>
                <Header />
  
                <MiddleWrap>
                  <Switch>
  
                    <PrivateRoute exact path='/home' component={Home}  />
                    {/* <Route exact path="/home" component={Home} /> */}
                    <Route path="/about" component={About} />
                    <Route path="/analytics" component={Analytics} />
                    <Route path="/commerce" component={Commerce} />
                    <Route path="/forms" component={Forms} />
                    <Route path="/home/post/:id" component={PostDetails} />
                    <Redirect to="/home" />
                    {/* <Route path="*">
                        <NoMatch />
                      </Route> */}
  
                  </Switch>
                </MiddleWrap>
  
                <Footer />
              </Right>
            </InnerContainer>
          </BrowserRouter>
          <GlobalStyle />
        </ErrorBoundary>
      )
    } else {
      return(
      <ErrorBoundary>
          <BrowserRouter
            history={customHistory}
          // basename="/kickstart"
          >
            <Switch
            >
              <Route exact path="/" component={Login} />
              <Redirect to="/" />
              {/* <PrivateRoute exact path='/home' component={Home} auth={usrname} /> */}
              {/* <PrivateRoute path='/home' component={Home} /> */}
  
              {/* <Route path="*">
                <NoMatch />
              </Route> */}
            </Switch>
          </BrowserRouter>
  
          <GlobalStyle />
        </ErrorBoundary>
      )
    }
    
  }
  


}

// export default App;
const mapStateToProps = state => {
  // console.log(state.auth.loginReducer)
  return {
    loginAuth: state.auth.loginReducer
  }
}
export default connect(
  mapStateToProps
)(App);
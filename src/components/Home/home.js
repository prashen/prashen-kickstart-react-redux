/**
 * @flow
 */
import React from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { KitButton, KitContainer, KitCol, KitRow } from 'kit';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import ImageUploader from 'react-images-upload';
import { createBrowserHistory } from "history";
// import { withRouter } from 'react-router';

const history = createBrowserHistory();

const ListWrap = styled.ul`
  margin:5px 0;
  padding:0;
  list-style:none;

`;

const List = styled.li`
  background:white;
  border:1px solid #d8d8d8;
  padding:10px;
  margin:5px 0;
  border-radius:3px;
`
// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     console.log(cb);
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     localStorage.removeItem("useremail");
//     localStorage.removeItem("userpassword");
//     localStorage.setItem("isLoggedIn", false);

//     console.log('isloggedin logout out click', localStorage.getItem("isLoggedIn"))
//     return false;
//     // console.log(history);
//     // return false;
//     history.push('/');
//     setTimeout(cb, 100);
//   }
// };

// const LogoutBtn = withRouter(({ history }) => {
//   console.log("logout");
//   return (
//     <button onClick={() => fakeAuth.signout(() => history.push("/"))}>
//       Logout
//     </button>
//   );
// });

// const unlisten = history.listen((location, action) => {
//   // location is an object like window.location
//   console.log(action, location.pathname, location.state);
// });

class Home extends React.Component<{}> {
  state = {
    // redirectToReferrer: false,
    // sections: [],
    // value: '',
    // page: 2,
    // pictures: [],
    // dataArray: [
    //   {
    //     id: 1,
    //     post: 'Title goes here for first post',
    //     like: 1,
    //     imgSource: 'http://www.lorempixel.com/100/100'
    //   },
    //   {
    //     id: 2,
    //     post: 'Title goes here for second post',
    //     like: 0
    //   },
    //   {
    //     id: 3,
    //     post: 'Title goes here for 3 post',
    //     like: 0
    //   },
    //   {
    //     id: 4,
    //     post: 'Title goes here for 4 post',
    //     like: 0
    //   },
    //   {
    //     id: 5,
    //     post: 'Title goes here for 5 post',
    //     like: 0
    //   },
    //   {
    //     id: 6,
    //     post: 'Title goes here for 6 post',
    //     like: 0
    //   },
    //   {
    //     id: 7,
    //     post: 'Title goes here for 7 post',
    //     like: 0
    //   },
    //   {
    //     id: 8,
    //     post: 'Title goes here for 8 post',
    //     like: 0
    //   },
    //   {
    //     id: 9,
    //     post: 'Title goes here for 9 post',
    //     like: 0
    //   }
    // ]
    hasFetched: false
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('su',this.props.post);
  //   console.log('su',nextState);

  //   if (this.props.post === nextProps) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //    console.log(nextProps.post != this.props.post);
  //   //  console.log(this.props.post)
  //     return false;
  // }

  // componentDidUpdate(prevProps) {
  //   console.log(this.props.post);
  //   console.log(prevProps.post)
  //   // will be true
  //   const locationChanged =
  //     this.props.post !== prevProps.post;

  //     console.log('fff', this.props.state === prevProps.post)
  // }

  // componentDidUpdate(prevProps) {
  //   console.log('cdu', this.props.post.length)
  //   console.log('componentDidUpdate', prevProps.post.length)
  //   // return false;
  //   let self = this;
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.post.length !== prevProps.post.length) {
  //     self.someFun()
  //   }
  // }

  
  
  
  
  componentWillMount = () => {
    console.log('componentDidMount')
    let self = this;
    self.someFun()
  }

  // shouldComponentUpdate = (nextProps, nextState) =>{
  //   if ( this.state.hasFetched ) {
  //     return false;
  //   }
  //   return true;
  // }

  someFun = () => {
    // fetch('http://localhost/reactwp/wp-json/sections/v1/post')
    //   .then(res => res.json())
    //   .then(sections => this.setState((prevState, props) => {
    //     return { sections: sections.map(this.mapSection) };
    //   }));
    this.props.fetchPosts();
    this.setState({
      hasFetched: true,
    });
  }

  

//   shouldComponentRender = () => {
//     const {pending} = this.props;
//     console.log(pending)
//     if(this.pending === false) return false;
//     // more tests
//     return true;
// }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // like writing return true
  //   return this.props.children !== nextProps.children;    
  // }

  // onDrop = (picture) => {

  //   this.setState({
  //     pictures: this.state.pictures.concat(picture),
  //   }, () => {
  //     console.log('sdf', this.state.pictures[0].name)
  //   });

  // }

  

  // mapSection(section) {
  //   return {
  //     // img:  section.acf.image,
  //     // src:  section.acf.image.url,
  //     title: section.post_title,
  //     key: section.post_title,
  //     description: section.post_content,
  //     author: {
  //       name: section.acf.author_name,
  //       link: section.acf.author_link
  //     }
  //   }
  // }


  // onchangeFun = (e) => {
  //   // console.log(e.target.value)
  //   this.setState({
  //     value: e.target.value,
  //   })
  // }

  // submit = () => {
  //   console.log(this.state.value);

  //   this.setState({
  //     dataArray: [{
  //       post: this.state.value,
  //       like: 0,
  //       imgSource: 'http://placehold.it/100x100'
  //     }, ...this.state.dataArray],
  //     value: ''
  //   })
  // }

  // like = (postid, post, ind) => {
  //   // console.log(postid);

  //   // console.log(post, ind);
  //   // console.log(this.state.dataArray[ind].like + 1)
  //   // let updatedArray = this.state.dataArray[ind].like + 1;

  //   let updateList = this.state.dataArray;
  //   updateList[ind].like = updateList[ind].like + 1;

  //   // updateList
  //   console.log(updateList, ind);
  //   this.setState({
  //     dataArray: updateList
  //   });

  //   // this.state.dataArray.map((i)=>{

  //   // })

  //   // this.setState({
  //   //   dataArray:[...this.state.dataArray, ]
  //   //   // value:''
  //   // })
  // }

  // comment = () => {
  //   // console.log(this.state.value);

  //   // this.setState({
  //   //   dataArray:[{post:this.state.value}, ...this.state.dataArray],
  //   //   value:''
  //   // })
  // }

  // loadMore = () => {
  //   // alert('hi')
  //   // let moreArray =  this.state.dataArray.slice(2);
  //   // console.log(moreArray);
  //   // console.log(this.state.dataArray)
  //   // this.setState({
  //   //   dataArray:[...this.state.dataArray, ...moreArray]
  //   // })

  //   this.setState({
  //     page: this.state.page + 2
  //   })
  // }

  selectName = (e, id) => {
    e.preventDefault();
    // this.setState({ selectedName:name }, () => {
        this.props.history.push(`home/post/${id}`);
    // });
}


  render() {
    
    // console.log('pro', this.props)
    // console.log('data', (this.state.sections[0]) ? this.state.sections[0].description : 'hello')
    // console.log(localStorage.getItem("useremail"))
    // if (this.props.pending) {
    //   return <div>loading...</div>
    // }

    // if (this.props.error) {
    //   return <div>There is some error please try again later !</div>
    // }

    // if(!this.shouldComponentRender()) return <div>loading...</div>

    // let slidedDataArray = this.state.dataArray.slice(0, this.state.page);

    
    return (
      <KitContainer fluid>
        <Helmet
          titleTemplate="KickStart Template"
          defaultTitle="Home"
        >
          <meta name="description" content="Simple and useful ready to use template" />
        </Helmet>
        {/* <KitButton onClick={() => alert('hi')}>primary</KitButton> */}

        {/* <h1>{this.props.counter}</h1>

        <KitButton onClick={this.props.increment}>increment</KitButton>
        <KitButton onClick={this.props.decrement}>decrement</KitButton> */}
        {/* <h1 dangerouslySetInnerHTML={{ __html: this.state.sections[0] && this.state.sections[0].title }} />
        <p dangerouslySetInnerHTML={{ __html: this.state.sections[0] && this.state.sections[0].description }} /> */}
        {/* <p>{this.state.sections[0] && this.state.sections[0].description}</p> */}
        {/* input compose */}

        {/* <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Post something</Form.Label>
          <Form.Control as="textarea" placeholder='Post something...' rows="3" onChange={(e) => this.onchangeFun(e)} value={this.state.value} />
        </Form.Group> */}
        {/* <textarea
          type='text'
          placeholder='Post something...'
          value={this.state.value}
          style={{ padding: '10px', height: 100, width: 500 }}
          onChange={(e) => this.onchangeFun(e)} /> */}

        {/* <ImageUploader
          fileContainerStyle={{
            backgroundColor: 'transparent',
          }}
          withLabel={false}
          withIcon={false}
          withPreview={false}
          buttonText='Choose images'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        /> */}

        {/* <br></br> */}
        {/* <Button onClick={() => this.submit()}>Post</Button>
        <hr></hr>


        <ListWrap>
          {

            slidedDataArray.map((post, index) => {
              let self = this;
              return (
                <List key={index}>
                  {post.imgSource &&
                    <img src={post.imgSource} style={{ width: 100, height: 100 }} />
                  }

                  <Link to={`home/post/${index}`}>{post.post}</Link>

                  <button>click me</button>
                  <Button onClick={(f) => self.like(this, post.id, index)}>like {post.like}</Button>
                  {' '}
                  <Button onClick={() => self.comment()}>comment</Button>
                </List>
              )
            })
          }
        </ListWrap>

        <Button onClick={this.loadMore}>load more</Button> */}

        <ListWrap>
          {
            this.props.post.map((post, index) => {
              return (
                <List key={index}>
                    {/* <a href="home/post/1" onClick={"javascript:void(0)"}>link</a> */}
                   {/* <Link 
                   onClick={(e)=> e.preventDefault()}
                   to={{
                     pathname:`home/post/${post.id}`,
                     }}>{post.title}</Link> */}
                     <h2 onClick={(e) => this.selectName(e, post.id)}> {post.title} </h2>
                  <p>{post.body}</p>
                </List>
              )
            })
          }
        </ListWrap> 
      </KitContainer>
    );
  }
}

export default withRouter(Home);
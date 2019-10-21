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

const history = createBrowserHistory({
  // basename: '', // The base URL of the app (see below)
  forceRefresh: true, // Set true to force full page refreshes
  keyLength: 6 // The length of location.key
  // A function to use to confirm navigation with the user (see below)
  // getUserConfirmation: (message, callback) => callback(window.confirm(message))
});

class PostDetails extends React.Component<{}> {
  state = {
    redirectToReferrer: false,
  }

  componentDidMount = () => {
    this.someFun();
  }


  someFun = () => {
    // fetch('http://localhost/reactwp/wp-json/sections/v1/post')
    //   .then(res => res.json())
    //   .then(sections => this.setState((prevState, props) => {
    //     return { sections: sections.map(this.mapSection) };
    //   }));
    
    this.props.fetchPostsDetails(this.props.match.params.id);
    // console.log(this.props)

  }

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



  render() {

    window.onpopstate = function () {
        // console.log(history.action)
        // if(history.action === 'POP'){
          history.goBack();
        // }
        // 
    };
    
    console.log('postdetails', this.props.match.params.id)
    // console.log('data', (this.state.sections[0]) ? this.state.sections[0].description : 'hello')
    // console.log(localStorage.getItem("useremail"))
    if (this.props.pending) {
      return <div>loading...</div>
    }

    if (this.props.error) {
      return <div>There is some error please try again later !</div>
    }


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

        {/* <ListWrap>
          {
            this.props.post.map((post, index) => {
              return (
                <List key={index}>
                   <Link to={`home/post/${index}`}>{post.title}</Link>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </List>
              )
            })
          }
        </ListWrap>  */}

        <h1>{this.props.postDetails.title}</h1>

        <p>{this.props.postDetails.body}</p>
      </KitContainer>
    );
  }
}

export default withRouter(PostDetails);
(window.webpackJsonpkickstart=window.webpackJsonpkickstart||[]).push([[5],{146:function(e,t,n){"use strict";n.r(t);var r=n(69),o=n(27),a=n(39);function i(){return{type:a.e}}function c(){return{type:a.a}}function s(){return{type:a.f}}function l(){return function(e){e({type:a.c}),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){if(t.error)throw t.error;var n;return e((n=t,{type:a.d,payload:n})),t})).catch((function(t){e(function(e){return{type:a.b,error:e}}(t))}))}}var u=n(145),p=n(20),d=n(21),m=n(24),f=n(22),h=n(23),g=n(5),k=n(0),y=n.n(k),b=n(90),v=n(12),w=n(6),E=n(84),T=n(141),j=n.n(T);function x(){var e=Object(g.a)(["\n  background:white;\n  border:1px solid #d8d8d8;\n  padding:10px;\n  margin:5px 0;\n  border-radius:3px;\n"]);return x=function(){return e},e}function S(){var e=Object(g.a)(["\n  margin:5px 0;\n  padding:0;\n  list-style:none;\n\n"]);return S=function(){return e},e}var C=w.c.ul(S()),O=w.c.li(x()),A=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={value:"",page:2,pictures:[],dataArray:[{id:1,post:"Title goes here for first post",like:1,imgSource:"http://www.lorempixel.com/100/100"},{id:2,post:"Title goes here for second post",like:0},{id:3,post:"Title goes here for 3 post",like:0},{id:4,post:"Title goes here for 4 post",like:0},{id:5,post:"Title goes here for 5 post",like:0},{id:6,post:"Title goes here for 6 post",like:0},{id:7,post:"Title goes here for 7 post",like:0},{id:8,post:"Title goes here for 8 post",like:0},{id:9,post:"Title goes here for 9 post",like:0}]},n.componentDidMount=function(){n.someFun()},n.onDrop=function(e){n.setState({pictures:n.state.pictures.concat(e)},(function(){console.log("sdf",n.state.pictures[0].name)}))},n.someFun=function(){n.props.fetchPosts()},n.onchangeFun=function(e){n.setState({value:e.target.value})},n.submit=function(){console.log(n.state.value),n.setState({dataArray:[{post:n.state.value,like:0,imgSource:"http://placehold.it/100x100"}].concat(Object(u.a)(n.state.dataArray)),value:""})},n.like=function(e,t,r){var o=n.state.dataArray;o[r].like=o[r].like+1,console.log(o,r),n.setState({dataArray:o})},n.comment=function(){},n.loadMore=function(){n.setState({page:n.state.page+2})},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;if(this.props.pending)return y.a.createElement("div",null,"loading...");if(this.props.error)return y.a.createElement("div",null,"There is some error please try again later !");var t=this.state.dataArray.slice(0,this.state.page);return y.a.createElement(v.a,{fluid:!0},y.a.createElement(b.Helmet,{titleTemplate:"KickStart Template",defaultTitle:"Home"},y.a.createElement("meta",{name:"description",content:"Simple and useful ready to use template"})),y.a.createElement("textarea",{type:"text",placeholder:"Post something...",value:this.state.value,style:{padding:"10px",height:100,width:500},onChange:function(t){return e.onchangeFun(t)}}),y.a.createElement(j.a,{fileContainerStyle:{backgroundColor:"transparent"},withLabel:!1,withIcon:!1,withPreview:!1,buttonText:"Choose images",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880}),y.a.createElement("br",null),y.a.createElement(E.a,{onClick:function(){return e.submit()}},"Post"),y.a.createElement("hr",null),y.a.createElement(C,null,t.map((function(t,n){var r=e;return y.a.createElement(O,{key:n},t.imgSource&&y.a.createElement("img",{src:t.imgSource,style:{width:100,height:100}}),y.a.createElement("p",null,t.post),y.a.createElement(E.a,{onClick:function(o){return r.like(e,t.id,n)}},"like ",t.like)," ",y.a.createElement(E.a,{onClick:function(){return r.comment()}},"comment"))}))),y.a.createElement(E.a,{onClick:this.loadMore},"load more"))}}]),t}(y.a.Component),F=Object(r.b)((function(e){return{counter:e.home.count,error:e.home.posts.error,post:e.home.posts.post,pending:e.home.posts.pending}}),(function(e){return Object(o.b)({increment:i,decrement:c,reset:s,fetchPosts:l},e)}))(A);t.default=F}}]);
//# sourceMappingURL=5.b79ccce3.chunk.js.map
(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],{13:function(e,n,a){},15:function(e,n,a){},17:function(e,n,a){},18:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a.n(t),c=a(8),i=a.n(c),o=(a(13),a(14),a(15),a(2)),s=a(3),l=a(4),h=a(6),m=a(5),u=a(0);function d(e){var n=e.searchField,a=e.onSearchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest",type:"search",name:"search",placeholder:"type to search",onChange:a,value:n})})}function j(e){var n=e.id,a=e.name,t=e.email;return Object(u.jsxs)("div",{className:"bg-light-blue dib br4 pa3 ma2 grow",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(n,"?size=150x150&bgset=bg2&set=any"),alt:"robot ".concat(n)}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h4",{children:[n,". ",a]}),Object(u.jsx)("p",{children:t})]})]})}function b(e){var n=e.robots;return Object(u.jsx)("div",{children:n.map((function(e){var n=e.id,a=e.name,t=e.email;return Object(u.jsx)(j,{id:n,name:a,email:t},"key-".concat(n))}))})}function f(e){var n=e.children;return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"calc(100vh - 195px)"},children:n})}var v=function(e){Object(h.a)(a,e);var n=Object(m.a)(a);function a(e){var t;return Object(o.a)(this,a),(t=n.call(this,e)).state={hasError:!1},t}return Object(s.a)(a,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state.hasError,n=this.props.children;return e?Object(u.jsx)("h1",{className:"red",children:"Something broke!.."}):n}}]),a}(r.a.Component),O=(a(17),function(e){Object(h.a)(a,e);var n=Object(m.a)(a);function a(e){var t;return Object(o.a)(this,a),(t=n.call(this,e)).state={robots:[],searchField:"",error:null,isLoading:!1},t.onSearchChange=t.onSearchChange.bind(Object(l.a)(t)),t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:n,isLoading:!1})})).catch((function(n){return e.setState({error:n,isLoading:!1})}))}},{key:"onSearchChange",value:function(e){var n=e.target.value;this.setState({searchField:n})}},{key:"render",value:function(){var e=this.state,n=e.robots,a=e.searchField,t=e.isLoading,r=e.error,c=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return console.log(a),t?Object(u.jsx)("h1",{className:"tc f1",children:"Loading..."}):Object(u.jsxs)("div",{className:"tc",children:[!t&&r?Object(u.jsx)("h1",{className:"tc f1 red",children:"ERROR! "}):Object(u.jsx)("h1",{className:"f1",children:"Success! - Robo List"}),Object(u.jsx)(d,{searchField:a,onSearchChange:this.onSearchChange}),Object(u.jsx)(f,{children:Object(u.jsx)(v,{children:c.length?Object(u.jsx)(b,{robots:c}):Object(u.jsx)("div",{children:"doesn't exist"})})})]})}}]),a}(r.a.Component));i.a.render(Object(u.jsx)(O,{robots:[{id:1,name:"John Doe",username:"John",email:"john@email.com"},{id:2,name:"Jane Doe",username:"Jane",email:"jane@email.com"},{id:3,name:"Joe Doe",username:"Joe",email:"joe@email.com"},{id:4,name:"Juan Doe",username:"Juan",email:"juan@email.com"},{id:5,name:"Jack Doe",username:"Jack",email:"jack@email.com"},{id:6,name:"Jill Doe",username:"Jill",email:"jill@email.com"},{id:7,name:"Jun Doe",username:"Jun",email:"jun@email.com"},{id:8,name:"Jenny Doe",username:"Jenny",email:"jenny@email.com"},{id:9,name:"Jana Doe",username:"Jana",email:"jana@email.com"},{id:10,name:"Jennifer Doe",username:"Jennifer",email:"jennifer@email.com"}]}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.646a7822.chunk.js.map
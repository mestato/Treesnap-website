webpackJsonp([13,26],{"+GZh":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("U7vG"),r=a.n(n),o=a("QyhV"),i=a("1B1h"),s=a("DakW"),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s["a"]),c(t,[{key:"componentDidMount",value:function(){window.fixHeight()}},{key:"render",value:function(){return r.a.createElement(i.a,null,r.a.createElement(o.default,l({admin:!1},this.props)))}}]),t}();t.default=u},"1B1h":function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),o=[{to:"/account",icon:"fa-address-card-o",label:"Settings"},{to:"/account/observations",icon:"fa-tree",label:"Observations"},{to:"/account/groups",icon:"fa-users",label:"Groups"},{to:"/account/collections",icon:"fa-th",label:"Collections"},{to:"/account/filters",icon:"fa-filter",label:"Filters"}],i=a("cabM"),s=a("TIMf"),l=a("ePhh"),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),c(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(i.a,null),r.a.createElement("div",{className:"home-section short-content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-narrow account-sidebar-container"},r.a.createElement(l.a,{links:o,title:"Members"})),r.a.createElement("div",{className:"column"},this.props.children)))),r.a.createElement(s.a,null))}}]),t}();t.a=u},"5zKI":function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),o=a("O27J"),i=a.n(o),s=a("KSGD"),l=a.n(s),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={show:!1,hiding:!1,marginTop:window.scrollY>70?-40:0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),c(t,[{key:"componentWillMount",value:function(){var e=this;this.timer=setTimeout(function(){e.hide()},5e3)}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({show:!0})},100),window.addEventListener("scroll",this.handleWindowScroll.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleWindowScroll.bind(this))}},{key:"handleWindowScroll",value:function(){var e=window.scrollY>70?-40:0;this.setState({marginTop:e})}},{key:"hide",value:function(){this.setState({hiding:!0}),clearTimeout(this.timer)}},{key:"render",value:function(){var e="";switch(this.props.type){case"success":case"danger":case"info":case"warning":e="is-"+this.props.type;break;default:e="is-success"}e+=this.state.show?" show":"",e+=this.state.hiding?" hiding":"";var t=this.state.marginTop;return r.a.createElement("div",{className:"notification push-notification "+e,style:{marginTop:t+"px"}},r.a.createElement("button",{type:"button",className:"delete",onClick:this.hide.bind(this)}),this.props.message)}}],[{key:"_remove",value:function(){this.stack&&this.stack.length>0&&document.body.removeChild(this.stack.shift())}},{key:"push",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",n=document.createElement("div");i.a.render(r.a.createElement(t,{message:e,type:a,container:n}),n),document.body.appendChild(n),this.stack.length>0&&this._remove(),this.stack.push(n)}}]),t}();t.a=u,u.PropTypes={message:l.a.string.isRequired,type:l.a.string,container:l.a.object.isRequired},u.defaultProps={type:"success"},u.stack=[]},DakW:function(e,t,a){"use strict";var n=a("U7vG");a.n(n);var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return window.ga&&setTimeout(function(){return window.ga("send","pageview")},2500),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),t}();t.a=r},IFrJ:function(e,t,a){"use strict";var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setPath()}return n(e,[{key:"setPath",value:function(){this.path=window.location.pathname,"/"!==this.path&&this.path.replace(/\/$/g,"")}},{key:"isActive",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is-active";return this.setPath(),t&&this.path===e?a:!t&&this.path.indexOf(e)>=0?a:null}},{key:"parseUrl",value:function(e){var t={};return(e=e.substr(1)).split("&").forEach(function(e){if(e){var a=(e=e.split("+").join(" ")).indexOf("="),n=a>-1?e.substr(0,a):e,r=a>-1?decodeURIComponent(e.substr(a+1)):"",o=n.indexOf("[");if(-1===o)t[decodeURIComponent(n)]=r;else{var i=n.indexOf("]",o),s=decodeURIComponent(n.substring(o+1,i));n=decodeURIComponent(n.substring(0,o)),t[n]||(t[n]=[]),s?t[n][s]=r:t[n].push(r)}}}),t}}]),e}();t.a=new r},"OE/d":function(e,t,a){"use strict";var n=a("t4LX"),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0===t&&(t=JSON.parse(JSON.stringify(window.TreeSnap))),this._role=null!==t.role?t.role.toLowerCase():null,this._isLoggedIn=t.loggedIn,this._isAdmin="admin"===this._role,this._isScientist="scientist"===this._role,this._user=t.user,this._groups=[],this._abilities={member:[],owner:[],admin:[]},this._role&&(this._role=this._role.toLowerCase()),this.initAbilities(),this.loadGroups(),n.a.listen("user.groups.updated",this.loadGroups.bind(this))}return o(e,[{key:"initAbilities",value:function(){this._abilities.user=["create notes","create collections","flag observations"],this._abilities.scientist=["contact users","confirm species","access admin pages","view accurate location"].concat(this._abilities.user),this._abilities.admin=["manage users","delete observations","manage events"].concat(this._abilities.scientist)}},{key:"loadGroups",value:function(){var e=this;this.authenticated()&&axios.get("/web/groups?with_users=1").then(function(t){e._groups=t.data.data.map(function(e){return{id:e.id,users:e.users.map(function(e){return e.id})}})}).catch(function(e){console.log(e)})}},{key:"can",value:function(e){return!(!this.authenticated()||null===this._role)&&this._abilities[this._role].indexOf(e)>-1}},{key:"owns",value:function(e,t){return void 0===t&&(t="user_id"),"object"===(void 0===e?"undefined":r(e))?Array.isArray(e)?e.every(this.owns.bind(this)):void 0!==e[t]&&e[t]===this._user.id:"number"==typeof e&&this._user.id===e}},{key:"inGroupWith",value:function(e){for(var t in this._groups)if(this._groups[t].users.indexOf(e)>-1)return!0;return!1}},{key:"inGroup",value:function(e){for(var t in this._groups)if(this._groups[t].id===e)return!0;return!1}},{key:"authenticated",value:function(){return this._isLoggedIn}},{key:"admin",value:function(){return this._isAdmin}},{key:"scientist",value:function(){return this._isScientist}},{key:"role",value:function(){return this._role}},{key:"user",value:function(){return this._user}}]),e}();t.a=new i},QyhV:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("U7vG"),r=a.n(n),o=a("KSGD"),i=a.n(o),s=a("saAw"),l=a("PJh5"),c=a.n(l),u=a("F8kA"),m=a("5zKI"),p=a("t4LX"),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={searchTerm:"",groups:[],loading:!1,joiningGroup:-1,seeMore:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),f(t,[{key:"componentWillMount",value:function(){this.search()}},{key:"search",value:function(e){var t=this;void 0!==e?this.setState({searchTerm:e}):e="",axios.get("/web/groups/search",{params:{term:e}}).then(function(e){t.setState({groups:e.data.data})}).catch(function(e){console.log(e)})}},{key:"join",value:function(e){var t=this;-1===this.state.joiningGroup&&(this.setState({joiningGroup:e.id,loading:!0}),axios.post("/web/groups/join/"+e.id).then(function(e){m.a.push(e.data.data),t.setState({joiningGroup:-1,loading:!1}),t.search(t.state.searchTerm)}).catch(function(e){if(t.setState({joiningGroup:-1,loading:!1}),e.response){var a=e.response;switch(a.status){case 404:m.a.push("Unknown group selected! Please select a valid group","danger");break;case 422:a.data.error?m.a.push(a.data.error,"danger"):m.a.push("Unknown error! Please try again later","danger");break;default:m.a.push("Internal server error! Please try again later","danger")}}else m.a.push("Network error! Please try again later","danger")}))}},{key:"render",value:function(){var e=this,t=this.state.seeMore?this.state.groups:this.state.groups.slice(0,4);return r.a.createElement("div",null,r.a.createElement("div",{className:"field mb-1"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"search",className:"input",placeholder:"Type to search...",onChange:function(t){var a=t.target;return e.search(a.value)},value:this.state.searchTerm}))),r.a.createElement("table",{className:"table has-text-vertically-centered"},r.a.createElement("tbody",null,0===t.length&&this.state.searchTerm.length>0?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3,className:"has-text-grey"},"No results found")):null,t.map(function(t){var a=e.state.joiningGroup===t.id?" is-loading":" is-outlined";return a+=t.has_request?" is-warning":" is-success",r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.users_count," Members"),r.a.createElement("td",{className:"has-text-right"},r.a.createElement("button",{type:"button",className:"button is-small"+a,disabled:e.state.loading&&e.state.joiningGroup!==t.id,onClick:function(){return e.join(t)}},t.has_request?"Pending":"Join")))}))),this.state.groups.length>4?r.a.createElement("a",{href:"javascript:;",className:"is-block has-text-centered",onClick:function(){return e.setState({seeMore:!e.state.seeMore})}},this.state.seeMore?"See Less":"See More"):null)}}]),t}(),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={name:"",share:!1,isPrivate:0,errors:{share:[],name:[],isPrivate:[]},groups:[],success:!1,loading:!1},document.title="Groups - TreeSnap",a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),d(t,[{key:"componentWillMount",value:function(){var e=this;this.setState({loading:!0}),axios.get("/web/groups").then(function(t){var a=t.data.data;e.setState({groups:a,loading:!1})}).catch(function(t){console.log(t),e.setState({loading:!1})})}},{key:"_renderGroupsTable",value:function(){if(0===this.state.groups.length)return r.a.createElement("div",null,r.a.createElement("p",null,"There are no available groups yet. You can create a group using the form below."),r.a.createElement("p",null,"If someone else invites you to join their group, the group will show up here once you accept the invitation."));var e=this.props.admin;return r.a.createElement("table",{className:"table is-striped mb-none",id:"groups-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Users"),r.a.createElement("th",null,"Leader"),r.a.createElement("th",null,"Date Created"))),r.a.createElement("tbody",null,this.state.groups.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement(u.b,{to:(e?"":"/account")+"/group/"+t.id},t.name," ","You"===t.owner.name&&t.group_requests_count>0?r.a.createElement("i",{className:"tag is-success"},t.group_requests_count," pending requests"):null)),r.a.createElement("td",null,t.users_count),r.a.createElement("td",null,t.owner.name),r.a.createElement("td",null,c()(t.created_at).format("MMM Do, YYYY")))})))}},{key:"_renderForm",value:function(){var e=this;return r.a.createElement("form",{action:"#",onSubmit:this.submit.bind(this)},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Group Name"),r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("input",{type:"text",className:"limit-width input"+(this.state.errors.name.length>0?" is-danger":""),value:this.state.name,placeholder:"Group Name",onChange:function(t){var a=t.target;return e.setState({name:a.value})}}),this.state.errors.name.map(function(e,t){return r.a.createElement("p",{className:"help is-danger",key:t},e)}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Discoverability"),r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("span",{className:"select"},r.a.createElement("select",{value:this.state.isPrivate,onChange:function(t){var a=t.target;return e.setState({isPrivate:parseInt(a.value)})}},r.a.createElement("option",{value:1},"Users must be invited to join"),r.a.createElement("option",{value:0},"Allow anyone to find this group and apply to join"))),this.state.errors.isPrivate.map(function(e,t){return r.a.createElement("p",{className:"help is-danger",key:t},e)}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",className:"mr-0",onChange:function(t){var a=t.target;return e.setState({share:a.checked})},checked:this.state.share}),r.a.createElement("span",null,"Share all of my observations with members of this group including accurate location coordinates"))),this.state.errors.share.map(function(e,t){return r.a.createElement("p",{className:"help is-danger",key:t},e)})),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-primary"},"Create Group"))))}},{key:"submit",value:function(e){var t=this;e.preventDefault(),axios.post("/web/groups",{name:this.state.name,share:this.state.share,is_private:1===this.state.isPrivate}).then(function(e){var a=e.data.data,n=t.state.groups;n.push(a),t.setState({name:"",groups:n,errors:{name:[],share:[],isPrivate:[]}}),m.a.push("Group created successfully."),p.a.emit("user.groups.updated")}).catch(function(e){if(e.response&&422===e.response.status){var a=e.response.data;t.setState({errors:{name:a.name||[],share:a.share||[],isPrivate:a.is_private||[]}})}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"title is-3"},"User Groups"),r.a.createElement("div",{className:"box"},r.a.createElement("h4",{className:"title is-4"},"Groups"),this._renderGroupsTable()),r.a.createElement("div",{className:"columns is-multiline"},r.a.createElement("div",{className:"column is-12-tablet is-6-desktop is-6-fullhd"},r.a.createElement("div",{className:"box"},r.a.createElement("h2",{className:"title is-4"},"Create New Group"),this._renderForm())),r.a.createElement("div",{className:"column is-12-tablet is-6-desktop is-6-fullhd"},r.a.createElement("div",{className:"box"},r.a.createElement("h2",{className:"title is-4"},"Join a Group"),r.a.createElement("p",{className:"mb-1"},"Search and apply to join public groups"),r.a.createElement(h,null)))),r.a.createElement(s.a,{visible:this.state.loading}))}}]),t}();t.default=v;v.PropTypes={admin:i.a.bool},v.defaultProps={admin:!0}},TIMf:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),o=a("OE/d"),i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),i(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns has-text-centered"},r.a.createElement("div",{className:"column is-4"},r.a.createElement("p",null,r.a.createElement("b",null,"Site Map")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/map"},"Observations Map")),o.a.authenticated()?r.a.createElement("li",null,r.a.createElement("a",{href:"/account"},"Your Account")):null,o.a.authenticated()?null:r.a.createElement("li",null,r.a.createElement("a",{href:"/register"},"Registration")),o.a.authenticated()?null:r.a.createElement("li",null,r.a.createElement("a",{href:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement("a",{href:"/developer"},"Developer")))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("p",null,r.a.createElement("b",null,"Resources")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/partners"},"About Us")),r.a.createElement("li",null,r.a.createElement("a",{href:"/contact"},"Contact US")),r.a.createElement("li",null,r.a.createElement("a",{href:"/about"},"Scientific Partners")),r.a.createElement("li",null,r.a.createElement("a",{href:"/trees"},"The Trees of TreeSnap")),r.a.createElement("li",null,r.a.createElement("a",{href:"/faq"},"Frequently Asked Questions")))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("p",{className:"mb-1"},r.a.createElement("b",null,"Legal")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/privacy-policy"},"Privacy Policy")),r.a.createElement("li",null,r.a.createElement("a",{href:"/terms-of-use"},"Terms of Use"))))),r.a.createElement("div",{className:"columns logos"},r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://www.utk.edu/"},r.a.createElement("img",{src:"/images/ut3.png",alt:"University of Tennessee Logo"}))),r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://uky.edu"},r.a.createElement("img",{src:"/images/uky3.png",alt:"University of Kentucky Logo"}))),r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://www.nsf.gov/"},r.a.createElement("img",{src:"/images/nsf1.png",alt:"NSF Logo"})))),r.a.createElement("p",{className:"has-text-centered"},"Copyright © ",(new Date).getFullYear()," University of Tennessee Knoxville and University of Kentucky.")))}}]),t}();t.a=s},cabM:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),o=a("KSGD"),i=a.n(o),s=a("IFrJ"),l=a("F8kA"),c=a("OE/d"),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={isActive:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),u(t,[{key:"toggle",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"+(this.props.home?" home-nav":"")},r.a.createElement("div",{className:this.props.container?"container is-fluid":"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(l.c,{to:"/",className:"navbar-item"},r.a.createElement("img",{src:"/logo/ts-logo-"+(this.props.home?"48":"32")+".png",alt:"Logo",className:"logo-img"}),r.a.createElement("span",{className:"logo-text"},r.a.createElement("b",null,"Tree"),r.a.createElement("span",{style:{fontWeight:300}},"Snap"))),r.a.createElement("div",{className:"navbar-burger",onClick:this.toggle.bind(this)},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu"+(this.state.isActive?" is-active":"")},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("a",{href:"https://www.facebook.com/treesnapapp/",className:"navbar-item"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("a",{href:"https://twitter.com/Treesnapapp",className:"navbar-item"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-twitter"})))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement(l.c,{exact:!0,to:"/",className:"navbar-item",activeClassName:"is-active"},"Home"),r.a.createElement(l.c,{to:"/map",className:"navbar-item",activeClassName:"is-active"},"Map"),r.a.createElement(l.c,{to:"/partners",className:"navbar-item",activeClassName:"is-active"},"Scientific Partners"),r.a.createElement(l.c,{to:"/about",className:"navbar-item",activeClassName:"is-active"},"About"),c.a.authenticated()?r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement(l.c,{to:"/account",className:"navbar-link",activeClassName:"is-active"},"Account"),r.a.createElement("div",{className:"navbar-dropdown"},r.a.createElement(l.c,{to:"/account/observations",className:"navbar-item",activeClassName:"is-active"},"My Observations"),r.a.createElement(l.c,{to:"/account/groups",className:"navbar-item",activeClassName:"is-active"},"Groups"),r.a.createElement(l.c,{to:"/account/collections",className:"navbar-item",activeClassName:"is-active"},"Collections"),r.a.createElement(l.c,{to:"/account/filters",className:"navbar-item",activeClassName:"is-active"},"Filters"),r.a.createElement("hr",{className:"navbar-divider"}),r.a.createElement(l.c,{to:"/account",className:"navbar-item",activeClassName:"is-active"},"Settings"),r.a.createElement("a",{href:"/logout",className:"navbar-item"},"Logout"))):null,c.a.authenticated()?null:r.a.createElement("a",{href:"/login",className:"navbar-item "+s.a.isActive("/login")},"Login"),c.a.authenticated()?null:r.a.createElement("a",{href:"/register",className:"navbar-item "+s.a.isActive("/register")},"Register"),c.a.can("access admin pages")?r.a.createElement("a",{href:"/admin",className:"navbar-item "+s.a.isActive("/admin",!1)},"Admin"):null))))}}]),t}();t.a=m,m.PropTypes={container:i.a.bool,home:i.a.bool},m.defaultProps={container:!1,home:!1}},ePhh:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),o=a("KSGD"),i=a.n(o),s=a("F8kA"),l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),l(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("aside",{className:"menu admin-sidebar is-hidden-mobile",role:"navigation"},""!==this.props.title?r.a.createElement("p",{className:"menu-heading"},this.props.title):null,r.a.createElement("ul",{className:"menu-list"},this.props.links.map(function(e,t){return r.a.createElement("li",{key:"sidebar_"+t},r.a.createElement(s.c,{to:e.to,activeClassName:"is-active",exact:!0},r.a.createElement("i",{className:"fa "+e.icon})," ",e.label))}))),r.a.createElement("aside",{className:"tabs is-hidden-tablet home-tabs"},this.props.links.map(function(e,t){return r.a.createElement("li",{key:"sidebar_tab_"+t},r.a.createElement(s.c,{to:e.to,activeClassName:"is-active",exact:!0},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fa "+e.icon})),r.a.createElement("span",null,e.label)))})))}}]),t}();t.a=c,c.PropTypes={links:i.a.array.isRequired,title:i.a.string},c.defaultProps={title:""}},saAw:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),o=a("KSGD"),i=a.n(o),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),s(t,[{key:"render",value:function(){return this.props.visible?this.props.inline?r.a.createElement("div",{className:"mt-1",style:this.props.containerStyle},r.a.createElement("i",{className:"fa fa-refresh fa-spin fa-2x"})):r.a.createElement("div",{className:"spinner-overlay",style:this.props.containerStyle},r.a.createElement("div",{className:"overlay-blur"}),r.a.createElement("span",{className:"spinner-container"},r.a.createElement("i",{className:"is-loading"}))):null}}]),t}();t.a=l,l.PropTypes={visible:i.a.bool.isRequired,containerStyle:i.a.object,inline:i.a.bool},l.defaultProps={containerStyle:{},inline:!1}},t4LX:function(e,t,a){"use strict";var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"emit",value:function(e){var t=void 0;document.createEvent?(t=new Event(e),document.dispatchEvent(t)):(t=document.createEventObject(),document.fireEvent("on"+e,t))}},{key:"listen",value:function(e,t){document.addEventListener(e,t)}},{key:"remove",value:function(e,t){document.removeEventListener(e,t)}}]),e}();t.a=new r}});
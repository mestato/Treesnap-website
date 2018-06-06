webpackJsonp([25],{WibX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("U7vG"),o=n.n(a),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={users:[],topics:[],loading:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),r(t,[{key:"componentDidMount",value:function(){this.loadSettings()}},{key:"loadSettings",value:function(){var e=this;this.setState({loading:!0}),axios.get("/admin/web/notifications").then(function(t){var n=t.data.data,a=n.users,o=n.topics;e.setState({users:a,topics:o,loading:!1})}).catch(function(t){console.log(t),e.setState({loading:!1})})}},{key:"toggle",value:function(e,t){var n=this;this.setState({loading:!0}),axios.post("/admin/web/notifications/toggle",{user_id:e.id,topic_id:t.id}).then(function(e){var t=e.data.data,a=t.users,o=t.topics;n.setState({users:a,topics:o,loading:!1})}).catch(function(e){alert("An error occurred while processing your request. Refresh the page to try again. See console for errors."),console.error(e)})}},{key:"renderRow",value:function(e){var t=this;return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,e.name),o.a.createElement("td",null,this.state.topics.map(function(n,a){return o.a.createElement("div",{key:a,className:"checkbox"},o.a.createElement("input",{type:"checkbox",value:!0,disabled:t.state.loading,onChange:function(a){a.target;t.toggle(e,n)},checked:e.subscription_topics.map(function(e){return e.id}).indexOf(n.id)>-1})," ",n.description)})))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"title is-3"},"Manage Admin Notifications"),o.a.createElement("div",{className:"box"},o.a.createElement("h3",{className:"title is-4 mb-0"},"Admin Users"),o.a.createElement("p",{className:"mb-0"},"Subscribe users to a topic using the checkboxes"),o.a.createElement("table",{className:"table table-fixed"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"User"),o.a.createElement("th",null,"Topics"))),o.a.createElement("tbody",null,this.state.users.map(this.renderRow.bind(this))))))}}]),t}();t.default=i}});
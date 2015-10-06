var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function() {
		this.props.router.on('route', () => {
			this.forceUpdate();
		});	      	
	},
	render: function() {
		var nav = [];
		nav.push(this.showNavLinks('', 'Home'));
		if(Parse.User.current()) {
			nav.push(this.showNavLinks('dashboard', 'Dashboard'));
			nav.push(<li><a href="#" onClick={this.logout}>Logout</a></li>);
		}
		else {
			nav.push(this.showNavLinks('login', 'Login'));
			nav.push(this.showNavLinks('register', 'Register'));
		}
		return (
			<div className="nav-wrapper">
				<a href="#" className="brand-logo left">Login Example</a>
				<ul id="nav-mobile" className="right">
					{nav}
				</ul>
			</div>
		);
	},
	showNavLinks: function(url, buttonName) {
		var currentUrl = Backbone.history.getFragment();
		if(currentUrl === url) {
			return(<li key={url} className="active"><a href={'#'+url}>{buttonName}</a></li>);
		}
		else {
			return(<li key={url}><a href={'#'+url}>{buttonName}</a></li>);
		}
	},
	logout: function(e) {
		e.preventDefault();
		Parse.User.logOut();
		this.props.router.navigate('', {trigger: true});
	}
})
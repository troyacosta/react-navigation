var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="nav-wrapper">
				<a href="#" className="brand-logo left">Login Example</a>
				<ul id="nav-mobile" className="right">
					<li key="home"><a href="#">Home</a></li>
					<li key="dashboard"><a href="#dashboard">Dashboard</a></li>
					<li key="login"><a href="#login">Login</a></li>
					<li key="register"><a href="#register">Register</a></li>
					<li key="logout"><a href="#logout">Logout</a></li>
				</ul>
			</div>
		);
	}
})
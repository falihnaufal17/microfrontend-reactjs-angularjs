import React from 'react'
import { navigateToUrl } from 'single-spa'

const NavBar = () => (
	<nav>
		<div className="nav-wrapper container">
			<a href="/" onClick={navigateToUrl} className="brand-logo">Single-Spa</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><a href="/" onClick={navigateToUrl}>Home</a></li>
				<li><a href="/angularJS" onClick={navigateToUrl}>AngularJS</a></li>
			</ul>
		</div>
	</nav>
)

export default NavBar
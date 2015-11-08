var React = require('react');

var SiteNav = React.createClass({
  render: function() {
    return (
      <nav className="site-nav">
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
    )
  }
});
      
module.exports = SiteNav;

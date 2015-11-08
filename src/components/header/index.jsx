var React = require('react');
var SiteNav = require('../site-nav');

var Header = React.createClass({
  render: function() {
    return (
      <header className="site-header">
        <SiteNav />
      </header>
    )
  }
});

module.exports = Header;

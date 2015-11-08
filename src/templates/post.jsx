var React = require('react');
var Site = require('../global/site.jsx');

var Page = React.createClass({
  render: function() {
    var myDate = 'no date';
    if (this.props.date) {
      myDate = this.props.date.toString();
    }
    return (
      <Site title={this.props.title}>
        <h2>Post: {this.props.title}</h2>
        <p>Date : {myDate}</p>
        <div dangerouslySetInnerHTML={{__html: this.props.contents}}></div>
      </Site>
    );
  }
});

module.exports = Page;

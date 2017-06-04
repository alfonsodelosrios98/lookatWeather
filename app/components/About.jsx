var React = require('react');

var About = (props) => {
  return (
    <div>
      <h3 className="text-center">About</h3>
      <p>This is a weather app built in react. Developed by lookat programming team on 2017.</p>
      <p>Built on June 2017, lookatWeather is built with different components:</p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react/"> React-Web </a> - This is the JS Framework for rendering.
        </li>
        <li>
          <a href="http://foundation.zurb.com"> Foundation Templates </a> - This is a framework for styling the page.
        </li>
        <li>
          <a href="openweathermap.org"> Open Weather Map </a> - Data API Provider.
        </li>
      </ol>
  </div>
  )
};

module.exports = About;

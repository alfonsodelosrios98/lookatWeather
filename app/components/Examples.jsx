var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div className="inner-section">
      <h1 className="text-center"> Don't know how to search?</h1>
      <p>Here are a few examples to try out</p>
      <ol>
        <li>
          <Link to='/?location=Monterrey'>Monterrey, MX</Link>
        </li>
        <li>
          <Link to='/?location=Guadalajara'>Guadalajara, MX</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;

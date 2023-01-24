import PropTypes from 'prop-types'

function Header({text}) {
  return (
    <>
    <header>
        <div className='container'>
            <h1>{text}</h1>
        </div>
    </header>
    </>
  );
}

Header.defaultProps = {
    text: 'Feedback UI',
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Header
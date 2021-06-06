import { Link } from 'react-router-dom';
import { matchPath, withRouter } from 'react-router';
import '../style/NavBar.css'


const ActiveNavigationBarOption = (props) => {
  return (
    <p className="Active-navigation-bar-option-text">
      {props.text}
    </p>
  )
}

const InactiveNavigationBarOption = (props) => {
  return (
    <p className="Inactive-navigation-bar-option-text">
      {props.text}
    </p>
  )
}

const NavigationBarOption = (props) => {
  return (
    <>
      <Link className="Navigation-bar-option-container" to={props.url}>
        {matchPath(props.path.split('/')[1], props.url.split('/')[1]) ?
          <ActiveNavigationBarOption text={props.text} /> :
          <InactiveNavigationBarOption text={props.text} />
        }
      </Link>
    </>
  )
}

const NavigationBar = (props) => {
  return (
    <div className="Navigation-bar-container">
      <div className="Navigation-bar-options-container">
        <NavigationBarOption text="About" url="/about" path={props.location.pathname}/>
        <NavigationBarOption text="Experience" url="/experience" path={props.location.pathname}/>
        <NavigationBarOption text="Projects" url="/projects" path={props.location.pathname}/>
      </div>
    </div>
  );
}

export default withRouter(NavigationBar)
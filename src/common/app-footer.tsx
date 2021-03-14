import './app-footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function AppMenu() {
  return (
    <div data-testid="container" className='app-footer'>
      <FontAwesomeIcon data-testid="icon" className="icon-github" icon={faGithub} onClick={() => window.open('https://github.com/olimungo/moviepolis', '_blank')} />
    </div>
  );
}
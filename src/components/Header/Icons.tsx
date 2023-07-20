import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Icons(): JSX.Element {
  return (
    <div className="icons">
      <a href="https://www.linkedin.com/in/anna-vekselman/" target="_blank"><LinkedInIcon /></a>
      <a href="https://github.com/Anveks" target="_blank"><GitHubIcon /></a>
    </div>
  );
}

export default Icons;
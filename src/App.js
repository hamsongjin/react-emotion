import logo from './assets/logo.svg';
import Container from './pages/Container';
import SignIn from './pages/SingIn';
import './style/css/App.css';
import './style/css/common.css';
import './style/css/reset.css';

function App() {
  return (
    <Container>
      <SignIn/>
    </Container>
  );
}

export default App;

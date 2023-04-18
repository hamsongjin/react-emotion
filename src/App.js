import './style/css/App.css';
import './style/css/reset.css';
import './style/css/style.css';
import './style/css/common.css';
import Container from './pages/Container';
import SignIn from './pages/SingIn';
import Main from './pages/Main';
import Header from './components/Header';
import { useState } from 'react';
// calendar
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <Container>
      {/* <SignIn/> */}
      <Header value={value} onChange={onChange}/>
      <Main value={value} onChange={onChange}/>
    </Container>
  );
}

export default App;

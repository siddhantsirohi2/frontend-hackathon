import LoginForm from './loginform';
import SignUpForm from './signUpform';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />


      </Routes>
      <Routes>
        <Route path='/header' element={<Header />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
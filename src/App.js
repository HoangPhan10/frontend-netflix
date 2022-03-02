import {Routes,Route} from 'react-router-dom'
import IntroducePage from './features/introduceNetflix/IntroducePage'
import LoginPage from './features/login/LoginPage';
import RegisterPage from './features/register/registerPage'
import IntroduceRoutes from './features/introduceNetflix/introduceRoutes'
function App() {
  return (
    <div>
          <Routes>
          <Route path="/" element={<IntroducePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          </Routes>
          <IntroduceRoutes/>
    </div>
  );
}

export default App;

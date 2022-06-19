import {Routes,Route} from 'react-router-dom'
import IntroducePage from './features/introduceNetflix/IntroducePage'
import LoginPage from './features/login/LoginPage';
import RegisterPage from './features/register/registerPage'
import IntroduceRoutes from './features/introduceNetflix/introduceRoutes'
import Browse from './features/browse/browse';
import RegisterPage2 from './components/pages/register/registerPage2/registerPage2';
import RegisterPage3 from './components/pages/register/registerPage3/registerPage3';
import BrowseRoute from './features/browse/browseRoute';
import Account from './components/pages/account/Account'
import Admin from './components/pages/admin/Admin'

function App() {
  return (
    <div>
          <Routes>
          <Route path="/" element={<IntroducePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/browse" element={<Browse/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/register2" element={<RegisterPage2/>} />
          <Route path="/register3" element={<RegisterPage3/>} />
          </Routes>
          <IntroduceRoutes/>
          <BrowseRoute/>
    </div>
  );
}

export default App;

import React from 'react';
import NavBar from './components/Navbar';
import "./App.css"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/SignIn'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home></Home>}>
    
    </Route> 
    <Route path='/signin' element={<Signin></Signin>}>
      
    </Route>
    <Route path='/signup' element={<Signup></Signup>}>
      
    </Route>
    <Route path='/profile' element={<Profile></Profile>}>
      
    </Route>
    <Route path='/create' element={<CreatePost></CreatePost>}>
      
    </Route>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   const user = "true";
//   return (
//     <>
//       <Router>
//         <div>
//         <Routes>
//             <Route path='/' element={user ? <Home/> : <Navigate to="Signin" />} />
//           </Routes>          
//           <Routes>
//             <Route path='/signin' element={user ? <Navigate to="/" />: <Signin/>} />
//           </Routes>
//         </div>
//       </Router>
//     </>

//   );
// }

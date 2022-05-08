import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/shared/Header/Header";
import Home from './components/pages/Home/Home';
import AddItems from './components/pages/AddItems/AddItems';
import AllItems from './components/pages/AllItems/AllItems';
import ManageItems from './components/pages/ManageItems/ManageItems';
import Blogs from './components/pages/Blogs/Blogs';
import About from './components/pages/About/About';
import Login from './components/pages/Logins/Login/Login';
import Register from './components/pages/Logins/Register/Register';
import NotFound from './components/pages/NotFound/NotFound';
import RequireAuth from './components/pages/Logins/RequireAuth/RequireAuth';
import Inventory from './components/pages/Inventory/Inventory';
import MyItems from './components/pages/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-items" element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>}></Route>
        <Route path="/all-items" element={
          <RequireAuth>
            <AllItems />
          </RequireAuth>}></Route>
        <Route path="/manage-items" element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>}></Route>
        <Route path="/my-items" element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>}></Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
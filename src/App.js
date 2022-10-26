import { 
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/partials/Navbar";
import Dashboard from "./components/pages/Dashboard"
import Home from "./components/pages/Home"
import Register from './components/pages/Register'
import Search from "./components/pages/Search"
import Login from './components/pages/Login'
import Teacher from './components/pages/Teacher'

function App() {
    return (
        <Router>
            <Navbar />
				<Routes>
					<Route 
						path="/" 
						element={<Home />} 
					/>

					<Route 
						path="/register" 
						element={<Register />}
					/>

					<Route 
						path="/login" 
						element={<Login />} 
					/>

					<Route
						path="/dashboard"
						element={<Dashboard />}
					/>

					<Route 
						path="/search" 
						element={<Search />}
					/>

					<Route
						path="/teacher/:id"
						element={<Teacher />}
					/>
				</Routes>
        </Router>
    );
}

export default App;

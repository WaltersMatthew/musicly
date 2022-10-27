import { 
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom"
import "./App.css"
import Navbar from "./components/partials/Navbar"
import Dashboard from "./components/pages/Teacher/Dashboard"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import StudentRegister from "./components/pages/Student/StudentRegister"
import Search from "./components/pages/Search"
import Teacher from "./components/pages/Teacher"
import TeacherRegister from "./components/pages/Teacher/TeacherRegister"
import Inquiry from "./components/pages/Student/Inquiry"

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
						path="/student/register" 
						element={<StudentRegister />}
					/>

					<Route 
						path="/teacher/register" 
						element={<TeacherRegister />}
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

					<Route
						path='/teacher/:id/inquiry'
						element={<Inquiry />}
					/>
				</Routes>
        </Router>
    );
}

export default App;

import { 
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom"
import "./App.css"
import Navbar from "./components/partials/Navbar"
import Dashboard from "./components/pages/Teacher/Dashboard"
import Home from "./components/pages/Home"
import StudentLogin from "./components/pages/Student/StudentLogin"
import StudentRegister from "./components/pages/Student/StudentRegister"
import Search from "./components/pages/Search"
import Teacher from "./components/pages/Teacher"
import TeacherLogin from "./components/pages/Teacher/TeacherLogin"
import TeacherRegister from "./components/pages/Teacher/TeacherRegister"

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
						path="/student/login" 
						element={<StudentLogin />} 
					/>

					<Route 
						path="/teacher/login" 
						element={<TeacherLogin />} 
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

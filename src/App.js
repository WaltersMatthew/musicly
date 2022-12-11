import { 
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom"
import { useState , useEffect} from 'react';
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
import Edit from "./components/pages/Teacher/Edit"
import Review from "./components/pages/Student/Review";

function App() {

	const [currentUser,setCurrentUser] =useState (null)
    // useEffect -- if the user navigates away form the page, we will log them back in
    useEffect(() => {
      // check to see if token is in storage
      const currentUserId = localStorage.getItem('id')
      if (currentUserId) {
        // if so, we will decode it and set the user in app state
        setCurrentUser(currentUserId)
      } else {
        setCurrentUser(null)
      }
      
    }, []) // happen only once
    // console.log(currentUser)

    return (
        <Router>
            <Navbar 
			currentUser={currentUser} setCurrentUser={setCurrentUser}/>
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
						path="/teacher/:id/dashboard"
						element={<Dashboard 
							currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />

					<Route 
						path="/search" 
						element={<Search />}
					/>

					<Route
						path="/teacher"
						element={<Teacher />}
					/>

					<Route
						path='/teacher/:id/inquiry'
						element={<Inquiry />}
					/>

					<Route
						path='/teacher/:id/review'
						element={<Review />}
					/>

					<Route
						path='/teacher/:id/edit'
						element={<Edit />}
					/>
				</Routes>
        </Router>
    );
}

export default App;

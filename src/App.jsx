import React from 'react'
import { useState } from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

const Home = () => <h1>Home</h1>;
const Projects = () => <h1>Projects</h1>;

function App() {
    const [count, setCount] = useState(0)

    return (
	<Router>
		<nav>
		    <Link to="/">Home</Link> | {" "}
		    <Link to="/projects">Projects</Link>
		</nav>
		<Routes>
		    <Route path="/" element={<Home />} />
		    <Route path="/projects" element={<Projects />} />
		</Routes>
		<div className="card">
		    <button onClick={() => setCount((count) => count + 1)}>
		    count is {count}
		    </button>
		</div>
	</Router>
    )
}

export default App

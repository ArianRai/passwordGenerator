import { useState } from 'react'
import './App.css'

function App() {

	// const [formData, setFormData] = useState(null)
	const handleForm = () => {
		
	}

  return (
    <>
     <div className="main">
		<form action="">
			<label>Output
			<input type="text" name="output"/>
			</label>
			<label htmlFor="lenght">Length</label>
			<input type="range" name="length" id="" />
			<input type="checkbox" name="" id="" />
			<input type="checkbox" name="" id="" />
			<input type="checkbox" name="" id="" />
			<input type="submit" value="Aiuda" />
		</form>
	 </div>
    </>
  )
}

export default App

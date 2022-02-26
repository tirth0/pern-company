import React, {useState} from 'react'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
//Component imports
import Home from './Components/Home/Home'
import Auth from './Components/Authentication/Auth'
import Nav from './Components/Navigation/Nav'
import Project from './Components/Project/Project'


function App() {
	const [colorScheme, setColorScheme] = useState('light');
	const toggleColorScheme = (value) =>
	setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
	<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
	<MantineProvider 
		theme={{ 
			colorScheme,
			fontFamily: 'Verdana, sans-serif',
			fontFamilyMonospace: 'Monaco, Courier, monospace',
			headings: { fontFamily: 'Greycliff CF, sans-serif' }, 
		}}
	>
		<div className="App"
		
			style = {{
				backgroundImage : colorScheme === 'dark'?"url('/dark.jpeg')":"url('/light.jpeg')",
				backgroundRepeat : "no-repeat",
				backgroundSize : "cover"
			}}
		>
			<Nav />
			<Routes>
				<Route path="/login" element={<Auth />} />
				<Route path="/" element={<Home />} />
				<Route path="/project" element={<Project/>}/>
			</Routes>
		</div>
	</MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import Presentation from "./components/presentation";
import LayoutWrapper from "./components/layoutWrapper";
import Page from "./pages/page";
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<main className="bg-gray-900 text-white">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App/>}/>

					<Route path="/presentation" element={
						<LayoutWrapper>
							<Presentation/>
						</LayoutWrapper>
					}>
						<Route path=":pageId" element={<Page/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</main>

	</React.StrictMode>,
	document.getElementById('root')
);

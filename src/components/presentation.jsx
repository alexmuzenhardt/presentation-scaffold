import React from 'react';
import {Outlet} from "react-router-dom";
import Stepper from "./stepper";

const Presentation = () => {
	return (
		<>
			<Outlet />
			<Stepper/>
		</>
	);
};

export default Presentation;

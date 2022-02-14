import {useState} from "react";

export function useStepper(initialState = []) {
	const [state, setState] = useState(initialState);

	const handlers = {
		handleStepper(step) {
			setState(prevState => {
				prevState.map(s => {
					if (s.id === step.id) {
						s.status = 'current'
					} else if (s.id < step.id) {
						s.status = 'complete';
					} else {
						s.status = 'upcoming';
					}

					return s;
				});

				return [...prevState]
			})
		}
	}

	return [state, handlers]
}

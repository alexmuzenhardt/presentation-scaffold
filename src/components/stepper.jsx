import {Link} from 'react-router-dom';
import {useStepper} from '../hooks/useStepper';

// complete, current, upcoming
const initialSteps = [
  {id: 1, name: 'Page 1', path: '1', status: 'current'},
  {id: 2, name: 'Page 2', path: '2', status: 'upcoming'},
  {id: 3, name: 'Page 3', path: '3', status: 'upcoming'},
];

export default function Stepper() {
  const [steps, {handleStepper}] = useStepper(initialSteps);

  return (
    <nav className="flex flex-col items-center bg-gray-900" aria-label="Progress">
      <ol role="list" className="flex items-center space-x-5">
        {steps.map((step) => (
          <li key={step.name} onClick={() => handleStepper(step)}>
            {step.status === 'complete' ? (
              <Link to={step.path} className="block w-2.5 h-2.5 bg-sky-600 rounded-full hover:bg-sky-900">
                <span className="sr-only">{step.name}</span>
              </Link>
            ) : step.status === 'current' ? (
              <Link to={step.path} className="relative flex items-center justify-center" aria-current="step">
                <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
                  <span className="w-full h-full rounded-full bg-sky-200" />
                </span>
                <span className="relative block w-2.5 h-2.5 bg-sky-600 rounded-full" aria-hidden="true" />
                <span className="sr-only">{step.name}</span>
              </Link>
            ) : (
              <Link to={step.path} className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
                <span className="sr-only">{step.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ol>

      <p className="mt-3 text-sm font-medium">
        Page {steps.findIndex((step) => step.status === 'current') + 1} of {steps.length}
      </p>
    </nav>
  );
}

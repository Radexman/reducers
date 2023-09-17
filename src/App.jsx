import { useState, useReducer } from 'react';

const ACTIONS = {
	INCREMENT: 'increment',
	DECREMENT: 'decrement',
};

const initialState = {
	count: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return { count: state.count + 1 };
		case ACTIONS.DECREMENT:
			return { count: state.count - 1 };
		default:
			state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [userInput, setUserInput] = useState('');
	const [color, setColor] = useState(false);

	return (
		<main
			className='App'
			style={{ color: color ? '#fff' : '#fff952' }}
		>
			<input
				type='text'
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
			/>
			<br />
			<br />
			<p>{state.count}</p>
			<section>
				<button
					type='button'
					onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
				>
					-
				</button>
				<button
					type='button'
					onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
				>
					+
				</button>
				<button
					type='button'
					onClick={() => setColor((prev) => !prev)}
				>
					Color
				</button>
			</section>
			<p>{userInput}</p>
		</main>
	);
};

export default App;

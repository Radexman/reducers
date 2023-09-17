import { useReducer } from 'react';

const ACTION = {
	INCREMENT: 'increment',
	DECREMENT: 'decrement',
	NEW_USER_INPUT: 'newUserInput',
	TOGGLE_COLOR: 'toggleColor',
};

const initialState = {
	count: 0,
	userInput: '',
	color: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTION.INCREMENT:
			return { ...state, count: state.count + 1 };
		case ACTION.DECREMENT:
			return { ...state, count: state.count - 1 };
		case ACTION.NEW_USER_INPUT:
			return { ...state, userInput: action.payload };
		case ACTION.TOGGLE_COLOR:
			return { ...state, color: !state.color };
		default:
			state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<main
			className='App'
			style={{ color: state.color ? '#fff' : '#fff952' }}
		>
			<input
				type='text'
				value={state.userInput}
				onChange={(e) => dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })}
			/>
			<br />
			<br />
			<p>{state.count}</p>
			<section>
				<button
					type='button'
					onClick={() => dispatch({ type: ACTION.DECREMENT })}
				>
					-
				</button>
				<button
					type='button'
					onClick={() => dispatch({ type: ACTION.INCREMENT })}
				>
					+
				</button>
				<button
					type='button'
					onClick={() => dispatch({ type: ACTION.TOGGLE_COLOR })}
				>
					Color
				</button>
			</section>
			<p>{state.userInput}</p>
		</main>
	);
};

export default App;

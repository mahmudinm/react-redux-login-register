const initialState = {
	isAuthenticated: false,
	loading: false,
	user: {},
	message: ''
};

const auth = (state = initialState, action = {}) => {
	switch(action.type) {
		case 'SET_LOGIN':
			return {
				isAuthenticated: true,
				loading: true,
				user: action.value
			}
		case 'SET_LOGOUT':
			return {
				isAuthenticated: false,
				user: null
			}
		case 'SET_REGISTER':
			return {
				...state,
				message: action.value
			}
		case 'SET_ADMIN':
			return {
				...state,
				message: action.value
			}
		default: return state;
	}
}

export default auth;
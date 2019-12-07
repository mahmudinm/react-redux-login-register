const initialState = {
	isAuthenticated: false,
	loading: false,
	user: {}
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
		default: return state;
	}
}

export default auth;
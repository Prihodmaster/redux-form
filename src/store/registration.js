const initialState = {
  username: '',
  password: '',
  email: '',
  photoSrc: ''
}

export default function RegReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_REG':
      return { ...state,
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
        photoSrc: action.payload.photoSrc
      }
    default:
      return state
  }
}

export const postReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          id: state.length,
          title: action.post.title,
          body: action.post.body,
        },
      ]

    case 'REMOVE_POST':
      return state.filter((post) => post.id !== action.id)

    default:
      return state
  }
}

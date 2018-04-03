const players = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          id: null,
          name: action.name,
          photo: action.photo
        }
      ];
    default:
      return state;
  }
};

export default players;
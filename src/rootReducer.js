const INITIAL_STATE = {
  memes: [],
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        memes: [
          ...state.memes,
          {
            id: action.payload.id,
            topText: action.payload.topText,
            bottomText: action.payload.bottomText,
            imgURL: action.payload.imgURL,
          },
        ],
      };
    case "DELETE":
      return {
        ...state,
        memes: state.memes.filter((meme) => meme.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default rootReducer;

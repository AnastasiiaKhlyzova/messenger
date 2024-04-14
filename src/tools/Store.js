const createStore = (reducer, initialState) => {
  const subscribers = [];
  let currentState = initialState;

  return {
    getState: () => currentState,
    subscribe: (fn) => {
      subscribers.push(fn);
      fn(currentState);
    },
    dispatch: (action) => {
      currentState = reducer(currentState, action);
      subscribers.forEach((fn) => fn(currentState));
    },
  };
};

const deepCopy = (object) => JSON.parse(JSON.stringify(object));

const reducer = (state, action) => {
  const newState = deepCopy(state);
  if (action.type === 'SET_TEXT') {
    console.log('SET_TEXT');
    newState.buttonText = action.buttonText;
    return newState;
  }

  if (action.type === 'SET_CHATS') {
    console.log('SET_CHATS');
    newState.chats = action.chats;
    return newState;
  }

  return state;
};

const state = {
  chats: [
    {
      id: 703,
      title: 'Захардкоженный чат',
      avatar: null,
      created_by: 69,
      unread_count: 2,
      last_message: {
        user: {
          first_name: 'Hfdbvgdg',
          second_name: 'D',
          display_name: null,
          login: 'pupupu',
          avatar: null,
        },
        time: '2024-04-13T11:12:11+00:00',
        content: 'хардкод из стора!',
        id: 361,
      },
    },
    {
      id: 697,
      title: 'Захардкоженный чат',
      avatar: null,
      created_by: 69,
      unread_count: 0,
      last_message: null,
    },
  ],
};

const setTextAction = {
  type: 'SET_TEXT',
  buttonText: '',
};

const store = Object.freeze(createStore(reducer, state));

export default store;

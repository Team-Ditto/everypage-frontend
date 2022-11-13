import { createContext, useReducer } from 'react';

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    userChats: [],
    chatId: null,
    user: null,
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER_CHATS':
        return {
          ...state,
          userChats: action.payload.chatRefs,
        };

      case 'CHANGE_USER':
        return {
          ...state,
          user: action.payload.userInfo,
          chatId: action.payload._id,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return <ChatContext.Provider value={{ data: state, dispatch }}>{children}</ChatContext.Provider>;
};

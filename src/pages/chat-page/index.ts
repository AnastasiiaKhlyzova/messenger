import {
  ProfileSettings, InputSearch, ChatSidebar, MessageUser, MessageList, InputMessage,
  Button,
  ChatItem,
} from '../../components';
import Block from '../../tools/Block';
import { submit } from '../../tools/formUtils';
import { ComponentsName } from '../../tools/validationRules';
import './chat-page.css';
import Router from '../../tools/Router';
import ChatPageRaw from './chat-page.hbs?raw';
import UserController from '../../controllers/user-controller';
import store from '../../tools/Store';

interface Props {
  [key: string]: unknown;
 }

 interface ChatItem {
  title: string;
  last_message: Record<string, string>
  unread_count: number;
 }

export class ChatPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      children: {

      },
      profile: [
        new ProfileSettings({
          className: 'profile-settings',
          navigate: () => {
            const router = new Router('app');
            router.go('/settings');
          },
        }),
      ],
      inputsearch: [
        new InputSearch({
          className: 'search-container',
        })],
      sidebar: new ChatSidebar({
        // eslint-disable-next-line max-len
        chatItems: (store.getState().chats as Array<ChatItem>).map((chat) => new ChatItem({ name: chat.title, lastMessage: chat.last_message?.content, unreadCount: chat.unread_count })),
        chats: store.getState().chats,
      }),
      user: [
        new MessageUser({
          userName: 'Петя',
        })],
      list: [
        new MessageList({})],
      inputmessage: [
        new InputMessage({ type: 'submit', submit, name: ComponentsName.MESSAGE })],
      button_primary:
        new Button({
          text: 'chatbutton',
          page: 'login',
          className: 'button-primary',
          type: 'button',
          createChat: (e) => {
            // UserController.createChats({ title: 'namechat' });
          },
          addUser: (e) => {
            UserController.addUsersToChat({
              users: [
                83,
              ],
              chatId: 703,
            });
          },
          id: 'chat-button',
        }),
      button_info:
        new Button({
          text: 'info',
          page: 'login',
          className: 'button-primary',
          type: 'button',
          getInfo: () => {
            UserController.getUserInfo();
          },

          id: 'chat-button',
        }),
      button_token:
        new Button({
          text: 'token',
          page: 'login',
          className: 'button-primary',
          type: 'button',
          getToken: () => {
            UserController.ChatTokenId(703);
          },

          id: 'chat-button',
        }),

    });
  }

  override render() {
    return ChatPageRaw;
  }

  async componentDidMount() {
    const chats = await UserController.getUsersChats();
    store.dispatch({
      type: 'SET_CHATS',
      chats,
    });
    // eslint-disable-next-line max-len
    this.children.sidebar.setProps({ chatItems: (chats as Array<ChatItem>).map((chat) => new ChatItem({ name: chat.title, lastMessage: chat.last_message?.content, unreadCount: chat.unread_count })) });
  }

  componentDidUpdate(oldProps, newProps) {
    if (oldProps.chatItems !== newProps.chatItems) {
      console.log('zashel');
      this.children.sidebar.setProps({ chatItems: newProps.chatItems });
    }
    return true;
  }
}

import Block, { Props } from '../../tools/Block';
import { ChatItem } from '../chat-item';
import './chat-sidebar.css';
import store from '../../tools/Store';

import ChatSidebarRaw from './chat-sidebar.hbs?raw';

interface Props {
  [key: string]: unknown;
 }

 interface ChatItem {
  title: string;
  last_message: Record<string, string>
  unread_count: number;
 }

export class ChatSidebar extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: () => console.log('click'),
      },
      // eslint-disable-next-line max-len
      chatItems: props.chatItems,
    });
  }

  // render() {
  //   return ChatSidebarRaw;
  // }

  render() {
    return `
    <aside class="chat-sidebar">
      {{{ chatItems }}}
    </aside>
`;
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    console.log('hello', oldProps, newProps);

    if (oldProps.chatItems !== newProps.chatItems) {
      // eslint-disable-next-line max-len
      this.setProps({ chatItems: newProps.chatItems });
    }
    return true;
  }
}

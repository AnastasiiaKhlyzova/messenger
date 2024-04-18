import { StringDecoder } from "string_decoder";
import Block from "./Block";
import EventBus from "./EventBus";
import { isEqual, set } from "./helpers";
import MyWebSocket from "./webSocket";

export enum StoreEvents {
  Updated = "updated",
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string;
  email: string;
}

export interface ChatInfo {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message?: {
    user: User;
    time: string;
    content: string;
  };
}

export interface Message {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}

export interface State {
  user: User;
  chats: ChatInfo[];
  // messages?: Record<number, Message[]>;
  findedUsers?: User[];
  selectUser?: number;
  messages?: Message[];
  currentChat?: number;
  currentChatToken?: string;
  currentSocket?: MyWebSocket;
  usersSearchResult?: SearchAddUser[];
  usersInCurrentChat?: User[];
}
export interface SearchAddUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name?: string;
  login: string;
  avatar?: string;
}
export class Store extends EventBus {
  private state: State = {
    user: {} as User,
    chats: [],
  };

  public getState() {
    return this.state;
  }

  public dispatch(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

const store = new Store();

export const withStore =
  (mapStateToProps: (state: State) => any) => (Comp: typeof Block) => {
    const oldState = mapStateToProps(store.getState());
    return class extends Comp {
      constructor(props: any) {
        super({ ...props, ...mapStateToProps(store.getState()) });

        store.on(StoreEvents.Updated, () => {
          console.log("STORE_ON");
          const newState = mapStateToProps(store.getState());
          if (!isEqual(oldState, newState)) {
            this.setProps({ ...mapStateToProps(store.getState()) });
          }
        });
      }
    };
  };

export default store;

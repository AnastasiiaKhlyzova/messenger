import Block from '../../tools/Block';
import './button.css';

import ButtonRaw from './button.hbs?raw';

interface Props {
  [key: string]: unknown;
 }
export class Button extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: (e: SubmitEvent) => {
          e.preventDefault();

          if (props.submit) {
            const submit = props.submit as (event: SubmitEvent) => void;
            submit(e);
          }
          if (props.navigate) {
            const navigate = props.navigate as () => void;
            navigate();
          }
          if (props.createChat) {
            const createChat = props.createChat as () => void;
            createChat();
          }
          if (props.logout) {
            const logout = props.logout as () => void;
            logout();
          }
          if (props.addUser) {
            const addUser = props.addUser as () => void;
            addUser();
          }
          if (props.getInfo) {
            const getInfo = props.getInfo as () => void;
            getInfo();
          }
          if (props.getToken) {
            const getToken = props.getToken as () => void;
            getToken();
          }
        },
      },

    });
  }

  render() {
    return ButtonRaw;
  }
}

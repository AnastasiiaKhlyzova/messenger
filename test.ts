function Button(props) {
  //obrabotchick events click
  if (props.click) {
    const click = props.click;
    click();
  }
}

function SearchUserItem(props) {
  // same const id = props.id; const handler = props.handler;
  const { id, handler } = props;

  const button = new Button({ id: id, click: handler });
}

function ModalDelete(props) {
  const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const renderedUserds = users.map(user => {
    const handler = () => {
      console.log("zapros na backend ot polzovatela s id", user.id);
    };
    new SearchUserItem({ id: user.id, handler: handler });
  });
}
//пропс-дриллинг - я из компонента родителя ModalDelete в ребенка SearchUserItem прокинул хендер который его переименовал и
//прокинул  в своего ребенка Button

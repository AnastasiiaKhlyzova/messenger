interface PropsButton {
  onClick: () => void;
}

function Button(props: PropsButton) {
  //obrabotchick events click
  const { onClick } = props;
  onClick();
}

interface PropsSearchUserItem {
  id: number;
  handler333: () => void;
}

function SearchUserItem(props: PropsSearchUserItem) {
  // same const id = props.id; const handler = props.handler;

  const button = new Button({ onClick: props.handler333 });
}

function ModalDelete(props) {
  const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const renderedUserds = users.map(user => {
    const handler = () => {
      console.log("zapros na backend ot polzovatela s id", user.id);
    };

    new SearchUserItem({ id: user.id, handler333: handler });
  });
}
//пропс-дриллинг - я из компонента родителя ModalDelete в ребенка SearchUserItem прокинул хендер который его переименовал и
//прокинул  в своего ребенка Button

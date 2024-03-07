import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages = {
  'chat': [ Pages.ChatPage ],
  'login': [ Pages.LoginPage ],
  '500-error' : [ Pages.Error500Page],
  '404-error' : [ Pages.Error404Page],
  'registration' : [ Pages.RegistrationPage ],
  'settings' : [ Pages.SettingsPage ]
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page) {
  const [ source, args ] = pages[page];
  const handlebarsFunct = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunct(args);
}

window.navigate = navigate;

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const changePasswordBtn = document.getElementById('changePasswordBtn');
  const settingsPasswordDiv = document.querySelector('.settings-password');

  changePasswordBtn?.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    
    if (settingsPasswordDiv.style.display === 'none' || settingsPasswordDiv.style.display === '') {
      settingsPasswordDiv.style.display = 'flex';
    } else {
      settingsPasswordDiv.style.display = 'none';
    }
  });
});


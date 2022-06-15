// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' alt='logo' />
      </header>
      <nav className='nav'>
        <div>
          <a href='#1'>
            Profile
          </a>
        </div>
        <div>
          <a href='#1'>
            Messages
          </a>
        </div>
        <div>
          <a href='#1'>
            News
          </a>
        </div>
        <div>
          <a href='#1'>
            Music
          </a>
        </div>
        <div>
          <a href='#1'>
            Settings
          </a>
        </div>
      </nav>
      <div className="profile">
        <img src='https://media.istockphoto.com/photos/the-picturesque-mountain-landscape-on-the-sunset-background-picture-id1327276218?b=1&k=20&m=1327276218&s=170667a&w=0&h=j_6Bu9P8PvHu8wQvtAyxUpfBeO189peY4F1C086_7lU=' />
        <div>
          pic + details
        </div>
        <div>
          My posts
          <div>
            new post
          </div>
          <div>
            first post
          </div>
          <div>
            second post
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

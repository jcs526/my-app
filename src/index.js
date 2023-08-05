import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseState from './UseState';
import ListItems from './ListItems';
import TicTacToc from './ticTacToc/ticTacToc.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Welcome(props) {
  return <h1>Hello,{props.name}</h1>
}

class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello,{this.props.name}</h1>
  }
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return <div className="UserInfo">
    <Avatar user={props.user} />
    <div className="UserInfo-name">
      {props.user.name}
    </div>
  </div>
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

const Comment = (props) => {
  return (<div className="Comment">
    <UserInfo user={props.author} />
    <div className="Comment-text">
      {props.text}
    </div>
    <div className="Comment-date">
      {formatDate(props.date)}
    </div>
  </div>)
}


const tick = () => {

  const element = (
    <div>
      <Welcome name="function" />
      <WelcomeClass name="class" />
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <App />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author} />
      <UseState></UseState>
      <ListItems></ListItems>
      <TicTacToc></TicTacToc>
    </div>
  );
  root.render(element);
};

setInterval(tick, 1000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

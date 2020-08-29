import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  // Icon,
  Input,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Message from "./Message";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

// Code start here
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    // const name = prompt(`Please enter your name.`);
    setUsername(prompt(`Please enter your name.`));
  }, []);

  console.log(input);
  console.log(messages);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img src="https://lh3.googleusercontent.com/39g2e5o5TD1x0hC9NfDE7tsJLA9MY-3ny80fIJE1sT9SvBNNlC__z2jSqx3q56pMUg" />
      <h2>Chat Box 🚀 </h2>
      <p className="author">made by © Supriyo Ghosh</p>
      <h4>Welcome {username} 😃 </h4>

      <form className="app__form">
        <FormControl className="app__formControl">
          {/**<InputLabel>Enter a message...</InputLabel>*/}
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;

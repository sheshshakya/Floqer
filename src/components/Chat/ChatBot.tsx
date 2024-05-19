import { useState } from "react";
import styles from "./ChatBot.module.css";

const ChatBot = () => {
  const [input, setInput] = useState("");
  // const [response, setResponse] = useState("");
  const response = ""
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={styles['chat-container']}>
      <h6 className="domine-font text-success mb-3">Task 3: Chat Bot</h6>
      <form className={styles["chat-form"]}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about the data"
          className="form-control mb-3 p-3"
        />
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
      <div className={styles["chat-response"]}>
        <h6>Response:</h6>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatBot;

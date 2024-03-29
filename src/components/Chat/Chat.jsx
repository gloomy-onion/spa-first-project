import React from "react";
import styles from "./Chat.module.css";
import ChatItem from "./ChatItem/ChatItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  required,
} from "../../helpers/validators/validators";
import Button from "../common/Button/Button";

const Chat = (props) => {
  const { messageContent, dialogueInfo, sendMessage } = props;

  const addNewMessage = (values) => {
    sendMessage(values.newMessageBody);
  };

  return (
    <div className={styles.dialogues}>
      <div className={styles.dialoguesItems}>
        <div className={styles.dialogue}>
          {dialogueInfo.map((dialogue, index) => {
            return (
              <ChatItem
                  key={index}
                to={dialogue.to}
                userName={dialogue.userName}
                id={dialogue.id}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.messages}>
        {messageContent.map((text, index) => {
          return <Message key={index} messageText={text.messageText} />;
        })}
        <div>
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

const maxLength60 = maxLengthCreator(60);

let AddMessageForm = (props) => {
  const { handleSubmit, reset } = props;
  const onSubmit = (data) => {
    handleSubmit(data);
    reset()
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength60]}
          name={"newMessageBody"}
          placeholder={"Enter your message"}
        />
      </div>
      <div>
        <Button text={"Send"} />
      </div>
    </form>
  );
};

AddMessageForm = reduxForm({ form: "chatAddMessageForm" })(AddMessageForm);

export default Chat;

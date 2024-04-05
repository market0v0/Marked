// handlers.ts
import {  message as antdMessage } from 'antd'
export const onQuestionChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setQuestion: React.Dispatch<React.SetStateAction<string>>,
  MAX_QUESTION_LENGTH: number
): void => {
  const value = e.target.value
  if (value.length <= MAX_QUESTION_LENGTH) {
   
    setQuestion(value)
  }
  else{
    void antdMessage.error('Max out Characters')
    return
  }
}

export const onMessage1Change = (
  e: React.ChangeEvent<HTMLInputElement>,
  setMessage1: React.Dispatch<React.SetStateAction<string>>,
  MAX_MESSAGE_LENGTH: number
): void => {
  const value = e.target.value
  if (value.length <= MAX_MESSAGE_LENGTH) {
    setMessage1(value)
  }
  else{
    void antdMessage.error('Max out Characters')
    return
  }
}



export const onMessage2Change = (
  e: React.ChangeEvent<HTMLInputElement>,
  setMessage2: React.Dispatch<React.SetStateAction<string>>,
  MAX_MESSAGE_LENGTH: number
): void => {
  const value = e.target.value
  if (value.length <= MAX_MESSAGE_LENGTH) {
  
    setMessage2(value)
  }
  else{
    void antdMessage.error('Max out Characters')
    return
  }
  
}


export const onSenderChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setSender: React.Dispatch<React.SetStateAction<string>>,
  MAX_MESSAGE_LENGTH: number
): void => {
  const value = e.target.value
  if (value.length <= MAX_MESSAGE_LENGTH) {
    setSender(value)
  }
  else{
    void antdMessage.error('Max out Characters')
    return
  }
}

export const onRecipientChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setReciptient: React.Dispatch<React.SetStateAction<string>>,
  MAX_MESSAGE_LENGTH: number
): void => {
  const value = e.target.value
  if (value.length <= MAX_MESSAGE_LENGTH) {
    setReciptient(value)
  }
  else{
    void antdMessage.error('Max out Characters')
    return
  }
}

export function onLongMessageChange(
  e: any,
  setLongMessage: React.Dispatch<React.SetStateAction<string>>,
  MAX_MESSAGE_LENGTH: number
){
  const value = e
  if (value.length <= MAX_MESSAGE_LENGTH) {
    setLongMessage(value)
  }
  else{
    void antdMessage.error('Max out Characters')
    return
  }
}



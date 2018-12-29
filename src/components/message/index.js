import React from 'react'
import * as S from './styles'

const Message = ({ emoji, text }) => (
  <S.Message>
    <S.MessageEmoji>{emoji}</S.MessageEmoji>
    <div>{text}</div>
  </S.Message>
)

export default Message

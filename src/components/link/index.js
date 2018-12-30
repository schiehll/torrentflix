import React from 'react'
import * as S from './styles'

const Link = ({ children, ...props }) => <S.Link {...props}>{children}</S.Link>

export default Link

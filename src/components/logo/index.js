import React from 'react'
import Link from 'components/link'
import * as S from './styles'

const Logo = () => (
  <Link to="/">
    <S.Logo>
      <S.Emoji>🍿</S.Emoji> torrentflix
    </S.Logo>
  </Link>
)

export default Logo

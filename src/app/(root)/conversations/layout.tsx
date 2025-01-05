import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{}>

const ConversationsLayout = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}
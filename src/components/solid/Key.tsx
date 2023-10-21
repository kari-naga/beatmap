import type { Component } from 'solid-js'

import type { Note } from '@/utils/note'

interface Props {
  note: Note
  keyboardWidth: string
  numWhiteKeys: number
}

const Key: Component<Props> = (props) => {
  return (
    <div
      class="relative float-left h-full pt-2 border-2 border-gray-300"
      classList={{
        'bg-white text-black': !props.note.isBlack,
        'bg-black text-white': props.note.isBlack
      }}
      style={{
        width: '10rem'
      }}
    >
      <p class="absolute">{props.note.names[0]}</p>
    </div>
  )
}

export default Key

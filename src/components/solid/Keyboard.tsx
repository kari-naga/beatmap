import type { Component } from 'solid-js'
import { mergeProps, For } from 'solid-js'

import { notes } from '@/utils/note'
import Key from '@/components/solid/Key'

interface Props {
  height?: string
  width?: string
  startingNote?: string
  endingNote?: string
}

const Keyboard: Component<Props> = (passedProps) => {
  const props = mergeProps(
    { height: '10rem', width: '90vw', startingNote: 'A0', endingNote: 'B1' },
    passedProps
  )

  const selectedNotes = notes.slice(
    notes.findIndex((note) => note.names.includes(props.startingNote)),
    notes.findIndex((note) => note.names.includes(props.endingNote)) + 1
  )

  const numWhiteKeys = selectedNotes.reduce(
    (acc, note) => acc + (note.isBlack ? 0 : 1),
    0
  )

  return (
    <div
      class='overflow-clip'
      style={{ height: props.height, width: props.width }}
    >
      <For each={selectedNotes}>
        {(note) => (
          <Key
            note={note}
            keyboardWidth={props.width}
            numWhiteKeys={numWhiteKeys}
          />
        )}
      </For>
    </div>
  )
}

export default Keyboard

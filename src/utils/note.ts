export type Note = {
  names: string[]
  isBlack: boolean
  keyNumber: number
  midiNumber: number
  frequnecy: number
}

export const notes: Note[] = [
  {
    names: ['A0'],
    isBlack: false,
    keyNumber: 1,
    midiNumber: 21,
    frequnecy: 27.5,
  },
  {
    names: ['A#0', 'Bb0'],
    isBlack: true,
    keyNumber: 2,
    midiNumber: 22,
    frequnecy: 29.13524,
  },
  {
    names: ['B0'],
    isBlack: false,
    keyNumber: 3,
    midiNumber: 23,
    frequnecy: 30.86771,
  },
  {
    names: ['C1'],
    isBlack: false,
    keyNumber: 4,
    midiNumber: 24,
    frequnecy: 32.7032,
  },
  {
    names: ['C#1', 'Db1'],
    isBlack: true,
    keyNumber: 5,
    midiNumber: 25,
    frequnecy: 34.64783,
  },
  {
    names: ['D1'],
    isBlack: false,
    keyNumber: 6,
    midiNumber: 26,
    frequnecy: 36.7081,
  },
  {
    names: ['D#1', 'Eb1'],
    isBlack: true,
    keyNumber: 7,
    midiNumber: 27,
    frequnecy: 38.89087,
  },
  {
    names: ['E1'],
    isBlack: false,
    keyNumber: 8,
    midiNumber: 28,
    frequnecy: 41.20344,
  },
  {
    names: ['F1'],
    isBlack: false,
    keyNumber: 9,
    midiNumber: 29,
    frequnecy: 43.65353,
  },
  {
    names: ['F#1', 'Gb1'],
    isBlack: true,
    keyNumber: 10,
    midiNumber: 30,
    frequnecy: 46.2493,
  },
  {
    names: ['G1'],
    isBlack: false,
    keyNumber: 11,
    midiNumber: 31,
    frequnecy: 48.99943,
  },
  {
    names: ['G#1', 'Ab1'],
    isBlack: true,
    keyNumber: 12,
    midiNumber: 32,
    frequnecy: 51.91309,
  },
  {
    names: ['A1'],
    isBlack: false,
    keyNumber: 13,
    midiNumber: 33,
    frequnecy: 55.0,
  },
  {
    names: ['A#1', 'Bb1'],
    isBlack: true,
    keyNumber: 14,
    midiNumber: 34,
    frequnecy: 58.27047,
  },
  {
    names: ['B1'],
    isBlack: false,
    keyNumber: 15,
    midiNumber: 35,
    frequnecy: 61.73541,
  },
]

import type { JSXElement } from 'solid-js'

interface Props {
  onClick: () => void
  class?: string
  children?: JSXElement
}

export default function Switch(props: Props) {
  return (
    <label class={`relative inline-block w-[60px] h-[34px] ${props.class}`}>
      <input
        type="checkbox"
        title="Select Theme"
        onClick={props.onClick}
        class="opacity-0 w-0 h-0 [&:checked+span]:bg-cyan-400 [&:checked+span]:before:translate-x-[26px]"
      />
      <span class="absolute cursor-pointer inset-0 rounded-[34px] bg-gray-400 transition-all duration-500 before:absolute before:w-[26px] before:h-[26px] before:left-[4px] before:bottom-[4px] before:rounded-full before:bg-white before:z-10 before:transition-all before:duration-500" />
      <div class="absolute inset-0 flex items-center justify-evenly w-full h-full text-lg text-black">
        {props.children}
      </div>
    </label>
  )
}

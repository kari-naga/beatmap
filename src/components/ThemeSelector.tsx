import { createSignal, createEffect } from 'solid-js'
import Switch from './Switch'
import IconSun from '~icons/ph/sun'
import IconMoon from '~icons/ph/moon'

interface Props {
  class?: string
}

export default function Counter(props: Props) {
  const [theme, setTheme] = createSignal(window.localStorage.getItem('theme') ?? 'dark')

  createEffect(() => {
    if (theme() === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    window.localStorage.setItem('theme', theme())
  })

  return (
    <Switch class={props.class} onClick={() => setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))}>
      <IconMoon />
      <IconSun />
    </Switch>
  )
}

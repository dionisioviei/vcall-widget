import { ref, watch } from 'vue'

export type ColorScheme = 'light' | 'dark'

const colorScheme = ref<ColorScheme>(
  (localStorage.getItem('color_scheme') as ColorScheme) || 'light'
)

export function useColorScheme() {
  function setColorScheme(scheme: ColorScheme) {
    colorScheme.value = scheme
    localStorage.setItem('color_scheme', scheme)
  }

  function toggleColorScheme() {
    const newScheme = colorScheme.value === 'dark' ? 'light' : 'dark'
    setColorScheme(newScheme)
  }

  watch(colorScheme, (newScheme) => {
    localStorage.setItem('color_scheme', newScheme)
  })

  return {
    colorScheme,
    setColorScheme,
    toggleColorScheme
  }
}

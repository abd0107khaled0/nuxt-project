// composables/useCustomTheme.js
export function useCustomTheme() {
  const { $vuetify } = useNuxtApp()

  const isDark = useDark({
    valueDark: 'dark',
    valueLight: 'light',
    initialValue: 'light',
    onChanged: (dark) => {
      $vuetify.theme.global.name.value = dark ? 'dark' : 'light'
    },
  })

  const toggle = useToggle(isDark)

  return { isDark, toggle }
}

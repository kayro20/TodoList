export function someMutation (state) {
  console.log(state)
  localStorage.setItem('isDarkMode', state.darkMode)
}

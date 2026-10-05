export const formatDuration = (mins: number) => {
  const hours = Math.floor(mins / 60)
  const rest = mins % 60
  if (hours === 0) return `${rest} min`
  return rest === 0 ? `${hours} hr` : `${hours} hr ${rest} min`
}

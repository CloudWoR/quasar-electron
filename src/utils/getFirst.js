export default function getFirst (obj) {
  for (const key in obj) {
    return obj[key]
  }
}

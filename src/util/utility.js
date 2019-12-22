const IMAGE_EXTENSIONS = [
  'png', 'jpg', 'jpeg', 'gif'
]

const VIDEO_EXTENSIONS = [
  'mp4'
]

// Takes path or url as argument
const getExtension = (path) => {
  const lastDotIndex = path.lastIndexOf('.')
  if (!lastDotIndex) { return }

  return path.substring(lastDotIndex + 1, path.length).toLowerCase()
}

const isImageExtension = (extension) => {
  return IMAGE_EXTENSIONS.includes(extension)
}

const isVideoExtension = (extension) => {
  return VIDEO_EXTENSIONS.includes(extension)
}

const getViewportWidth = () => {
  // Gets value equal to value checked by `@media (width)`
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export {
  IMAGE_EXTENSIONS, VIDEO_EXTENSIONS, getExtension,
  isVideoExtension, isImageExtension, getViewportWidth,
  scrollToTop
}

const iframe = document.getElementById('kazwireFrame')
const params = new URLSearchParams(window.location.search)

const searchQuery = params.get('fname')
iframe.src = searchQuery
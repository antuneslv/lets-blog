const modal = document.getElementById('modal')
const openBtn = document.getElementById('open-modal')
const closeBtn = document.getElementById('close-modal')

openBtn?.addEventListener('click', () => {
  modal.showModal()
})

closeBtn?.addEventListener('click', () => {
  modal.close()
})

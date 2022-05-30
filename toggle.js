const toggle = document.querySelector('.toggle input')

toggle.addEventListener('click', () => {
    const Switch = toggle.parentNode.querySelector('.switch')
    Switch.textContent = toggle.checked ? 'Open for everybody' : 'Only for members'
})
import './styles.scss'

export class ByeWorldButton {
  render () {
    const button = document.createElement('button')
    button.innerHTML = 'Bye world'

    button.classList.add('bye-world-button')

    const body = document.querySelector('body')

    button.onclick = () => {
      const p = document.createElement('p')
      p.innerHTML = 'Bye World'
      p.classList.add('bye-world-text')

      body.appendChild(p)
    }
    body.appendChild(button)
  }
}
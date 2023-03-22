import './styles.css'

export class HelloWorldButton {
  p_class = 'hello-world-text'

  render () {
    const button = document.createElement('button')
    button.innerHTML = 'Hello world'

    button.classList.add('hello-world-button')

    const body = document.querySelector('body')

    button.onclick = () => {
      const p = document.createElement('p')
      p.innerHTML = 'Hello World'
      p.classList.add(this.p_class)

      body.appendChild(p)
    }
    body.appendChild(button)
  }
}
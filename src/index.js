import { HelloWorldButton } from './components/hello-world-button';
import { ByeWorldButton } from './components/bye-world-button';
import { addImage } from './add-image.js'

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()

addImage()

const byeWorldButton = new ByeWorldButton()
byeWorldButton.render()

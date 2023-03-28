import { HelloWorldButton } from './components/hello-world-button';
import { addImage } from './add-image.js'
import { Heading } from './components/heading';
import _ from 'lodash'

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()

addImage()

const heading = new Heading()
heading.render(_.upperCase('Hello World'))

if(process.env.NODE_ENV === 'production') {
  console.log('Production mode')
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode')
}

helloWorldButton.methodThatDoesNotExist()

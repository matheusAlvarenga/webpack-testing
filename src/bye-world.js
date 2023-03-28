import { ByeWorldButton } from './components/bye-world-button';
import { Heading } from './components/heading';
import _ from 'lodash'

const byeWorldButton = new ByeWorldButton()
byeWorldButton.render()

const heading = new Heading()
heading.render(_.upperCase('Bye World'))
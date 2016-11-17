import React from 'react'
import {render} from 'enzyme'
import {renderToJson} from 'enzyme-to-json'
import App from './App'

test('should render just fine', () => {
  const component = render(<App />)

  expect(renderToJson(component)).toMatchSnapshot()
})

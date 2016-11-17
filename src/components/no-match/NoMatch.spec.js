import React from 'react'
import {render} from 'enzyme'
import {renderToJson} from 'enzyme-to-json'
import NoMatch from './NoMatch'

test('should render just fine', () => {
  const component = render(<NoMatch />)

  expect(renderToJson(component)).toMatchSnapshot()
})

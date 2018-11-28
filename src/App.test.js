import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

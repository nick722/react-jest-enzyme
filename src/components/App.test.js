import React from 'react';
// import * as Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import App from './App';

// configure({adapter: new Adapter()});

const app = shallow(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});


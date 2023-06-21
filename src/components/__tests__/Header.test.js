// Unit Testing Example

import { render } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';

test('Logo should load on rendering header', () => {

    // Load Header
    const header = render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>);
    // console.log('Header ===>', header);

    // Check if logo is loaded
    const logo = header.getAllByTestId('logo')[0];
    // console.log('Logo ===>', logo);

    expect(logo.src).toBe('http://localhost/dummy.png');

});

test('Online Status should be green on rendering header', () => {

    const header = render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>);
    const onlineStatus = header.getByTestId('online-status');
    expect(onlineStatus.style.backgroundColor).toBe('green');

});
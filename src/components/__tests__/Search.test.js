import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Body from '../Body';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';
import { RESTAUARNT_DATA } from '../../mocks/restaurantData';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAUARNT_DATA);
        }
    })
});

// test('Shimmer should load on homepage', () => {
//     const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
//     const shimmer = body.getByTestId('shimmer');
//     expect(shimmer).toBeInTheDocument();
// });

// test('Restaurant should load on homepage', async () => {
//     const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
//     await waitFor(() => expect(body.getByTestId('search-btn')));
//     const restList = body.getByTestId('rest-list');
//     expect(restList?.children?.length).toBe(15);
// });

// test('Search for string(food) on homepage', async () => {
//     const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
//     await waitFor(() => expect(body.getByTestId('search-btn')));
//     const searchInput = body.getByTestId('search-input');

//     fireEvent.change(searchInput, {
//         target: {
//             value: 'Kafe'
//         }
//     });

//     const searchBtn = body.getByTestId('search-btn');
//     fireEvent.click(searchBtn);

//     const restList = body.getByTestId('rest-list');
//     expect(restList?.children?.length).toBe(1);
// });
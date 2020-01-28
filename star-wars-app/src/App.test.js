import React from 'react';
import { render } from '@testing-library/react';
import App from './App'

test('renders app with logo', () => {
   const  {getByAltText, getByText} = render(<App />);

    getByAltText(/logo/i)
   
 });


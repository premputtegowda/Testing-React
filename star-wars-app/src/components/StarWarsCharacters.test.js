import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';





jest.mock('../api')

test('renders with previous and next buttons', () => {
 
    const {getByText} = render(<StarWarsCharacters />);

    const previousBtn = getByText(/previous/i)

   const nextBtn = getByText(/next/i)

 });


 test('api test', () => {
     mockGetData({count:80, next: "nextUrl", previous:"previousUrl", results: [name:"bob"]})
    const {getByText} = render(<StarWarsCharacters />);
    const nextButton = getByText(/next/i)

    fireEvent.click(nextButton);
    expect(mockGetData).toHaveBeenCalledTimes(1);

 })
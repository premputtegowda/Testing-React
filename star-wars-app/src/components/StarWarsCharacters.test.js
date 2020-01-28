import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';





jest.mock('../api')

test('renders with previous and next buttons',() => {
    
    const {getByText} = render(<StarWarsCharacters />);

    const previousBtn = getByText(/previous/i)

   const nextBtn = getByText(/next/i)

 });

 test('initial api loads', async () => {
    const testData = 
       {count:80, next: "nextUrl", previous:null, results: [{name:"george"}]}
       mockGetData.mockResolvedValueOnce(testData);
       const {getByText} = render(<StarWarsCharacters />);
       
  
   
   wait(() => expect(getByText(/george/i)));
})



 test('api loads after next btn is clicked', async () => {
    const testData = 
       {count:80, next: "nextUrl", previous:"previousUrl", results: [{name:"bob"}]}
       mockGetData.mockResolvedValueOnce(testData);
       const {getByText} = render(<StarWarsCharacters />);
       const nextButton = getByText(/next/i)
   fireEvent.click(nextButton);
   
   wait(() => expect(getByText(/bob/i)));
})
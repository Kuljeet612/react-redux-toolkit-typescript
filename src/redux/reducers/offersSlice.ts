import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { OFFERS_URL, LOADING, SUCCESS, FAILED } from '../../constants';

interface OffersState {
  items: []
  status: 'loading' | 'success' | 'failed'
}

const initialState = {
  items: [],
  status: 'loading',
} as OffersState


export const getOffers: any = createAsyncThunk(
  'offers/getOffers',
  async () => {    
    const response = await fetch(OFFERS_URL);
    if (response.ok) {
      const offers = await response.json();      
      return offers.offers;
    } else {
      const error: any = new Error(
        `Error ${response.status}: ${response.statusText}`
      );
      error.response = response;
      throw error;
    }
  }
);


export interface Offer {
  id: string;
  name: string;  
  price: number;
  imgURL: string;
}

const offerSlice = createSlice({
  name: 'offers',
  initialState,
  reducers:{},
  extraReducers: {
    [getOffers.pending]: (state: any, action: any) => {
      console.log('fetching offers...');
      state.status = LOADING;      
    },
    [getOffers.fulfilled]: (state: any, action: any) => {
      console.log('fetched offers successfully');
      state.items = action.payload;
      state.status = SUCCESS;      
    },
    [getOffers.rejected]: (state: any, action: any) => {
      console.log('error fetching offers');
      state.status = FAILED;      
    }
  }
});

export default offerSlice.reducer;
export const getLoadingState = (state:RootState) => state.offers.status
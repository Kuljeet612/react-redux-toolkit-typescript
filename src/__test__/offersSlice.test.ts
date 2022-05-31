import offersSlice, { getOffers } from '../redux/reducers/offersSlice';

describe('Testing getOffers', () => {
    interface OffersState {
        items: []
        status: 'loading' | 'success' | 'failed'
    }

    const initialState = {
        items: [],
        status: 'loading',
    } as OffersState

    it('should handle slice getOffers fulfilled', async () => {
        const action = getOffers.fulfilled({
            items: [
                { id: '2436432a-e1d5-4649-bece-f98834f6ee1d-SDMR', name: 'Audi A3 Sedan', price: 209.96},
                { id: '2436432a-e1d5-4649-bece-f98834f6ee1d-FWMR', name: 'Audi A4 Avant', price: 231.99}                
            ]
        });
        const actual = offersSlice(initialState, action);
        expect(actual.status).toEqual('success');
        expect(actual.items).toEqual({
            items: [
                { id: '2436432a-e1d5-4649-bece-f98834f6ee1d-SDMR', name: 'Audi A3 Sedan', price: 209.96},
                { id: '2436432a-e1d5-4649-bece-f98834f6ee1d-FWMR', name: 'Audi A4 Avant', price: 231.99} 
            ]
        });
    });
    it('should handle slice getPosts pending', async () => {
        const action = getOffers.pending;
        const actual = offersSlice(initialState, action);
        expect(actual.status).toEqual('loading');
    });
    it('should handle slice getPosts rejected', async () => {
        const action = getOffers.rejected();
        const actual = offersSlice(initialState, action);
        expect(actual.status).toEqual('failed');
    });
});

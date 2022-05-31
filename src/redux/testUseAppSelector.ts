const state = {
    mood: {
        cart: '',
        products: ''
    }
}

//export const testUseAppSelector = (f:any) => f(state);
export const testUseAppSelector = jest.fn(() => state);
import { capitalize } from './utils';

describe('Capitalize function', () => {

  it('Should return a new string with the first letter capitalized', () => {
    const capitalized = capitalize('test');
    expect(capitalized).toEqual('Test');
  });
});
import { greet } from '.';

describe('Greeter', () => {
  it('should greet', () => {
    expect(greet()).toBe('Hello, World!');
  });
});

import { HelloWorld } from '../../src/aurelia-plugin-skeleton-typescript/hello-world';

describe('Aurelia plugin', () => {
  it('Says hello Aurelia', () => {
    expect(new HelloWorld().msg).toBe('Hello Aurelia!');
  });
});

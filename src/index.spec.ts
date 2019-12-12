import { isDevelopmentMode } from './';

describe('isDevelopmentMode', () => {
  it('Returns true when we are in development mode', () => {
    process.env.NODE_ENV = 'development';
    expect(isDevelopmentMode()).toBeTruthy();
  });

  it('Returns false when we are not in development mode', () => {
    process.env.NODE_ENV = 'production';
    expect(isDevelopmentMode()).toBeFalsy();
  });
});

import { isValidEmail } from '../helpers/validationHelper';

describe('Validation Helper', () => {
  it('should return true for a valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  it('should return false for an invalid email', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
  });
});

// import {describe, expect, test} from '@jest/globals';

import { validatePasswordChecklist } from 'validate-password-checklist';

// ------------ default options ------------ //
describe('check password', () => {
  test('check min length', () => {
    const { allChecksPassed: isAllChecksPassed, validationMessages } = validatePasswordChecklist('abcde');

    expect(isAllChecksPassed).toBe(false);
    const currentPassed = validationMessages.find(error => error.key === 'lowerCase');

    expect(currentPassed?.passed).toBe(true);
  });

  test('check two passed check', () => {
    const { allChecksPassed: isAllChecksPassed, validationMessages } = validatePasswordChecklist('abcde8');

    expect(isAllChecksPassed).toBe(false);
    const passedChecks = validationMessages.filter(error => error.key && ['lowerCase', 'number'].includes(error.key));

    expect(passedChecks?.length).toBe(2);
  });

  test('check all checks passed', () => {
    const { allChecksPassed: isAllChecksPassed, validationMessages } = validatePasswordChecklist('abcde8=F');

    expect(isAllChecksPassed).toBe(true);
    expect(validationMessages?.length).toBe(5);
  });
});

import calculate from '../logic/calculate';

describe('calculate functionality', () => {
  test('AC button returns everything back to null', () => {
    const mobObject = {
      total: '100',
      next: '20',
      operation: '+',
    };

    const mobResult = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = 'AC';
    expect(calculate(mobObject, buttonName)).toEqual(mobResult);
  });

  test('If there is a double 0', () => {
    const mobObject = {
      total: '100',
      next: '0',
      operation: '+',
    };

    const mobResult = {};

    const buttonName = '0';
    expect(calculate(mobObject, buttonName)).toEqual(mobResult);
  });

  test('No operation just adding a number, update next', () => {
    const mobObject = {
      total: '',
      next: '2',
      operation: '+',
    };

    const mobResult = {
      total: '',
      next: '21',
      operation: '+',
    };

    const buttonName = '1';
    expect(calculate(mobObject, buttonName)).toEqual(mobResult);
  });

  test('If button is a period', () => {
    const mobObject = {
      total: '',
      next: '2',
      operation: '+',
    };

    const mobResult = {
      total: '',
      next: '2.',
      operation: '+',
    };

    const buttonName = '.';
    expect(calculate(mobObject, buttonName)).toEqual(mobResult);
  });

  test('Testing if prev number had period', () => {
    const mobObject = {
      total: '',
      next: '2.',
      operation: '+',
    };

    const mobResult = {
      total: '',
      next: '2.',
      operation: '+',
    };

    const buttonName = '.';
    expect(calculate(mobObject, buttonName)).toEqual(mobResult);
  });

  test('Testing if buttonName is equal sign', () => {
    const mobObject = {
      total: '1',
      next: '2',
      operation: '+',
    };

    const mobResult = {
      total: '3',
      next: null,
      operation: null,
    };

    const buttonName = '=';
    expect(calculate(mobObject, buttonName)).toEqual(mobResult);
  });

  test('Testing if buttonName is equal sign with no operation', () => {
    const mobObject = {
      total: '1',
      next: '2',
      operation: null,
    };

    const mobResult = {};

    const buttonName = '=';
    expect(calculate(mobObject, buttonName)).toEqual(mobResult);
  });

  test('Testing positive to negative transition', () => {
    const mobObject = {
      total: '',
      next: '2',
      operation: null,
    };

    const mobResult = {
      total: '',
      next: '-2',
      operation: null,
    };

    const buttonName = '+/-';
    expect(calculate(mobObject, buttonName)).toEqual(mobResult);
  });

  test('Testing negative to positive transition', () => {
    const mobObject = {
      total: '',
      next: '-2',
      operation: null,
    };

    const mobResult = {
      total: '',
      next: '2',
      operation: null,
    };

    const buttonName = '+/-';
    expect(calculate(mobObject, buttonName)).toEqual(mobResult);
  });

  test('Testing negative to positive transition on total', () => {
    const mobObject = {
      total: '-10',
      next: null,
      operation: null,
    };

    const mobResult = {
      total: '10',
      next: null,
      operation: null,
    };

    const buttonName = '+/-';
    expect(calculate(mobObject, buttonName)).toEqual(mobResult);
  });
});

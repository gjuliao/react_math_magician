import operate from '../logic/operate';

const one = 12;
const two = 5;

describe('Operational functionality of the calculator', () => {
  test('should add both numbers', () => {
    expect(operate(one, two, '+')).toBe('17');
  });
  test('should add both numbers', () => {
    expect(operate(-one, two, '+')).toBe('-7');
  });
  test('should substract both numbers', () => {
    expect(operate(one, two, '-')).toBe('7');
  });
  test('should substract both numbers', () => {
    expect(operate(-one, two, '-')).toBe('-17');
  });
  test('should multiply both numbers', () => {
    expect(operate(one, two, 'x')).toBe('60');
  });
  test('should multiply both numbers', () => {
    expect(operate(-one, two, 'x')).toBe('-60');
  });
  test('should divide both numbers', () => {
    expect(operate(one, two, '÷')).toBe('2.4');
  });
  test('should divide both numbers', () => {
    expect(operate(-one, two, '÷')).toBe('-2.4');
  });
  test('should not divide by zero', () => {
    expect(operate(one, 0, '÷')).toBe('Can\'t divide by 0.');
  });
  test('should get module correctly', () => {
    expect(operate(two, 2, '%')).toBe('1');
  });
  test('should get module correctly', () => {
    expect(operate(two, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});

describe('Incorrect operands', () => {
  test('Operand not known', () => {
    const operation = '/';
    try {
      operate(one, two, operation);
    } catch (e) {
      expect(e.message).toBe(`Unknown operation '${operation}'`);
    }
  });

  test('Operand not known', () => {
    const operation = '';
    try {
      operate(one, two, operation);
    } catch (e) {
      expect(e.message).toBe(`Unknown operation '${operation}'`);
    }
  });
});

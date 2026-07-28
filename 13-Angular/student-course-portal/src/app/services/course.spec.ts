import { Calculator } from './calculator';

describe('Calculator', () => {

  let service: Calculator;

  beforeEach(() => {
    service = new Calculator();
  });

  it('should add two numbers', () => {
    expect(service.add(10, 20)).toBe(30);
  });

  it('should subtract two numbers', () => {
    expect(service.subtract(20, 10)).toBe(10);
  });

  it('should multiply two numbers', () => {
    expect(service.multiply(5, 4)).toBe(20);
  });

  it('should divide two numbers', () => {
    expect(service.divide(20, 5)).toBe(4);
  });

});
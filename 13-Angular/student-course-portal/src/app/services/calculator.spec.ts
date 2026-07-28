import { Calculator } from './calculator';

describe('Calculator', () => {

  let service: Calculator;

  beforeEach(() => {

    service = new Calculator();

  });

  it('should add numbers', () => {

    expect(service.add(10,20)).toBe(30);

  });

  it('should subtract numbers', () => {

    expect(service.subtract(20,10)).toBe(10);

  });

});

it('should calculate the tip percent correctly correctly', function () {
    const test1Values1 = 100;
    const test1Value2 = 15; 
    expect(calculateTipPercent(test1Values1, test1Value2)).toEqual('15');
  });
  
  
  
  it("should give a higher tip percent", function() {
    // ..
  const test2Values1 = 55;
  const test2Value2 = 18;
  expect(calculateTipPercent(test2Value1, test2Values2)).toEqual('33');
  
  });
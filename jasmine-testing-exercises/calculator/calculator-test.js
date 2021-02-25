
it('should calculate the monthly rate correctly', function () {
  const testValues1 = {
    amount: 50000,
    years: 15,
    rate: 2.5
  };
  expect(calculateMonthlyPayment(testValues1)).toEqual('333.39');
});



it("should return a result with 2 decimal places", function() {
  // ..
const testValues2 = {
  amount: 100000,
  years: 25,
  rate: 2.5
};
expect(calculateMonthlyPayment(testValues2)).toEqual('448.62');

});


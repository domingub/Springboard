describe('Payment test', function () {
    beforeEach(function(){
      billAmtInput.value = 50;
      tipAmtInput.value = 5;
    });
    
it('should update allPayments with submitPaymitInfo function', function () {
    submitPaymentInfo();
    expect(Object,keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('50');
    expect(allPayments['payment1'].tipAmt).toEqual('5');
    expect(allPayments['payment1'].tipPercent).toEqual(10);
  });

it("should not add to table if input empty", function() {
    billAmtInput.value = '';
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(0);
});

it("should not add to table if input empty", function() {
    let inputPayment = createCurPayment();
    allPayment['payment1'] = inputPayment;
    appendPaymentTable(inputPayment);
    let currentList = document.querySelectorAll('#paymentTable tbody tr td');
    expect(currentList[0].innerText).toEqual(50);
    expect(currentList[1].innerText).toEqual(5);
});

it('should create new payment', function(){
    let expectedPayment = {
        billAmt: '200',
        tipAmt: '40',
        tipPercent: 20,
    }
    expect(createCutPayment()).toEqual(expectedPayment);
})

afterEach(function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};

});

});
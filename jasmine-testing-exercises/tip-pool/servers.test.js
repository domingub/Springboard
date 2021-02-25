describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  
  it('create table row element from information provided', function () {
    submitServerInfo();
    updateServerTable();
    let addedHTMLElement = document.querySelectorAll('#serverTable tbody tr td');
    expect(addedHTMLElement.length).toEqual(2);
    expect(addedHTMLElement[0].innerText).toEqual('Alice');
    expect(addedHTMLElement[1].innerText).toEqual('$0.00');
  });
  
  afterEach(function() {
    serverID = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});

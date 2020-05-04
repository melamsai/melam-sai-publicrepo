const res = new XMLHttpRequest();
res.onload = function() {
  var empObj = JSON.parse(this.responseText);
  console.log(empObj.data[1]);
}
res.open('get','http://dummy.restapiexample.com/api/v1/employees');
res.send();

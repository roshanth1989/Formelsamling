function f_initialize(){
    var tblFormler = getElementById("tblFormler");
    var header = tblFormler.createTHead();
    var headerRow = header.insertRow();
    var headerCell = headerRow.insertCell();
    headerCell.innerHTML = "#";
    
    var body = tblFormler.createTBody();
    var row = body.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = "1";
}
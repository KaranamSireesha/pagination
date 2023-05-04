var table = document.getElementById("compInfo");
var rowsPerPage = 2;
var rowCount = table.rows.length;
var tableHead= table.rows[0].firstElementChild.tagName === "TH";
var tr = [];
var i,ii,j = (tableHead) ? 1 : 0;
var th = (tableHead ? table.rows[(0)].outerHTML : "");
var pageCount = Math.ceil(table.rows.length / rowsPerPage);
if (pageCount > 1) {

  for (i = j, ii = 0; i < rowCount; i++, ii++){
  
  tr[ii] = table.rows[i].outerHTML;
  
  }
  
  // table.insertAdjacentHTML("afterend","<br><div id='buttons'></div");
  
  sort(1);
  
  }

  function sort(page) {
    var rows = th, s = ((rowsPerPage * page)- rowsPerPage);
    for (i = s; i < (s + rowsPerPage) && i < tr.length; i++)
      rows += tr[i];
      table.innerHTML = rows;
    // document.getElementById("pagenum").innerHTML = pageButtons(pageCount, page);
    }


   

         
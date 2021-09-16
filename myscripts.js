function myFunction() {
  if (document.getElementById("number").value == "1") {
    var para = document.createElement("P");
    para.innerText = document.getElementById("text").value;
    para.style.color = document.getElementById("pcolor").value
    document.body.appendChild(para);
  }

  else if (document.getElementById("number").value == "2") {
    var para = document.createElement("P");
    para.innerText = document.getElementById("text").value;
    para.style.color = document.getElementById("pcolor").value
    document.body.appendChild(para);
  }

  else if (document.getElementById("number").value == "3") {
    var a = document.getElementById("replace1").value - 1;
    var b = document.getElementById("replace2").value - 1;

    var paragraphs = document.getElementsByTagName("p");
    var par1 = paragraphs[a];
    var par2 = paragraphs[b];

    var par1storage = par1.innerHTML;
    var par2storage = par2.innerHTML;

    par1.innerHTML = par2storage;
    par2.innerHTML = par1storage;
  }

  else if (document.getElementById("number").value == "4") {
    var i = document.getElementById("rownumber").value - 1;
    var paragraphs = document.getElementsByTagName("p");
    var lastParagraph = paragraphs[i];
    lastParagraph.parentNode.removeChild(lastParagraph);
  }

  document.getElementById("pcounter").innerHTML = document.getElementsByTagName("p").length;
  document.getElementById("rownumber").max = document.getElementsByTagName("p").length;
  document.getElementById("replace1").max = document.getElementsByTagName("p").length;
  document.getElementById("replace2").max = document.getElementsByTagName("p").length;
}

// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  } else {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title = "New title";
    document
        .querySelector("h1")
        .textContent = title;
    // var title = 
    //   document
    //     .querySelector("#title")
    //     .textContent;
    // if title.indexof(" & Lovin' it!") > 0 {
    //   title = title.substring(0,str.length - 13);
    //   document
    //     .querySelector("h1")
    //     .textContent = title;
    // }
  }
}
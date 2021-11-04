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

  var title = 
    document
      .querySelector("#title")
      .textContent;
  var suffix = " & Lovin' it!";
  console.log("Title is: " + title);
  console.log("title.length: " + title.length);
  console.log("title.endsWith: " + title.endsWith(suffix));
  var truth = title.endsWith(suffix);
  if (truth) {
    console.log("Inside endsWith true loop. Title length is: " + title.length);
    console.log("title.substring: " + title.substring(0,title.length - suffix.length));
    title = title.substring(0,title.length - suffix.length);
    console.log("Now, title is: " + title);
    document
      .querySelector("h1")
      .textContent = title;
  }

  if (name === "student") {
    console.log("Name is 'student'. Title is: " + title);
    title += suffix;
    console.log("Now, title is: " + title);
    document
      .querySelector("h1")
      .textContent = title;
  }
}
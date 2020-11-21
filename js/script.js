test();
function test() {
  console.log("test");
}

var x;

console.log(x);
x = 5;

// console.log(x);
// var x = 5;

// Function Definition

// function traditional
// test1();
(function test1(a) {
  console.log(a);
});

// test2()
// function expression
var test2 = function () {};

// arrow functuin
var test3 = () => {};

// Todo list
var input = document.querySelector("#input");
var btn = document.querySelector("#addItem");
var listContainer = document.querySelector("#items");

btn.addEventListener("click", function () {
  listContainer.innerHTML +=
    "<li>" + input.value + "<span onclick='remove(this)'> x </span></li>";
  input.value = "";
});

function remove(item) {
  item.parentElement.remove();
}

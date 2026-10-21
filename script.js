
function searchBook() {
    var id = document.getElementById("book").value;

    if (id == "101" || id.toLowerCase() == "python") {
        document.getElementById("result").innerHTML =
            "Book Found: Python Programming (ID: 101)";
    }
    else if (id == "102" || id.toLowerCase() == "maths") {
        document.getElementById("result").innerHTML =
            "Book Found: Maths (ID: 102)";
    }
    else {
        document.getElementById("result").innerHTML =
            "Book Not Found";
    }
}

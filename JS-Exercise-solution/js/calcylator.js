
function calculator() {

        var a = document.getElementById("tal1").value;
        var b = document.getElementById("tal2").value;

        // Kollar om det är siffror och är ifyllt

        if (kollaSiffra(a) && kollaSiffra(b)) {

                var result;
                var tal1 = parseInt(a);
                var tal2 = parseInt(b);

                var typ = document.querySelector('input:checked').value;

                if (typ == "add") {
                        result = tal1 + tal2;
                } else if (typ == "sub") {
                        result = tal1 - tal2;
                } else if (typ == "mult") {
                        result = tal1 * tal2;
                } else if (typ == "divi") {
                        result = tal1 / tal2;
                } else {
                        alert("Du måste välja räknesätt!");
                }

                //      alert( result );
                document.getElementById("result").innerHTML = "Svaret är " + result;

        }
        else {
                document.getElementById("result").innerHTML = "Du måste skriva in siffror i båda textfälten";
        }
}
function kollaSiffra(tal) {

        if (tal == "") {
                return false;
        }else{
                return true;
        }

}



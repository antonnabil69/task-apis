
function getApi() {
    var xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {

            var result = this.responseText; // string
            var mohamed = JSON.parse(result); // string ==> JSON
            var basket = "";

            for (var i = 0; i < mohamed.length; i++) {


                var cartoona = ` <div class="md:col-4 text-center ">
                <img src="${mohamed[i].url}" class="w-100">
                <h4>${mohamed[i].title}</h4>
                <h6>${mohamed[i].id}</h6>
                        </div>
                         `;
                basket = basket + cartoona;

            }

            document.querySelector(".test").innerHTML = basket;

        }
    }

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
    xhttp.send();

}


getApi();








// API aplication programing interface


// array of object


//  id name quantity
//   1  a     5
//   2  b     15
//   3  c     25
//   4  d     45

// [1,"a" ,5,2,"b",15,3,]
// ديه كده غلط



// [

//     {
//         id: 1,
//         name: "a",
//         quantity: 5
//     },

//     {
//         id: 2,
//         name: "b",
//         quantity: 15
//     },

//     {
//         id: 3,
//         name: "c",
//         quantity: 25
//     },

// ]

// ده ال api اللي بيطلع في صوره arry of obj في صيغه json




//  json


// ajex ===>>XMLHttpRequest
//      ===>>onreadystatechange ==> true
//      ===>>readyState ==> 4
//      ===>>status ==> 200
//      ===>>responseText ==> String

// ديه طريقه التخاطب بين اليوزر والسيرفر





// sync التزامن


// Async عدم التزامن








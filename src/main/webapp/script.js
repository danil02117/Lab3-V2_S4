let request = new XMLHttpRequest();
request.open("GET", "cars.json");

request.responseType = "json";
request.send();

// после загрузки файла JSON
request.onload = function() {
    let cars = request.response;
    fillTable(cars);
}

// заполнение таблицы из JSON файла
function fillTable(cars) {  
    let tbody = document.querySelector("tbody");

    cars.forEach(car => {        
        let newRow = document.createElement("tr");
        
        newRow.innerHTML = `<td>${car["brand"]}</td><td>${car["model"]}</td><td>${car["year"]}</td><td>${car["mileage"]}</td><td>${car["color"]}</td><td>${car["price"]}</td>`;
        tbody.appendChild(newRow);
    });
}
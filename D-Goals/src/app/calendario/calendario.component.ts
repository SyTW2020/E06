import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let monthAndYear = document.getElementById("monthAndYear");
    showCalendar(currentMonth, currentYear);

    function showCalendar(month, year) {

        let firstDay = (new Date(year, month)).getDay();
        let daysInMonth = 32 - new Date(year, month, 32).getDate();

        let tbl = document.getElementById("calendar-body"); // body of the calendar
        // clearing all previous cells
        tbl.innerHTML = "";
        // filing data about month and in the page via DOM.
        monthAndYear.innerHTML = months[month] + " " + year;
        
        // creating all cells
        let date = 1;
        for (let i = 0; i < 6; i++) {
            // creates a table row
            let row = document.createElement("tr");

            //creating individual cells, filing them up with data.
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    let indicador =document.createElement("div");
                    switch(j){
                        case 0:{indicador.classList.add("Domingo");cell.appendChild(indicador);break;}
                        case 1:{indicador.classList.add("Lunes");cell.appendChild(indicador);break;}
                        case 2:{indicador.classList.add("Martes");cell.appendChild(indicador);break;}
                        case 3:{indicador.classList.add("Miercoles");cell.appendChild(indicador);break;}
                        case 4:{indicador.classList.add("Jueves");cell.appendChild(indicador);break;}
                        case 5:{indicador.classList.add("Viernes");cell.appendChild(indicador);break;}
                        case 6:{indicador.classList.add("Sabado");cell.appendChild(indicador);break;}
                    }
                }
                else if (date > daysInMonth) {
                    break;
                }

                else {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(date);
                    let indicador =document.createElement("div");
                    switch(j){
                        case 0:{indicador.classList.add("Domingo");cell.appendChild(indicador);break;}
                        case 1:{indicador.classList.add("Lunes");cell.appendChild(indicador);break;}
                        case 2:{indicador.classList.add("Martes");cell.appendChild(indicador);break;}
                        case 3:{indicador.classList.add("Miercoles");cell.appendChild(indicador);break;}
                        case 4:{indicador.classList.add("Jueves");cell.appendChild(indicador);break;}
                        case 5:{indicador.classList.add("Viernes");cell.appendChild(indicador);break;}
                        case 6:{indicador.classList.add("Sabado");cell.appendChild(indicador);break;}
                    }
                    if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                        cell.classList.add("bg-info");
                    } // color today's date
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    date++;
                }
            }
            tbl.appendChild(row); // appending each row into calendar body.
        }
    }
  }
}

'use strict';

function createTable(id, year, month) {
  const calBody = document.getElementById(`${id}`);
  const daysInMonthes = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const nameOfDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  if(year % 4 === 0) {
    daysInMonthes[2] = 29;
  }
  let days = daysInMonthes[`${month}`];
  let table = document.createElement('table');
  calBody.append(table);
  
  for (let i = 0; i < 6; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    for (let j = 0; j < 7; j++) {
      let td = document.createElement('td');
      tr.append(td);
      }
    }

    for (let h = 0; h < 7; h++) {
      table.rows[0].append(document.createElement('th'));
      table.rows[0].cells[0].remove();
    }

    for (let r = table.rows.length - 1; r >= 0; r--) {
      for(let c = table.rows[0].cells.length - 1; c >= 0; c--) {
        if(days > 0) {
          table.rows[r].cells[c].innerHTML = days;
          days--;
        }
      }   
    }

    for (let d = 0; d < nameOfDays.length; d++) {
      table.rows[0].cells[d].innerHTML = nameOfDays[d];
    }
  }
  

createTable('calendar', 2019, 2);
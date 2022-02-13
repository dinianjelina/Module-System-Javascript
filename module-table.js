class Table {
  constructor(table) {
    this.table = table;
  }

  createHeader(head) {
    let open = '<thead><tr>';
    let close = '</tr></thead>';

    head.forEach((h) => {
      open += `<th>${h}</th>`;
    });

    return open + close;
  }

  createBody(body) {
    let open = '<tbody>';
    let close = '</tbody>';

    body.forEach((b) => {
      open += `
              <tr>
                <td>${b[0]}</td>
                <td>${b[1]}</td>
                <td>${b[2]}</td>
                <td>${b[3]}</td>
              </tr>
            `;
    });

    return open + close;
  }

  render(element) {
    let contain = "<table class='table table-hover'>" + this.createHeader(this.table.columns) + this.createBody(this.table.data) + '</table>';
    element.innerHTML = contain;
  }
}

const contain = new Table({
  columns: ['Name', 'Email', 'No. Handphone', 'Alamat'],
  data: [
    ['Dini Anjelina', 'dinianjelina12@gmail.com', '081272247620', 'Jl. Yos. Sudarso, Belinyu'],
    ['Farah Ismah Hana', 'farahismahhana22@gmail.com', '082356780012', 'Jl. Imam Bonjol, Sungailiat'],
    ['Fira Safitra', 'firasafitra04@gmail.com', '081346702344', 'Jl. Bukit Ketok, Belinyu'],
    ['Nila Fazila', 'nilafazila11@gmail.com', '081930857460', 'Jl. Kartini, Belinyu'],
    ['Sari Rama Dianti', 'sariramadianti23@gmail.com', '082355670981', 'Jl. Jend. Sudirman, Belinyu'],
    ['Salsabila Erian', 'salsabilaerian06@gmail.com', '081933987520', 'Jl. Jend. Sudirman, Belinyu'],
  ],
});
const library = document.getElementById('library');
contain.render(library);

export { contain };

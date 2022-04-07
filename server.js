
const x1 = require("excel4node");
const { getMaxListeners } = require("process");
const wb = new x1.Workbook();
const ws = wb.addWorksheet('Alunos');


const data = [
  {
      "nome" : "Charlie",
      "Idade" : "19",
      "Nota" : "9"
  },
  {
    "nome" : "Marcelo",
    "Idade" : "18",
    "Nota" : "10"
  },
  {
    "nome" : "Alan",
    "Idade" : "17",
    "Nota" : "8"
  },
];
const headingColumnNames = [
  "Nome",
  "Idade",
  "Notas"
];

let headingColumnIndex = 1;
headingColumnNames.forEach(heading => {
  ws.cell(1, headingColumnIndex++).string(heading);
});

let rowIndex = 2;
data.forEach(record => {
  let ColumnIndex = 1;
  Object.keys(record).forEach(columnName => {
    ws.cell(rowIndex, ColumnIndex++).string(record[columnName]);
  })
    rowIndex++
})

wb.write('alunos.csv');
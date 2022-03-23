
const x1 = require("excel4node");
const { getMaxListeners } = require("process");
const wb = new x1.Workbook();
const ws = wb.addWorksheet('Alunos');


const data = [
  {
    "nome": "teste",
    "email": "teste@gmail.com",
    "celular": "123456789"
  },
  {
  "nome": "teste",
    "email": "teste@gmail.com",
    "celular": "123456789"
  },
  {
  "nome": "teste",
    "email": "teste@gmail.com",
    "celular": "123456789"
  }
];
const headingColumnNames = [
  "Nome",
  "Email",
  "Nota"
];

let headingColumnIndex = 1;
headingColumnNames.forEach(heading => {
  ws.cell(1, headingColumnIndex++).string(heading);
});

let rowIndex = 2;
data.forEach(record => {
  let ColumnIndex = 1;
  Object.keys(record).forEach(columnName => {
    ws.cell(rowIndex, ColumnIndex++).string(record[columnName])
  })
    rowIndex++
})

wb.write('alunos.xlsx');
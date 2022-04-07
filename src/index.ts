/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */
	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	class Aluno {
		constructor(
			readonly	nome:string,
  		readonly	idade:number,
			readonly	nota:number,)
			{
			}

	}

		let aluno1 = new Aluno ('Lucas', 9, 9,);
		let aluno2 = new Aluno ('Matheus', 10, 9,);
		let aluno3 = new Aluno ('Amaral', 8, 7,);

		let alunos: Array<Aluno> = [aluno1, aluno2, aluno3,];

		const soma = (a:number, b:number) => a + b
		const somenteNota = (a:Aluno) => a.nota
		const somaDasNotas = alunos.map(somenteNota) .reduce(soma);

console.log('a soma das notas é:', somaDasNotas);
const ObjectsToCsv = require('objects-to-csv');

	(async () => {
		const csv = new ObjectsToCsv(alunos);
		await csv.toDisk('./alunos.csv');
	 
		console.log(await csv.toString());
	})();
	
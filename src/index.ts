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
			readonly	Nome:string,
			readonly	Idade:number,
			readonly	Nota:number,)
			{
			}
	
	}
	
		var aluno1 = new Aluno ('Alan', 16, 8,);
		var aluno2 = new Aluno ('Charlie', 17, 10,);
		var aluno3 = new Aluno ('Marta', 15, 9,);
	
		let alunos: Array<Aluno> = [aluno1, aluno2, aluno3,];
	
		var soma = aluno1.Nota + aluno2.Nota + aluno3.Nota;

		console.log(Aluno);
		console.log(alunos);
		console.log(`A soma total das notas é: ${soma}`);



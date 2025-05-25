let NumBooks: number = 20;
let TeacherName: string = "Lana";
let tem_projetor: boolean = true;
let qnt_computadores = undefined; // undefined por padrão

console.log("DECLARAÇÃO DE VARIÁVEIS \n=======================================================================================")
console.log("Número de livros é igual a " + NumBooks);
console.log("Nome do(a) professor(a): " + TeacherName);
console.log("Há projetor? " + tem_projetor);
console.log("Quantidade de Computadores: " + qnt_computadores);
console.log("=======================================================================================")
console.log("OBJETO SALA DE AULA \n=======================================================================================")

type SalaDeAula = {
    professor: string;
    qt_cadeiras: number;
    tem_energia: boolean;
    curso: string;
    turno: string;
}

let sala: SalaDeAula = {
    professor: "Lana",
    qt_cadeiras: 50,
    tem_energia: true,
    curso: "Design",
    turno: "Tarde", 
};

console.log("Professor(a): " + sala.professor);
console.log("Quantidade de Cadeiras: " + sala.qt_cadeiras);
console.log("Tem Energia Elétrica? " + sala.tem_energia);
console.log("Curso: " + sala.curso);
console.log("Turno: " + sala.turno);


let nombre = "Martin";
let apellido = "Carbonell";

let estudiante = `${nombre} ${apellido}`;

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLocaleLowerCase();

let contar_letras_con_espacios = estudiante.length;

let primeraLetraNombre = estudiante.charAt(0);

let ultimaLetraApellido = estudiante.charAt(estudiante.length-1);

let estudianteSinEspacios = estudiante.trim();

let isEstudianteContieneNombre = estudiante.includes(nombre);



console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(contar_letras_con_espacios);
console.log(primeraLetraNombre);
console.log(ultimaLetraApellido);
console.log(estudianteSinEspacios);
console.log(isEstudianteContieneNombre);
/*



- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/
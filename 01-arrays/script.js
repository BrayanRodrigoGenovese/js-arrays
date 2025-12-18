const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(`il quarto insegnante è: ${fourthTeacher}`);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

teachers.splice(4, 1, "Patrick");
console.log(`il quinto insegnante adesso è: ${teachers[4]}`);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(`l'ultimo insegnante era: ${lastTeacher}`);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(`il primo insegnante era: ${firstTeacher}`);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
lastIndex = teachers.push("Vanessa") - 1;
console.log(`abbiamo aggiunto ${teachers[lastIndex]} alla fine della lista`);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log(`abbiamo aggiunto ${teachers[0]} all'inizio della lista`);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log(`l'indice dell'insegnante Lewis è ${lewisIndex}`);

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log(`la lista è vuota? ${isTeachersEmpty}`);

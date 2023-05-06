// estudiantesPorHechizo, que tome por parámetro el nombre de un hechizo y un array de estudiantes y devuelva un array con todos les estudiantes que tengan ese hechizo como hechizoPreferido

const estudiantesPorHechizo = (nombreHechizo, arrayEstudiantes) => 
    arrayEstudiantes.filter(({ hechizoPreferido }) => hechizoPreferido === nombreHechizo)
    

console.log(estudiantesPorHechizo("Expecto Patronum", estudiantes))

// estudiantesConMasAmiguesQue, que tome por parametro un numero y un array de estudiantes y devuelva un array con todos les estudiantes que tengan un número de amigues mayor o igual a el número pasado por parámetro

const estudiantesConMasAmigosQue = (numeroAmigos, arrayEstudiantes) => 
    arrayEstudiantes.filter(({amigues})=> 
        amigues.length >= numeroAmigos)

  console.log(estudiantesConMasAmigosQue(8, estudiantes))
// estudiantesConFamiliares, que tome por parámetro un array con nombres de familiares (p.ej, ["Sapo", "Lechuza"]) y un array de estudiantes y devuelva un array con les estudiantes que tengan cuyo familiar sea alguno de los incluidos en el parámetro

const estudiantesConFamiliares = (arrayFamiliares, arrayEstudiantes) =>
    arrayEstudiantes.filter(({familiar}) => arrayFamiliares.includes(familiar))

console.log(estudiantesConFamiliares(["Sapo", "Lechuza"], estudiantes))

// obtenerPromedioDeEstudiante, que tome por parámetro une estudiante (que se saca del array estudiantes) y devuelva el promedio total de todas las materias

const obtenerPromedioDeEstudiante = (estudiante) =>{
    let acc = 0
     estudiante.materias.filter(({ promedio }) => acc += promedio)
    return acc/(estudiante.materias).length
}
console.log(obtenerPromedioDeEstudiante(estudiantes[0]))
// estudiantesConPromedioMayorA, que tome por parámetro un número y un array de estudiantes y devuelva un array con les estudiantes que tengan un promedio total mayor a dicho número (usar la función anterior)
const estudiantesConPromedioMayorA = (numero, arrayEstudiantes) => 
    arrayEstudiantes.filter(estudiante => obtenerPromedioDeEstudiante(estudiante) > numero)

    console.log(estudiantesConPromedioMayorA(7, estudiantes))
// mejoresEstudiantesPorCasa, que tome por parámetro el nombre de una casa y un array de estudiantes y devuelva les estudiantes de dicha casa cuyo promedio total es mayor a 6

const mejoresEstudiantesPorCasa = (nombreCasa, arrayEstudiantes) => {
    const estudiantesPorCasa = arrayEstudiantes.filter(({ casa })=> casa === nombreCasa)
    const mejoresEstudiantes = estudiantesPorCasa.filter((estudiante => obtenerPromedioDeEstudiante(estudiante) > 6))
    return mejoresEstudiantes
}
console.log(mejoresEstudiantesPorCasa("Hufflepuff", estudiantes))
// casaConMejoresEstudiantes, que tome por parámetro un array de estudiantes y devuelva el nombre de la casa que tiene más cantidad de estudiantes con promedio total mayor a 6 (usar la función anterior)

// estudiantesPorMateriaAprobada, que tome por parámetro el nombre de una materia y un array de estudiantes y devuelva una array con les estudiantes que tienen en dicha materia un promedio superior a 6
const estudiantesPorMateriaAprobada = (nombreMateria, arrayEstudiantes) => {
    const materiasAprobadas = arrayEstudiantes.filter(({ materias}) => {
       
    })
    
    
    
}

console.log(estudiantesPorMateriaAprobada("Encantamiento", estudiantes))
// obtenerInfoResumida, que tome por parámetro un array de estudiantes y devuelva un array con objetos, habiendo un objeto por estudiante, donde cada objeto tiene las siguientes propiedades: nombre, casa, promedio, amigues (cantidad)

// cantidadDeEstudiantesPorCasa, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las casas como propiedades y la cantidad de estudiantes por casa (no debe contar amigues)

// cantidadDeEstudiantesPorMateriaAprobada, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y la cantidad de estudiantes que aprobaron dicha materia (promedio superior a 6)

// promedioPorMateria, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y el promedio total de dicha materia entre todes les estudiantes (suma de todos los promedios divido la cantidad de estudiantes)

// familiarPreferido, que tome por parámetro un array de estudiantes y devuelva el familiar que más estudiantes tienen
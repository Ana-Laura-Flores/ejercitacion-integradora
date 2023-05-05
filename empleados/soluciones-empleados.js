// //Hacer las siguientes funciones:

// EJERCICIO 1
// empleadesQueHacenGuardia, que devuelva un array con todes les empleades que hacen guardia

const empleadosQueHacenGuardia = ( arrayEmpleados) => arrayEmpleados.filter(({ haceGuardia }) => haceGuardia);
    

console.log(empleadosQueHacenGuardia(empleados))



//EJERCICIO 2
// empleadesPorPais, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son de dicho país

const empleadosPorPais = (nombrePais, arrayEmpleados) => {
    const filtradoPorPais = arrayEmpleados.filter(({pais}) => pais === nombrePais);
    return filtradoPorPais
}

console.log(empleadosPorPais("Argentina", empleados))
console.log(empleadosPorPais("Venezuela", empleados))

/*
const empleadosPorPais = (nombrePais) => empleados.filter(({ pais }) => pais === nombrePais)

console.log(empleadosPorPais("México"))

*/

// EJERCICIO 3
// empleadesPorArea, que tome por parámetro el nombre de un área y devuelva un array con todes les empleades que son de dicho área

const empleadosPorArea = (nombreArea, arrayEmpleados) => {
    const filtradosPorArea = arrayEmpleados.filter(({ area }) => area === nombreArea);
    return filtradosPorArea
}
console.log(empleadosPorArea("Desarrollo", empleados))
console.log(empleadosPorArea("QA", empleados))


/*
const empleadosPorArea = (nombreArea) => empleados.filter(({ area }) => area === nombreArea)

console.log(empleadosPorArea("QA"))

*/

// EJERCICIO 4
// empleadesConSueldoMayorA, que tome por parámetro un número como sueldo y devuelva un array con todes les empleades que tengan un sueldo mayor a dicho número, ordenados de menor a mayor según sueldo

const empleadosConSueldoMayorA = (numeroSueldo, arrayEmpleados) => arrayEmpleados.filter(({ sueldo })=> sueldo > numeroSueldo)

/*
const empleadosConSueldoMayorA = (numeroSueldo, arrayEmpleados) => {
    const filtradosPorSueldos = arrayEmpleados.filter(({ sueldo }) => sueldo > numeroSueldo);
    return filtradosPorSueldos.toSorted((a, b) => b.sueldo - a.sueldo)
}
*/
console.log(empleadosConSueldoMayorA(93000, empleados))

/*
const empleadosConSueldoMayorA = (empleadoSueldo) => empleados.filter(({ sueldo }) => sueldo > empleadoSueldo).toSorted((a, b) => b.sueldo - a.sueldo)

console.log(empleadosConSueldoMayorA(85000))

*/

//EJERCICIO 5
// empleadesConMasLenguajes, que tome por parámetro un número y devuelva un array con aquelles empleades que sepan más lenguajes que dicho número
/*
const empleadosConMasLenguajes = (numeroLenguajes, arrayEmpleados) =>
arrayEmpleados.filter(({lenguajes}) => lenguajes.lenght > numeroLenguajes)

console.log(empleadosConMasLenguajes(4, empleados))
*/
const empleadosConMasLenguajes = (numeroLenguajes) => empleados.filter(({ lenguajes }) => lenguajes.length > numeroLenguajes)

console.log(empleadosConMasLenguajes(4))



// sueldoPromedioEmpleades, que devuelva el sueldo promedio de todos los empleados
const sueldoPromedioEmpleados = () => {
    let totalSueldos = 0
    let totalEmpleados = empleados.length

    for (const empleado of empleados) {
        const { sueldo } = empleado
        totalSueldos += sueldo
    }

    return totalSueldos / totalEmpleados
}

console.log(sueldoPromedioEmpleados())

/*
const calcularPromedio = () => numeroA / numeroB
const sueldoPromedioEmpleados = () =>{
    let totalSueldos
    for(const empleado of empleados){
        const { sueldo } = empleado
        totalSueldos += sueldo
        
    }
    return totalSueldos
}
*/
console.log(sueldoPromedioEmpleados())
// sueldoPromedioPorSeniority, que tome por parámetro un seniority, y devuelva el sueldo promedio de todes les empleades que tengan ese seniority

const sueldoPromedioPorSeniority = (puestoSeniority) => {
    const empleadosFiltrados = empleados.filter(({ seniority }) => seniority === puestoSeniority)
    let sueldoTotal = 0
    let cantidadEmpleados = empleadosFiltrados.length
    for (const empleado of empleadosFiltrados){
        sueldoTotal += empleado.sueldo
    }
    return sueldoTotal/cantidadEmpleados
}

console.log(sueldoPromedioPorSeniority("Semisenior"))

// buscarEmpleades, que tome por parámetros area, puesto y seniority, y devuelva un array con les empleades que pertenezcan a dicha area, puesto y seniority

const buscarEmpleados = (nombreArea, nombrePuesto, nombreSeniority) => 
    empleados.filter(({ area, puesto, seniority})=> area === nombreArea && puesto === nombrePuesto && seniority === nombreSeniority)
    


console.log(buscarEmpleados("QA", "Backend Developer", "Semisenior"))


// errorEnProduccion, que ponga en true la propiedad haceGuardia de todos los empleados

const errorEnProduccion = () => {
    const newArray = empleados.map(empleado =>{
        return {...empleado, haceGuardia: true}
    })
    return newArray
}
console.log(errorEnProduccion())

// subirDeCategoria, que tome como parámetro un objeto empleade. Si diche empleade no tiene un seniority "Senior", cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden ("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo
const subirDeCategoria = (empleados) => {
    if(empleados.seniority !== "Senior"){
        if(empleados.seniority === "Trainee"){
             return {...empleados, seniority: "Junior", sueldo: empleados.sueldo+10000}
        }
        if(empleados.seniority === "Junior"){
            return {...empleados, seniority: "Semisenior", sueldo: empleados.sueldo+10000}
       }
       if(empleados.seniority === "Semisenior"){
        return {...empleados, seniority: "Senior", sueldo: empleados.sueldo+10000}
   }
    }
}

// const subirDeCategoria = (empleados) => {
//     const ascendidos = empleados.(empleado =>{
//         if(empleado.seniority !== "Senior"){
//            if(empleado.seniority === "Trainee"){
//                 return {...empleado, seniority: "Junior", sueldo: empleado.sueldo+10000}
                   
//             }
//         }
//     })
//     return ascendidos
    
// }
console.log(subirDeCategoria(empleados[2]))
// agregarTecnologias, que agregue a todos los objetos empleades la propiedad tecnologías,que es un array conteniendo los valores "GIT" y "Node.js"

const agregarTecnologias = () =>{
    const agregandoTecnos = empleados.map(empleado =>{
        return {... empleado, tecnologias: ["GIT", "Node.js"]}
    })
    return agregandoTecnos
}
console.log(agregarTecnologias(empleados))

// empleadeSabeLenguaje, que tome por parámetro un objeto empleade (elemento del array empleades) y un lenguaje y devuelva true si dicho empleade sabe dicho lenguaje
const empleadoSabeLenguaje = (empleado, sabeLenguaje) =>{
    const sabe = empleado.lenguajes.some(lenguaje => lenguaje === sabeLenguaje)
    return sabe
}

console.log(empleadoSabeLenguaje(empleados[1], "C#"))
console.log(empleadoSabeLenguaje(empleados[2], "PHP"))


/*
const empleadoSabeLenguaje = (empleado, sabeLenguaje) =>{
    const sabe = empleado.lenguajes.some(lenguaje => lenguaje === sabeLenguaje)
    return sabe
}

console.log(empleadoSabeLenguaje(empleados[1], "C#"))
console.log(empleadoSabeLenguaje(empleados[2], "PHP"))
*/
// empleadesQueSabenLenguaje, que tome por parámetro un lenguaje y devuelva todes les empleades que saben dicho lenguaje (usar la función anterior)
/*
const empleadoQueSabenLenguaje = (unLenguaje) =>{
    const empleadosFiltradosLenguaje = empleados.lenguajes.filter(lenguaje => empleadoSabeLenguaje(empleados[i],unLenguaje))
    return empleadosFiltradosLenguaje
}

console.log(empleadoQueSabenLenguaje("PHP"))
*/
// empleadesQueSabenLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan todos esos lenguajes
const empleadosQueSabenLenguajes = (arrayLenguajes) => {
    let empleadosFiltradosLenguajes = []
    for (const empleado of empleados){
        for (const lenguajes of arrayLenguajes){
            if (empleadoSabeLenguaje(empleado, lenguajes)){
                empleadosFiltradosLenguajes.push(empleado)
            }
        }
    }
    return empleadosFiltradosLenguajes
}
/*
const empleadosQueSabenLenguajes = (arrayLenguajes) => {
    const filtrarEmpleados = empleados.includes(arrayLenguajes)
    return filtrarEmpleados
}
*/
console.log(empleadosQueSabenLenguajes(['Ruby', 'C#', 'Java', 'Python', 'PHP']))
// empleadesQueSabenAlgunosLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan al menos uno de esos lenguajes

// empleadesConMejorSueldo, que devuelva un array con los 10 mejores empleades pagos (investigar metodo sort)
const empleadosMayorSueldoOrden = () => empleados.sort((a, b) => b.sueldo - a.sueldo)
console.log(empleadosMayorSueldoOrden(empleados))


const empleadesConMejorSueldo = () => empleadosMayorSueldoOrden(empleados).slice(0, 10)
    

console.log(empleadesConMejorSueldo(empleados))
// obtenerTitulosCompletos, que devuelva un array donde cada elemento es un string con la forma "nombre, puesto seniority, area", p.ej.: "Nadia Conrad, Senior Backend Developer, Desarrollo", habiendo un elemento por cada empleade (usar map)
const obtenerTitulosCompletos = () => {
    const titulosCompletos = empleados.map(({nombre, seniority, area}) =>  {
        return `"${nombre}, ${seniority}, ${area}"`
        
    })
    return titulosCompletos
}
console.log(obtenerTitulosCompletos(empleados))

// obtenerInfoPersonal, que devuelva un array donde cada elemento es un objeto con las propiedades

// nombre
// pais
// edad habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)


// obtenerInfoPuestos, que devuelva un array donde cada elemento es un objeto con las propiedades

// nombre
// area
// puesto
// seniority habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)


// obtenerInfoSeniority, que devuelva un array donde cada elemento es un objeto con las propiedades
const obtenerInfoSeniority = () => {
    const infoSeniority = empleados.map(({nombre, seniority, sueldo}) => {
        return {nombre:`${nombre}`, seniority:`${seniority}`, sueldo:`${sueldo}`}
    })
    return infoSeniority
}
console.log(obtenerInfoSeniority(empleados))
// nombre
// seniority
// sueldo


// cantidadLenguajes habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original, eecepto cantidadLenguajes, que es un número indicando la cantidad de lenguajes que sabe (usar map)
const cantidadLenguajes = () => {
    const numeroDeLenguajes = empleados.map (({ nombre, lenguajes })=> {
        return `${nombre}, ${lenguajes.length}`
    })
    return numeroDeLenguajes
}
console.log(cantidadLenguajes(empleados))
// obtenerInfoPagos, que devuelva una array donde cada elemento es un objeto con las propiedades
const obtenerInfoPagos = () => {
    const pagos = empleados.map(({nombre, sueldo}) => {
        const obraSocial = sueldo*3/100
        const jubilacion = sueldo*11/100
        const sueldoNeto = sueldo-obraSocial-jubilacion
        return { nombre, sueldoBruto: sueldo, obraSocial: obraSocial, jubilacion: jubilacion, sueldoNeto: sueldoNeto}
    })
    return pagos
}
console.log(obtenerInfoPagos(empleados))
// nombre
// sueldoBruto
// obraSocial
// jubilacion
// sueldoNeto habiendo un elemento por cada empleade, donde
// sueldoBruto es el sueldo del objeto original
// obraSocial es el 3% del sueldoBruto
// jubilacion es el 11% del sueldoBruto
// sueldoNeto es el resultado de restarle a sueldoBruto los valores de obraSocial y jubilacion

// obtenerEstadisticasSeniority que devuelva un objeto donde cada propiedad es un seniority y el valor la cantidad de empleades con dicho seniority
const obtenerEstadisticasSeniority = () => {
     const estadisticasSeniority = empleados.map(({señority}) => {

     })
}

// obtenerEstadisticasLenguajes que devuelva un objeto donde cada propiedad es un lenguaje y el valor la cantidad de empleades que saben dicho lenguaje
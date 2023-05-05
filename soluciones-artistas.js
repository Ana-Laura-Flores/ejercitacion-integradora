//EJERCICIO 1

// artistasSolistas, que tome por parámetro un array de artistas y devuelva un array con los artistas que sean solistas
const artistasSolistas = (arrayArtistas) => 
  arrayArtistas.filter(({ solista }) => solista);

/*
const artistasSolistas = (arrayArtistas) => {
  const artistasFiltrados = arrayArtistas.filter(({ solista }) => solista);
  return artistasFiltrados;
};
*/
console.log(artistasSolistas(artistas));

//EJERCICIO2

//artistasPorEdad, que tome un parámetro "edad" y un array de artistas y devuelva un array con les artistas que tengan dicha edad

const artistasPorEdad = (edadArtista, arrayArtistas) => arrayArtistas.filter(
    ({ edad }) => edad === edadArtista
  );
  


console.log(artistasPorEdad(33, artistas));
console.log(artistasPorEdad(40, artistas));

// EJERCICIO 3
//cantidadDeArtistasPorInstrumento, que tome por parámetro un array de artistas y devuelva un objeto donde cada "instrumento" es una propiedad y su valor la cantidad de artistas que tocan dicho instrumento

const cantidadDeArtistasPorInstrumento = (arrayArtistas) => {
  const artistasPorInstrumento = {};
  for (const cadaArtista of arrayArtistas) {
    const { instrumento } = cadaArtista;
    artistasPorInstrumento[instrumento] = arrayArtistas.filter(
      ({ instrumento }) => instrumento === cadaArtista.instrumento
    ).length;
  }
  return artistasPorInstrumento;
};



console.log(cantidadDeArtistasPorInstrumento(artistas))



//EJERCICIO  4

//cantidadDeArtistasPorGenero, que tome por parámetro un array de artistas y devuelva un objeto donde cada "género" es una propiedad y su valor la cantidad de artistas de dicho género

const cantidadDeArtistasPorGenero = (arrayArtistas) => {
  const artistasPorGenero = {}
  for (const cadaArtista of arrayArtistas) {
    const { genero } = cadaArtista
    artistasPorGenero[genero] = arrayArtistas.filter(({ genero }) => genero === cadaArtista.genero).length
  }
  return artistasPorGenero
}

console.log(cantidadDeArtistasPorGenero(artistas))

// EJERCIO 5
//artistasConMasDiscosQue, que tome por parámetro "cantidadDeDiscos" y un array de artistas y devuelva un array con les artistas que tiene más de esa cantidad de discos, ordenados de mayor a menor según cantidad de discos

const artistasConMasDiscosQue = (cantidadDeDiscos, arrayArtistas) => {
  const cantidadDiscosFiltrados = arrayArtistas.filter((cadaArtista) => cadaArtista.discos.length > cantidadDeDiscos)
  return cantidadDiscosFiltrados.toSorted((a, b) => b.discos.length - a.discos.length)
}
console.log(artistasConMasDiscosQue(8, artistas))

// const artistasConMasDiscosQue = (cantidadDeDiscos, arrayArtistas) => {
//   const cantidadDiscosFiltrados = arrayArtistas.filter((cadaArtista) => cadaArtista.discos.length > cantidadDeDiscos)
//   return cantidadDiscosFiltrados.toSorted((a, b) => b.discos.length - a.discos.length)
// }
// console.log(artistasConMasDiscosQue(8, artistas))

// EJERCICIO 6
//artistaConMasEntradasVendidas, que tome por parámetro un array de artistas y devuelva el objeto artista que vendió más entradas en su último recital

const artistaConMasEntradasVendidas = (arrayArtistas) => {
  let artistaQueMasVendio = {}
  let acc = 0
  for (const cadaArtista of arrayArtistas) {
    const { entradasVendidas } = cadaArtista.ultimoRecital
    if (entradasVendidas > acc){
      acc = entradasVendidas
      artistaQueMasVendio = cadaArtista
    }
  }
  return artistaQueMasVendio
}
console.log(artistaConMasEntradasVendidas(artistas))

const artistasConMasEntradasVendidas2 = (arrayArtistas) =>{
  const artistasOrdenados = arrayArtistas.toSorted((a, b)=> b.ultimoRecital.entradasVendidas - a.ultimoRecital.entradasVendidas)
  return artistasOrdenados[0]
}
console.log(artistasConMasEntradasVendidas2(artistas))

// EJERCICIO 7
// artistaConMayorRecaudacion, que tome por parámetro un array de artistas y devuelva el objeto artista que más recaudó en su último recital (entradasVendidas * costoEntradas)
const artistaConMayorRecaudacion = (arrayArtistas) =>{
  let artistaQueMasRecaudo = {}
  let acc = 0
  for (const cadaArtista of arrayArtistas){
    const { entradasVendidas, costoEntradas } = cadaArtista.ultimoRecital
    if((entradasVendidas * costoEntradas > acc)){
      acc = entradasVendidas * costoEntradas
      artistaQueMasRecaudo = cadaArtista
    }
  }
  return artistaQueMasRecaudo
}

console.log(artistaConMayorRecaudacion(artistas))
const artistaConMayorRecaudacion2 = (artistas) => {
  const arrayModificado = artistas.map(artista =>{
    const { ultimoRecital: { entradasVendidas, costoEntradas} } = artista
    const recaudacionTotal =entradasVendidas * costoEntradas
    return {
      ...artista,
      recaudacionTotal
    }
  })
  const arrayOrdenado = arrayModificado.toSorted((a, b) => b.recaudacionTotal - a.recaudacionTotal)
  return arrayOrdenado[0]
}

console.log(artistaConMayorRecaudacion2(artistas))
// const artistaConMayorRecaudacion = (arrayArtistas) =>{
//   let artistaQueMasRecaudo = {}
  
//   let recaudacionArtistas = arrayArtistas.map((cadaArtista) => cadaArtista.ultimoRecital.entradasVendidas)
//   let nombreArtistas = arrayArtistas.map((cadaArtista) => cadaArtista.nombre)
//   let acc = 0
//   const test = {
//     nombre: nombreArtistas,
//     recaudacion: recaudacionArtistas
//   }
//   if (recaudacionArtistas > acc){
//     acc = recaudacionArtistas
//   }
//   console.log(acc)
//   if (acc === recaudacionArtistas){
//     return nombreArtistas
//   }
// }


//var doubles = numbers.map(function(x) {
// return x * 2;

// let numerosMasDiez= numeros.map(function(element){
//  return element + 10;
//})

//EJERCICIO 8
//artistasConDiscoEnAnio, que tome por parámetro un parámetro "anio", y devuelva true un array con los artistas que tengan publicado al menos un disco en dicho año
const artistasConDiscoEnAnio2 = (anio, artistas) => {
  return artistas.some(artista => {
    for(const disco of artista.discos){
      if(disco.anioLanzamiento === anio){
        return true
      }
    }
  })
}
console.log(artistasConDiscoEnAnio2(1993, artistas))


const artistasConDiscoEnAnio = (anio, arrayArtistas) => {
  const aniosDiscos = []
  for (const cadaArtista of arrayArtistas){
    //console.log(cadaArtista.nombre)
    for (const disco of cadaArtista.discos){
      //console.log(disco)
      if(disco.anioLanzamiento === anio){
      console.log(disco.anioLanzamiento) 
        //console.log(cadaArtista)
        aniosDiscos.push(cadaArtista)
        //console.log(disco.anioLanzamiento)
      
        }
      }
    }
    return aniosDiscos
  }
  console.log(artistasConDiscoEnAnio(1993, artistas))
    //const anioLanzamiento = cadaArtista.discos
    //console.log(cadaArtista.discos)
    
    //console.log(cadaArtista)
    // for (const disco in cadaArtista.discos){
    //   console.log(disco)
    //   const artistasDiscosPublicados = cadaArtista.discos.some(anio => anio === disco.anioLanzamiento)
    //   console.log(artistasDiscosPublicados)
    //console.log(anioLanzamiento)
    
    //console.log(artistasDiscosPublicados)
    //}
    
   //EJERCICIO 9
   //artistaConMasCopias, que devuelva el objeto artista que más copias de discos en total vendió

   const artistaConMasCopias2 = () => {
    const artistaRecords = artistas.map(artista => {
      let cantidadVendida = 0
      for (const disco of artista.discos) {
        cantidadVendida += disco.copiasVendidas
      }
      return { 
        ...artista, 
        totalVendido: cantidadVendida 
      }
    })
    return artistaRecords.toSorted((a, b) => b.totalVendido - a.totalVendido)[0]
  }
  console.log(artistaConMasCopias2(artistas))
  const artistaConMasCopias = () => {
    const artistaRecords = artistas.map(artista => {
      let cantidadVendida = 0
      for (const disco of artista.discos) {
        cantidadVendida += disco.copiasVendidas
      }
      return { 
        ...artista, 
        totalVendido: cantidadVendida 
      }
    })
    let mayorVenta = 0
    let mejorArtista = {}
    for (const artista of artistaRecords) {
      if (mayorVenta < artista.totalVendido) {
        mayorVenta = artista.totalVendido
        mejorArtista = artista
      }
    }
    return mejorArtista
  }

//    const artistaConMasCopias = (arrayArtistas) => {
//     let artistaQueMasVendio = {}
    
//     for (const cadaArtista of arrayArtistas) {
//       console.log(cadaArtista)
//       let acc = 0
//        for (const discos of cadaArtista.discos){
//          const { copiasVendidas } = discos
//          if (discos === cadaArtista.discos){
//            acc += copiasVendidas
//          }
//          console.log(acc)
//        }
     
      
//     }
//     //return artistaQueMasVendio
//   }
   
// artistaConMasCopias(artistas)

// const artistaConMasCopias = (artistas) => {
//   let masCopias = {}
//   let totalCopiasVendidas = 0

//   for (let i = 0; i < artistas.length; i++) {
//       let totalCopiasVendidasPorArtista = 0

//       const arrayDiscos = artistas[i].discos
//       for(let j = 0; j < arrayDiscos.length; j++) {
//           totalCopiasVendidasPorArtista += arrayDiscos[j].copiasVendidas
//           if (totalCopiasVendidasPorArtista > totalCopiasVendidas) {
//               totalCopiasVendidas = totalCopiasVendidasPorArtista
//               masCopias = artistas[i]
//           }
//       }
//   }
//   return masCopias
// }

console.log(artistaConMasCopias(artistas))

 
























// const cantidadDeArtistasPorGenero = (arrayArtistas) => {
//     const generoMusical = {}
//     for (const cadaArtista of arrayArtistas){
//         const { genero } = cadaArtista
//         generoMusical[genero] = arrayArtistas.filter(({ genero }) => genero === cadaArtista.genero).length
//     }
// return generoMusical
// }

// console.log(cantidadDeArtistasPorGenero(artistas))
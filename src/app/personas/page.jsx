import Ficha from "./Ficha";

const cargarDatos=()=>{
    return fetch("https://randomuser.me/api/?results=8",{cache:"no-store"})
    .then(res => res.json())
    .then(datos => datos.results)
    console.log(data.results);
}

export default async function Page() {
    const datos= await cargarDatos()
    return (
        <>
        <div className="personas">
          {datos.map((valor, indice)=>
          <Ficha key={indice} valor={valor} />
          )} 
          </div>
        </>
    );
}



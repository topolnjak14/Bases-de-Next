"use client"

import Boton from "./Boton";
import Image from "next/image";

const Ficha = ({valor}) => {
    const cargador=({src, width}) =>{
        return `${src}?w=${width}`
    }

    return (
        <>
          <div className="persona">
            <h3>{valor.name.first} </h3>
            <Image
            loader={cargador}
             src={valor.picture.large} 
             width={125}
             height={125}
             alt="imagenes"
              />
            <div>
                <Boton valor={valor} />
            </div>
                
          </div>  
        </>
    );
}

export default Ficha;

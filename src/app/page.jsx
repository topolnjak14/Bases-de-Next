"use client"
 
import Image from "next/image";
import imagen2 from "../../public/imagenes/505584.jpg";

const cargador=({src, width}) => {
  return `https://blog.latam.playstation.com/tachyon/sites/3/2023/02/e9e18e7540706a6f38781be9b574e04f29206bee.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1${src}?w=${width}`
}

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <div className="caja">
        <Image
        src="/imagenes/505584.jpg"
        width={200}
        height={150}
        />
      </div>
      <div className="caja">
        <Image src={imagen2} width={200} height={150}/>
      </div>
      <div className="caja">
         <Image loader={cargador} src={"miImagen.jpg"}
          width={200}
          height={150}
        /> 
      </div>
    </main>
  )
}


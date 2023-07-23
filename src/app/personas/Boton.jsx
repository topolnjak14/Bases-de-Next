"use client"

const Boton = ({valor}) => {
    const masinfo = () =>{
        alert(`El apellido ${valor.name.first} de es ${valor.name.last}`)
    }

    return (
        <>
            <button onClick={masinfo}>Info</button>
        </>
    );
}

export default Boton;

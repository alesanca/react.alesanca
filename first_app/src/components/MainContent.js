import React from "react";

function MainContent(){

    //Aquí declaramos las variables que vamos a utilizar
    const content = "contenido";
    const principal = "principal";
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    //Comprobamos la hora del día y lo que devolver

    if(hours < 12){
        timeOfDay = "Good morning";
    } else if (hours >= 12 && hours < 20) {
        timeOfDay = "Good afternoon";
    }else{
        timeOfDay = "Good night";
    }

    //Si queremos usar puro JS basta con ponerlo entre {}

    const styles = {
        color: '#FF2D00',
        fontSize: '24px'
    }

    return (
        //Esto es JSX, compila HTML
        //Otra forma de poner el contenido de debajo es:
        // <h2> Este es mi {`${content} ${principal}`}
        <div className="MainContent">
            <h2 style={styles}> Este es mi {content + " " + principal}</h2>
            <h2> {`${timeOfDay}`} </h2>
        </div>
    )
}

export default MainContent;

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { collection, getDocs, getDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Services/Firebase";
//sweetalert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

export const Show = () => {
    //1-configuramos los hooks (useState, useEffect )

    // useState = la funcion useState devuelve un valor con estado y una funcion para actualizarlo.

    const [books, setBooks] = useState([]);


    //2- Referenciamos a la DB firestore
    const booksCollection = collection(db,"books");

    //3- creamos funcion para mostrar TODOS los docs
    const getBooks = async () => {
        const data = await getDocs(booksCollection)
        console.log(data.docs );
        setBooks(
            data.docs.map((doc) =>({...doc.data(), id:doc.id}))
        )
        console.log(books);
    }

    //4- creamos una funcion para eliminar un doc

    //5- creamos una funcion de confirmacion para sweetalert

    //6-usamos useEffect 

    useEffect(() => {
        getBooks()
    }, [])



    //7-devolvemos vista de nuestro componente

    return (
        <div>Show</div>
    )
}

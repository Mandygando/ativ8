import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [semestres, setsemestres] = useState([])

    useEffect(()=>{
        setsemestres(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('semestres')) || []
    }
    function excluir(i){ 
      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 
        window.localStorage.setItem('semestres', JSON.stringify(itens))
        setsemestres(itens)
    }
    }

    return (
        <Pagina titulo="semestres">

            <Link href="/semestres/formSem" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data de início</th>
                        <th>Data de fim</th>
                    </tr>
                </thead>
                <tbody>
                {semestres.map((c,index) =>(
		            <tr key={index}>
                        <td>{c.nome}</td>
                        <td>{c.dtInicio}</td>
                        <td>{c.dtFim}</td>
                        <td> 
                        <BsFillTrash3Fill onClick={() => excluir(index)} className="text-danger me-2"/> 
                        <Link href={'/semestres/' + index}>
                            <BsPencilFill /> 
                        </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
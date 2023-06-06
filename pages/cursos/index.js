import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [cursos, setCursos] = useState([])

    useEffect(()=>{
        setCursos(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('cursos')) || []
    }

    function excluir(i){ 

      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 

        window.localStorage.setItem('cursos', JSON.stringify(itens))
        setCursos(itens)
    }}

    return (
        <Pagina titulo="cursos">

            <Link href="/cursos/formCur" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Nome</th>
                        <th>Duração</th>
                        <th>Modalidade</th>
                        
                    </tr>
                </thead>
                 <tbody>
                {cursos.map((c,index) =>(
		            <tr key={index}>
                        <td> {c.nome}</td>
                        <td>{c.duracao}</td>
                        <td>{c.modalidade}</td>
                        <td> 
                            
                        <BsFillTrash3Fill onClick={() => excluir(index)} className="text-danger me-2"/> 
                        <Link href={'/cursos/' + index}>
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
import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(()=>{
        setDisciplinas(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('disciplinas')) || []
    }

    function excluir(i){ 

      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 

        window.localStorage.setItem('disciplinas', JSON.stringify(itens))
        setDisciplinas(itens)
    }
    }

    return (
        <Pagina titulo="Disciplinas">

            <Link href="/disciplinas/formDis" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Nome</th>
                        <th>Curso</th>
                        
                    </tr>
                </thead>
                <tbody>
                {disciplinas.map((d,index) =>(
		             <tr key={index}>
                        <td>{d.nome}</td>
                        <td>{d.curso}</td>
                        <td> 
                        <BsFillTrash3Fill onClick={() => excluir(index)} className="text-danger me-2"/> 
                        <Link href={'/disciplinas/' + index}>
                            <BsPencilFill/> 
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
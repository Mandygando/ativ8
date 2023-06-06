import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(()=>{
        setAlunos(getAll())
    },[])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('alunos')) || []
    }

    function excluir(i){ 

      if(confirm("Deseja realmente excluir o registro?")) { 
        const itens = getAll()
        itens.splice(i, 1) 

        window.localStorage.setItem('alunos', JSON.stringify(itens))
        setAlunos(itens)
    }
    }

    return (
        <Pagina titulo="alunos">

            <Link href="/alunos/formAlu" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Nome</th>
                        <th>CPF</th>
                        <th>Matrícula</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Complemento</th>
                        <th>Numero</th>
                        <th>Bairro</th>
                        
                    </tr>
                </thead>
                <tbody>
                {alunos.map((p,index) =>(
		            <tr key={index}>
                        <td>{p.nome}</td>
                        <td>{p.cpf}</td>
                        <td>{p.matricula}</td> 
                        <td>{p.email}</td>
                        <td>{p.telefone}</td>
                        <td>{p.cep}</td>
                        <td> {p.logradouro}</td>
                        <td>{p.complemento}</td>
                        <td>{p.numero}</td>
                        <td> {p.bairro}</td>
                        <td>
                        <BsFillTrash3Fill onClick={() => excluir(index)} className="text-danger me-2"/> 
                        
                        <Link href={'/alunos/' + index}>
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
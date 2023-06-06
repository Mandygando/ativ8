import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'

const id = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm();
  
    useEffect(()=>{

       if(query.id) { 
      const cursos = JSON.parse(window.localStorage.getItem('cursos'))
      const curso = cursos[query.id]

      for(let campo in curso) {
          setValue(campo, curso[campo])
      }
  }},[query.id])
  
    function salvar(dados) {

      const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
      cursos.splice(query.id, 1, dados)

      window.localStorage.setItem('cursos', JSON.stringify(cursos))
      push("/cursos")
    }

    return (
        <Pagina titulo="cursos">
            <Form>
                
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control type="text" {...register('duracao')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control type="text" {...register('modalidade')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/cursos">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default id
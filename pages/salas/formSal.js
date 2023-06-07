import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import salaValidator from '@/validators/salaValidator'

const formSal = () => {

    const {push} = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm()
  
    function salvar(dados) {
      const salas = JSON.parse(window.localStorage.getItem('salas')) || []
      salas.push(dados)
      window.localStorage.setItem('salas', JSON.stringify(salas))
      push("/salas")
    }

    return (
        <Pagina titulo="salas">
            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome',salaValidator.nome)} placeholder="Digite o Nome do Sala" />
                </Form.Group>
                {
                    errors.nome &&
                    <small className='mt-1 text-danger'>{errors.nome.message}</small>
                }

                <Form.Group className="mb-3" controlId="capacidade">
                    <Form.Label>Capacidade: </Form.Label>
                    <Form.Control isInvalid={errors.capacidade} type="text" {...register('capacidade',salaValidator.capacidade)} placeholder="Qual a Capacidade da Sala?" />
                </Form.Group>
                {
                    errors.capacidade &&
                    <small className='mt-1 text-danger'>{errors.capacidade.message}</small>
                }


                <Form.Group className="mb-3" controlId="tipo">
                    <Form.Label>Tipo: </Form.Label>
                    <Form.Control isInvalid={errors.tipo} type="text" {...register('tipo',salaValidator.tipo)} placeholder="Qual o Tipo da Sala?"/>
                </Form.Group>
                {
                    errors.tipo &&
                    <small className='mt-1 text-danger'>{errors.tipo.message}</small>
                }


            
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/salas">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default formSal
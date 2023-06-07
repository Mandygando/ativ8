import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import semestreValidator from '@/validators/semestreValidator'

const formSem = () => {

    const {push} = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm();

    function salvar(dados) {

    const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
    semestres.push(dados)

    window.localStorage.setItem('semestres', JSON.stringify(semestres))
    push("/semestres")
  }

    return (
        <Pagina titulo="Semestres">
            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome',semestreValidator.nome)} placeholder="Digite o Semestre" />
                </Form.Group>
                {
                    errors.nome &&
                    <small className='mt-1 text-danger'>{errors.nome.message}</small>
                }

                <Form.Group className="mb-3" controlId="dtInicio">
                    <Form.Label>Data de inicio: </Form.Label>
                    <Form.Control isInvalid={errors.dtInicio} type="text" {...register('dtInicio',semestreValidator.dtInicio)} placeholder="Digite a data de inicio" />
                </Form.Group>
                {
                    errors.dtInicio &&
                    <small className='mt-1 text-danger'>{errors.dtInicio.message}</small>
                }


                <Form.Group className="mb-3" controlId="dtFim">
                    <Form.Label>Data de fim: </Form.Label>
                    <Form.Control isInvalid={errors.dtFim} type="text" {...register('dtFim',semestreValidator.dtFim)} placeholder="Digite a data de fim" />
                </Form.Group>
                {
                    errors.dtFim &&
                    <small className='mt-1 text-danger'>{errors.dtFim.message}</small>
                }


            
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/semestres">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default formSem
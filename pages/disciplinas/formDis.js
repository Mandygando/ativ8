import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import disciplinaValidator from '@/validators/disciplinaValidator'

const formDis = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm();

  function salvar(dados) {

    const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
    disciplinas.push(dados)

    window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    push("/disciplinas")
  }

    return (
        <Pagina titulo="Disciplina">
            <Form>

            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome',disciplinaValidator.nome)} placeholder="Digite o nome da Disciplina" />
                </Form.Group>
                {
                    errors.nome &&
                    <small className='mt-1 text-danger'>{errors.nome.message}</small>
                }

                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control isInvalid={errors.modalidade} type="text"  {...register('modalidade',disciplinaValidator.modalidade)} placeholder="Digite a Modalidade" />
                </Form.Group>
                {
                    errors.modalidade &&
                    <small className='mt-1 text-danger'>{errors.modalidade.message}</small>
                }

                <Form.Group className="mb-3 " controlId="duracao">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control isInvalid={errors.duracao} type="text"  {...register('duracao',disciplinaValidator.duracao)} placeholder="Digite a Duração do curso" />
                </Form.Group>
                {
                    errors.duracao &&
                    <small className='mt-1 text-danger'>{errors.duracao.message}</small>
                }

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/disciplinas">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default formDis
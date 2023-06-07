import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import professorValidator from '@/validators/professorValidator'

const formPro = () => {

    const {push} = useRouter()
  const { register, handleSubmit, formState: {errors} } = useForm()

  function salvar(dados) {

    const professores = JSON.parse(window.localStorage.getItem('professores')) || []
    professores.push(dados)

     window.localStorage.setItem('professores', JSON.stringify(professores))
    push("/professores")
}

    return (
        <Pagina titulo="professores">
            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', professorValidator.nome)} placeholder="Digite o Nome do professor" />
                </Form.Group>
                {
                    errors.nome &&
                    <small className='mt-1 text-danger'>{errors.nome.message}</small>
                }

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control isInvalid={errors.cpf} type="text" {...register('cpf',professorValidator.cpf)} placeholder="Digite o CPF do professor"/>
                </Form.Group>
                {
                    errors.cpf &&
                    <small className='mt-1 text-danger'>{errors.cpf.message}</small>
                }

                <Form.Group className="mb-3" controlId="salario">
                    <Form.Label>Salário: </Form.Label>
                    <Form.Control isInvalid={errors.salario} type="text" {...register('salario',professorValidator.salario)} placeholder="Digite o Salário do professor"/>
                </Form.Group>
                {
                    errors.salario &&
                    <small className='mt-1 text-danger'>{errors.salario.message}</small>
                }

<Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" {...register('email',professorValidator.email)} placeholder="Digite o Email do professor"/>
                </Form.Group>
                {
                    errors.email &&
                    <small className='mt-1 text-danger'>{errors.email.message}</small>
                }

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control isInvalid={errors.telefone} type="text" {...register('telefone',professorValidator.telefone)} placeholder="Digite o Telefone do professor"/>
                </Form.Group>
                {
                    errors.telefone &&
                    <small className='mt-1 text-danger'>{errors.telefone.message}</small>
                }

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control isInvalid={errors.cep} type="text" {...register('cep',professorValidator.cep)} placeholder="Digite o CEP do professor"/>
                </Form.Group>
                {
                    errors.cep &&
                    <small className='mt-1 text-danger'>{errors.cep.message}</small>
                }

                <Form.Group className="mb-3" controlId="logradouro">
                    <Form.Label>Logradouro: </Form.Label>
                    <Form.Control isInvalid={errors.logradouro} type="text" {...register('logradouro',professorValidator.logradouro)} placeholder="Digite o Logradouro do professor" />
                </Form.Group>
                {
                    errors.logradouro &&
                    <small className='mt-1 text-danger'>{errors.logradouro.message}</small>
                }

                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento: </Form.Label>
                    <Form.Control isInvalid={errors.complemento} type="text" {...register('complemento',professorValidator.complemento)} placeholder="Digite um Complemento" />
                </Form.Group>
                {
                    errors.complemento &&
                    <small className='mt-1 text-danger'>{errors.complemento.message}</small>
                }

                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Numero: </Form.Label>
                    <Form.Control isInvalid={errors.numero} type="text" {...register('numero',professorValidator.numero)} placeholder="Digite um Numero"  />
                </Form.Group>
                {
                    errors.numero &&
                    <small className='mt-1 text-danger'>{errors.numero.message}</small>
                }

                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control isInvalid={errors.bairro} type="text" {...register('bairro',professorValidator.bairro)} placeholder="Digite o Bairro"  />
                </Form.Group>
                {
                    errors.bairro &&
                    <small className='mt-1 text-danger'>{errors.bairro.message}</small>
                }


            
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/professores">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default formPro
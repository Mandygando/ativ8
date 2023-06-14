import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import alunoValidator from '@/validators/alunoValidator'
import { mask } from 'remask'

const formAlu = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    function salvar(dados) {

        const alunos = JSON.parse(window.localStorage.getItem('alunos')) || []
        alunos.push(dados)

        window.localStorage.setItem('alunos', JSON.stringify(alunos))
        push("/alunos")
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }

    return (
        <Pagina titulo="alunos">
            <Form>

                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome}
                    mask='A' type="text"
                    {...register('nome', alunoValidator.nome)} 
                    onChange={handleChange} placeholder="Digite o Nome do aluno" />
                </Form.Group>
                {
                    errors.nome &&
                    <small className='mt-1 text-danger'>{errors.nome.message}</small>
                }

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control isInvalid={errors.cpf}
                        mask='999.999.999-99' type="text"
                        {...register('cpf', alunoValidator.cpf)}
                        onChange={handleChange} placeholder="Digite o CPF do aluno" />
                </Form.Group>
                {
                    errors.cpf &&
                    <small className='mt-1 text-danger'>{errors.cpf.message}</small>
                }

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matrícula: </Form.Label>
                    <Form.Control isInvalid={errors.matricula} type="text" {...register('matricula', alunoValidator.matricula)} placeholder="Digite a Matrícula do aluno" />
                </Form.Group>
                {
                    errors.matricula &&
                    <small className='mt-1 text-danger'>{errors.matricula.message}</small>
                }

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" {...register('email', alunoValidator.email)} placeholder="Digite o Email do aluno" />
                </Form.Group>
                {
                    errors.email &&
                    <small className='mt-1 text-danger'>{errors.email.message}</small>
                }

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control isInvalid={errors.telefone} type="text" {...register('telefone', alunoValidator.telefone)} placeholder="Digite o Telefone do aluno" />
                </Form.Group>
                {
                    errors.telefone &&
                    <small className='mt-1 text-danger'>{errors.telefone.message}</small>
                }

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control isInvalid={errors.cep} type="text" {...register('cep', alunoValidator.cep)} placeholder="Digite o CEP do aluno" />
                </Form.Group>
                {
                    errors.cep &&
                    <small className='mt-1 text-danger'>{errors.cep.message}</small>
                }

                <Form.Group className="mb-3" controlId="logradouro">
                    <Form.Label>Logradouro: </Form.Label>
                    <Form.Control isInvalid={errors.logradouro} type="text" {...register('logradouro', alunoValidator.logradouro)} placeholder="Digite o Logradouro do aluno" />
                </Form.Group>
                {
                    errors.logradouro &&
                    <small className='mt-1 text-danger'>{errors.logradouro.message}</small>
                }

                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento: </Form.Label>
                    <Form.Control isInvalid={errors.complemento} type="text" {...register('complemento', alunoValidator.complemento)} placeholder="Digite um Complemento" />
                </Form.Group>
                {
                    errors.complemento &&
                    <small className='mt-1 text-danger'>{errors.complemento.message}</small>
                }

                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Numero: </Form.Label>
                    <Form.Control isInvalid={errors.numero} type="text" {...register('numero', alunoValidator.numero)} placeholder="Digite um Numero" />
                </Form.Group>
                {
                    errors.numero &&
                    <small className='mt-1 text-danger'>{errors.numero.message}</small>
                }

                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control isInvalid={errors.bairro} type="text" {...register('bairro', alunoValidator.bairro)} placeholder="Digite o Bairro" />
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

                    <Link className="ms-2 btn btn-danger" href="/alunos">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default formAlu
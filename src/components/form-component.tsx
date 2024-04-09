import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import Sucecss from '../assets/login-success.webp'

const loginFormSchema = z.object({
  email: z
    .string()
    .email('Formato de e-mail inválido.')
    .refine(value => value === 'pucpr@aluno.com', {
      message: 'E-mail incorreto.'
    }),
  password: z.coerce.string()
    .min(6, { message: 'A senha precisa ter no mínimo 6 caracteres.' })
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema)
  })

  const [isLogged, setIsLogged] = useState(false)

  const handleLogin = () => setIsLogged(true)

  return (
    <div className='min-h-screen bg-gray-400 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div
          className='absolute inset-0 bg-gradient-to-r from-red-800 to-red-950 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'>
        </div>
        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          {!isLogged ? (
            <form className='max-w-md mx-auto' onSubmit={handleSubmit(handleLogin)}>
              <div>
                <h1 className='text-2xl font-semibold'>PUCPR: Formulário com React + Zod</h1>
              </div>
              <div className='divide-y divide-gray-200'>
                <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                  <div className='relative'>
                    <label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                      Insira seu e-mail
                    </label>
                    <input
                      id='email'
                      type='text'
                      className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                      placeholder='email'
                      {...register('email')}
                    />
                  </div>

                  <div className='relative'>
                    <label className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                      Insira sua senha
                    </label>
                    <input
                      id='password'
                      type='password'
                      className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                      placeholder='password'
                      {...register('password')}
                    />
                  </div>
                  
                  {(errors.email || errors.password) && <p className='text-red-500'>Usuário ou senha incorretos!</p>}
                  <div className='relative'>
                    <button type='submit' className='bg-red-500 text-white rounded-md px-2 py-1'>
                      Acessar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div>
              <img src={Sucecss} alt="" className='w-[300px] h-[300px]' />
              <h1 className='text-2xl font-semibold text-center'>Acesso realizado com sucesso!</h1>
              <h1 className='text-2xl font-semibold'>Seja bem-vindo ao AVA da PUCPR.</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

import { login } from "./login"

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    const mockPassword = '123456'
    it('Deve exibir um alert com boas vindas caso email e senha sejam válidos', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso email ou senha sejam inválidos', async() => {
        const response = await login('email@invalido.com', '123')
        expect(response).toBeFalsy()
    })
})
import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false)
    navigate('/')
  }

  const accountInfo = () => navigate('/conta/1')

  const userInfo = () => navigate('/infoconta')

  const location = useLocation()

  return (
    <Flex backgroundColor='orange' padding='5px' justifyContent='space-between' alignItems='center'>
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
          <Box>

            { location.pathname !== '/infoconta' && (
            <Button onClick={() => userInfo()} marginRight='10px'>
              Informações de usuário
            </Button>
            )}

            { location.pathname !== '/conta/1' && (
              <Button onClick={() => accountInfo()} marginRight='10px'>
              Informações da conta
              </Button>
            )}

            <Button
              onClick={() => logout()}
            >
              Sair
            </Button>
          </Box>  
          </>
        )
      }
    </Flex>

  )
}

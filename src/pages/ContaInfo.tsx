import { Box, Center, Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo"
import { useEffect, useState } from "react"
import { api } from "../api"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const ContaInfo = () => {
    const [ userData, setUserData ] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])



    return (
        <>
        <Center>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações de usuário
            </Text>
        </Center>
        <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={5}>
        <CardInfo mainContent={'Nome'} content={`${userData?.name}`}/>
        <CardInfo mainContent={'E-mail'} content={`${userData?.email}`}/>
        </SimpleGrid>
        </Center>
        </>
    )
}

export default ContaInfo

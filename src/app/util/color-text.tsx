import { Text } from "@chakra-ui/react"

export default function ColorFormat(num:number){
    if (num > 0) {
        return <Text color={'green.600'}>{num}</Text>
    }else if(num < 0){
        return <Text color={'red.600'}>{num}</Text>
    }else{
        return <Text>{num}</Text>
    }
}
import { useColorModeValue } from "@chakra-ui/react"

export const useThemedColors = () => {
 const bgColor = useColorModeValue('black', 'white')
 const color = useColorModeValue('white', 'black')

 return {
    color,
    bgColor
 }
}
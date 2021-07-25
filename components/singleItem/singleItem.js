import { Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"


export default function SingleItem  ({item}) {
    return (
        <Box maxW = 'md' width = {200} p = {10}>
            <Box 
                height = '25px' color = 'red' border = '1px' width = '75px' textAlign = 'center' padding = '2px'
                borderColor = {item.isRollback ? 'red' : 'white'}>{item.isRollback ? 'Rollback': ''}</Box>
            <Image src = {item.imageUrl} alt = {item.name}/>
            <Box height = '25px' fontWeight = 'extrabold' mt = '10px'>${item.linePrice}</Box>
            <Box height = '25px'>{item.pricePerUnit}</Box>
            <Box height = '25px'>{item.finalCostByWeight ? 'Final cost by weight': ''}</Box>
            <Box h = '110px' color = 'black' fontSize = '15'>{item.name}</Box>
            <Box height = {5} color = 'black' fontSize = '15'>Quantity: {item.quantity}</Box>
        </Box>
    )
}
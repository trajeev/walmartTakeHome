import { Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"


export default function SingleItem  ({item}) {
    return (
        <Box maxW = 'md' width = {200} p = {10}>
            <Box height = '5px'>{item.isRollback ? 'Rollout': ''}</Box>
            <Image src = {item.imageUrl} alt = {item.name}/>
            <Box height = '25px' fontWeight = 'extrabold'>${item.linePrice}</Box>
            <Box height = '25px'>{item.pricePerUnit}</Box>
            <Box height = '25px'>{item.finalCostByWeight ? 'Final cost by weight': ''}</Box>
            <Box h = '110px' color = 'black' fontSize = '15'>{item.name}</Box>
            <Box height = {5} color = 'black' fontSize = '15'>Quantity: {item.quantity}</Box>
        </Box>
    )
}
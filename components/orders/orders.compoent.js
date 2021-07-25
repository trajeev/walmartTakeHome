import {Table,Thead,Tbody,Tr,Th,Td} from "@chakra-ui/react"
import { useState, useEffect, useRef } from "react"
import {useDisclosure} from '@chakra-ui/react'
import OrderModal from "../orderModal/orderModal"
import classes from './orders.module.css'
import axios from "axios"

// This component is used to display orders in the form of table.
export default function OrdersTable ({orders}) {
    const {isOpen, onOpen, onClose} = useDisclosure() //useDisclosure hook used to toggle order Modal
    const [order, setOrder] = useState()
    const products = useRef() //useRef is used instead of useState to avoid rerendering.

    // useEffect is used to collect products data from backend api
    useEffect(() => {
        axios.get('api/products')
        .then(response => products.current = response.data)
    },[])

    // ModalOpen function is used to collect all products from an order.
    const ModalOpen = ({items, orderId}) => {
        onOpen()
        const foundItems = []
        for (const item of items) { 
            let foundItem = products.current.find(product => product.offerId === item.offerId)
            foundItem = {...foundItem, quantity: item.quantity}
            foundItems.push(foundItem)
        }
        const sentOrder = {id: orderId, orders: foundItems}
        setOrder(sentOrder)
    }

    return (
        <div >
            <Table border = "2px" borderColor = 'blackAlpha.600' borderTopRadius = '1g' mb = {10}>
                <Thead>
                    <Tr borderBottom = '2px' borderColor = 'blackalpha.600'>
                        <Th textAlign = "center" color = 'black' fontSize = {15} textTransform = 'none'>Order #</Th>
                        <Th textAlign = "center" color = 'black' fontSize = {15} textTransform = 'none'>Order Date</Th>
                        <Th textAlign = "center" color = 'black' fontSize = {15} textTransform = 'none'>Delivered</Th>
                        <Th textAlign = "center" color = 'black' fontSize = {15} textTransform = 'none'>Customer ID</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td textAlign = "center">{`{orderId}`}</Td>
                        <Td textAlign = "center">{`{customerId}`}</Td>
                        <Td textAlign = "center">{`{MM/DD/YYYY}`}</Td>
                        <Td textAlign = "center">{`{IsDelivered}`}</Td>
                    </Tr>
                    {orders.map(order => {
                        const {orderCreatedAt} = order
                        {/* Next few steps are used to format date to MM/DD/YYYY */}
                        let newDate = new Date(orderCreatedAt)
                        let month = newDate.getMonth() + 1 <10 ? '0' + (newDate.getMonth() + 1): newDate.getMonth() + 1
                        let day = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate()
                        let year = newDate.getFullYear()
                        newDate = month + '/' + day + '/' + year
                        
                        return <Tr key = {order.orderId} className = {classes.row} 
                                borderTop = '2px' borderColor = 'blackAlpha.400'  onClick = {()=> ModalOpen(order)}>
                            <Td 
                                textAlign = "center">
                                {order.orderId}
                            </Td>
                            <Td textAlign = "center">{order.customerId}</Td>
                            <Td textAlign = "center">{newDate}</Td>
                            <Td textAlign = "center">{order.isDeliveved? 'Yes': 'No'}</Td>
                        </Tr>
                    })}
                </Tbody>
            </Table>
            <OrderModal isOpen = {isOpen} onClose = {onClose} order = {order}/>
        </div>
        
        )
}
import {Modal,ModalOverlay,ModalContent,ModalHeader, ModalBody, ModalCloseButton, ModalFooter} from "@chakra-ui/react"
import SingleItem from "../singleItem/singleItem"
import classes from './orderModal.module.css'

// This component displays Order Modal
export default function OrderModal ({isOpen, onClose, order}) {
    // This is checked to avoid error in rendering
    if (!order) {
        return null
    }

    const {id, orders} = order
    
    // Below function is used to calculate total price.
    function calculate () {
        let sum = 0
        for (const item of orders) {
            sum += item.quantity * item.linePrice
        }
        return Math.round(sum*100)/100
    }

    return (
        <Modal isOpen = {isOpen} onClose = {onClose} size = {["4xl"]} scrollBehavior = "inside">
            <ModalOverlay />
            <ModalContent h = {700}>
                <ModalHeader>
                    <span style = {{marginRight: '8px'}}>Order #</span> 
                    <span style = {{fontWeight: '400'}}>{id}</span>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody fontSize = 'small' width = '2xl' margin= 'auto'>
                    <div className = {classes.modalbody}>
                    {orders.map(list => (
                        <div key = {list.offerId}>
                            <SingleItem item = {list}/>
                        </div>
                    ))}
                    </div>
                </ModalBody>
                <ModalFooter pos = 'relative' right = '20'>
                    <span style = {{fontWeight: 'bold', marginRight: '5px'}}>Total: </span>
                    <span>${calculate()}</span>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
} 
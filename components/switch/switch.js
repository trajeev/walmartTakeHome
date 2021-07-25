import {Switch} from '@chakra-ui/react'
import { FormLabel } from '@chakra-ui/form-control'
import classes from './switch.module.css'

export default function filterOrders({onchange}) {
    return (
        <div className = {classes.switch}>
            <FormLabel>Show Delivered</FormLabel>
            <Switch onChange = {onchange}/>
        </div>
        )
}
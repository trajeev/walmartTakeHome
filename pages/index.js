import { useEffect, useState, useRef } from "react"
import OrdersTable from "../components/orders/orders.compoent"
import axios from "axios"
import FilterOrders from "../components/switch/switch"
// import '../../styles/globals.css'

export default function Orders () {
    const [orders, setOrders] = useState([])
    const [filter, switchFilter] = useState(true)
    const orginalOrders = useRef([])

    useEffect(() => {
        axios.get('api/orders')
            .then(response => {
                setOrders((response.data))
                orginalOrders.current = response.data
            })        
    },[])

    if (!orders) {
        return <div>...Loading</div>
    }

    const filterFunction = () => {
        if (filter) {
            const copy = [...orders]
            const filteredOrders = copy.filter(order => order.isDeliveved === true)
            setOrders(filteredOrders)
            switchFilter(false)
        }else {
            setOrders(orginalOrders.current)
            switchFilter(true)
        }
    }


    return <div className = 'orders'>
            <div className = 'orders-header'>
                <h1 style = {{fontWeight: 'bold'}}>Orders ({orders.length})</h1>
                <FilterOrders onchange = {filterFunction}/>
            </div>
            <OrdersTable orders = {orders} />
        </div>
}


import { useEffect, useState, useRef } from "react"
import OrdersTable from "../components/orders/orders.compoent"
import axios from "axios"
import FilterOrders from "../components/switch/switch"
import { Spinner } from "@chakra-ui/spinner"
import { Heading } from "@chakra-ui/react"

// The main page where Orders are shown
export default function Orders () {
  const [orders, setOrders] = useState([]) //useState is used to store the orders data collected from backend
  const [filter, switchFilter] = useState(true) //This useState is used for filtering orders based on isdelivered = true
  const orginalOrders = useRef([]) //UseRef is used to store original orders data to avoid calling backend repeatedly

  // useEffect is used to collect data from backend and set orders and orginalOrders variables.
  useEffect(() => {
    axios.get('api/orders')
      .then(response => {
        setOrders((response.data))
        orginalOrders.current = response.data
      })        
  },[])

  // This component is rendered when no data is present.
  if (!orders) {
    return <Spinner />
  }

  // This function is used to filter data based on isDelivered = true condidtion.
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


  return (
    <div className = 'orders'>
        <div className = 'orders-header'>
            <Heading size = "sm">Orders ({orders.length})</Heading>
            <FilterOrders onchange = {filterFunction}/>
        </div>
        <OrdersTable orders = {orders} />
    </div>
  )
} 



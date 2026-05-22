import Heading from '@/components/common/Heading'
import React from 'react'
import Cart from './components/Cart'

function page() {
    return (
        <div>
            <Heading title='Cart' />
            <Cart />
        </div>
    )
}

export default page
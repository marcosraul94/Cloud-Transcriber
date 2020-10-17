import React, { useContext } from 'react'
import View from '../common/View'
import { AuthContext } from '../contexts/Auth'

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <View>
            <h1> Home{user && ', you are logged in'} </h1>
        </View>
    )
}

export default Home
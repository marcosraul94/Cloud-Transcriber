import React, { useContext } from 'react'
import View from '../common/View'
import { AuthContext } from '../contexts/Auth'

const Home = () => {
    const { user } = useContext(AuthContext)

    const debounce = (inputFun, milliseconds) => {
      let timeout;
    
      return (...args) => {
        if(!timeout) {
          inputFun(...args);
    
          timeout = setTimeout(
            () => ( timeout = undefined ), 
            milliseconds
          );
        }
      };
    };

    const onClickHandler = debounce(e => {
        console.log(e)
    }, 2000)

    return (
        <View>
            <h1> Home{user && ', you are logged in'} </h1>

            <input onChange={onClickHandler} />
        </View>
    )
}

export default Home
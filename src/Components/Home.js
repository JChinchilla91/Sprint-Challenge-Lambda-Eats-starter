import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
    console.log(history);

    const routeToOrder = event => {
        history.push('/order');
    }

    return (
        <div>
            
            <div className='imgContainer'>
                <img src='https://images.pexels.com/photos/1596888/pexels-photo-1596888.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='Pizza' />
            </div>
            
            <button onClick={routeToOrder}>Yo</button>
      </div>
    );
}

export default Home;
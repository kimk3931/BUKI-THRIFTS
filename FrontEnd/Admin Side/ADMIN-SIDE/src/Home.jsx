import React from 'react'
import 
{ BsFillArchiveFill,  BsPeopleFill, BsCash, BsReceipt}
 from 'react-icons/bs'
 

function Home() {

   
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ORDERS</h3>
                    <BsReceipt className='card_icon'/>
                </div>
                <h1>50</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REVENUE TOTAL</h3>
                    <BsCash className='card_icon'/>
                </div>
                <h1> KSH 333,000</h1>
            </div>
           
        </div>

     
    </main>
  )
}

export default Home
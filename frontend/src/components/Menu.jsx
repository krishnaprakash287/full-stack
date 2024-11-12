import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Guntur, known for its rich culinary heritage, offers a variety of dishes that highlight the vibrant flavors of Andhra cuisine. Key dishes include Guntur Chicken, a spicy chicken preparation with local red chilies, and Andhra Pulao, a fragrant rice dish with spices and vegetables. Gongura Pachadi provides a tangy chutney option, while Mirchi Ka Salan is a spicy curry featuring green chilies and peanuts. For sides, Kakarakaya Fry offers sautéed bitter gourd, and Pulihora (tamarind rice) adds a distinctive tang. Seafood lovers can enjoy Chepala Pulusu, a spicy fish curry, alongside Dondakaya Fry (sautéed ivy gourd). The famous Guntur-style biryani is a fragrant rice dish often made with chicken or mutton, and dessert is rounded off with sweet Gulab Jamun. Together, these dishes exemplify the bold flavors and unique traditions of Guntur, making it a paradise for food lovers.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu

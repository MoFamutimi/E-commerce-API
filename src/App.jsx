import React, { useState, useEffect, useRef } from "react";
import './App.css';
import{AiOutlineSearch, AiOutlineHeart,} from 'react-icons/ai'
import{BsFillHandbagFill} from 'react-icons/bs'
import axios from 'axios'



const App =() => {
  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    let interval;

    const startCarousel = () => {
      interval = setInterval(() => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 3000);
    };

    const stopCarousel = () => {
      clearInterval(interval);
    };
    carousel.addEventListener("mouseenter", stopCarousel);
    carousel.addEventListener("mouseleave", startCarousel);

    startCarousel();
    return () => {
      stopCarousel();
      carousel.removeEventListener("mouseenter", stopCarousel);
      carousel.removeEventListener("mouseleave", startCarousel);
    };
  }, [products]);

  const renderCarouselItems = () => {
    return products.map((product, index) => {
      return (
        <div className="carousel-item" key={index}>
          <div className="card">
            
          </div>
        </div>
      );
    });
  };

  return (
       <div className="main" >
          <div className="header">
            <div className="headtitle">
               <h2>Eflex</h2>
            </div>
            <div className="headerrest">
              <div className="headernames">
              <ul>
                    <li className="different">Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                  </ul>
              </div>
              <div className="carousel" ref={carouselRef}>
                  {renderCarouselItems()}
               </div> 
              <div className="headericons">
                <ul>
                  <li><AiOutlineSearch/></li>
                  <li><BsFillHandbagFill/></li>
                  <li><AiOutlineHeart/></li>
                </ul>
              </div>
              </div>
              </div>

           <div className="secondbody">
           <div className="leftdiv">
           <div className="leftarrowimg" onClick={() => setCarouselIndex(carouselIndex - 1)}>
            <img className="left" src="./src/assets/left.png" alt="image" srcset="" />
             </div>
             </div>
             <div className="secondwrapper">
                 <div className="card1">
                 <div className="card1image">
                     <img className="thebag" src={products[carouselIndex % products.length]?.image}
                     alt={products[carouselIndex % products.length]?.title} />
                 </div>
                  <div className="card1des">
                    <h2 className="text">Fjallraven - Foldsack No. 1 Backpack</h2>
                    <h3 className="words">Your perfect pack for everyday use and walks in the forest.
                    <br/> Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</h3>
                    <button className="btn">Shop Now</button>
                  </div>
                  
                 </div>
                 <div className="card2">
                 <div className="card2image">
                    <img className="thebag" src={products[(carouselIndex + 1) % products.length]?.image}
                      alt={products[(carouselIndex + 1) % products.length]?.title} />
                  </div>
                 <div className="card2des">
                 <h2 className="text">Fjallraven - Foldsack No. 1 Backpack</h2>
                    <h3 className="words">Your perfect pack for everyday use and walks in the forest.
                    <br/> Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</h3>
                    <button className="btn">Shop Now</button>
                 </div>
                 </div>

                 <div className="card3">
                 <div className="card3image">
                   <img className="thebag" src={products[(carouselIndex + 2) % products.length]?.image}
                     alt={products[(carouselIndex + 2) % products.length]?.title} />
                  </div>
                 <div className="card3des">
                 <h2 className="text">Fjallraven - Foldsack No. 1 Backpack</h2>
                    <h3 className="words">Your perfect pack for everyday use and walks in the forest.
                    <br/> Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</h3>
                    <button className="btn">Shop Now</button>
                 </div>
                 </div>
             </div>
             <div className="rightdiv">
             <div className="rightarrowimg" onClick={() => setCarouselIndex(carouselIndex + 1)}>
              <img className="right" src="./src/assets/right.png" alt="image" srcset="" />
            </div>
            </div>
             

           </div>
           
       </div>
  )


}
export default App;



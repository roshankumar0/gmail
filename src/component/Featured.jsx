import React, { useEffect, useState } from 'react';

const Featured = () => {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedOption, setSelectedOption] = useState('one--time');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
                if (data.length > 0) {
                    setCurrentProduct(data[0]);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    const handleImageClick = (product) => {
        setCurrentProduct(product);
    };

    const handleAddToCart = () => {
        for (let i = 0; i < selectedProducts.length; i++) {
            if (selectedProducts[i].id === currentProduct.id) {
                console.log('Product already in cart:', currentProduct);
                return;
            }
        }

        setSelectedProducts(prevProducts => {
            const updatedProducts = [...prevProducts, currentProduct];
            console.log('Selected products:', updatedProducts);
            return updatedProducts;
        });
    };

    const renderStars = (rating) => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

        return (
            <div className='star-rating'>
                {Array.from({ length: fullStars }).map((_, index) => (
                    <span key={`full-${index}`} className="star full">&#9733;</span>
                ))}
                {halfStar && <span key="half" className="star half">&#9733;</span>}
                {Array.from({ length: emptyStars }).map((_, index) => (
                    <span key={`empty-${index}`} className="star empty">&#9733;</span>
                ))}
            </div>
        );
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id);
    };

    if (!currentProduct) {
        return <div>Loading...</div>;
    }

    return (
        <div className='main--container'>
            <div className="left">
                <div className='left--image'>
                    <img src={currentProduct.image} alt="Big display" />
                </div>
                <div className='left--thumbnails'>
                    {products.slice(0, 4).map((product) => (
                        <img
                            key={product.id}
                            src={product.image}
                            alt={product.title}
                            onClick={() => handleImageClick(product)}
                            className={product.image === currentProduct.image ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
            <div className="right">
                <div className="">
                    <div className='right--badge'>
                        <button>Bestseller</button>
                        <button>Award winning</button>
                    </div>
                    <h1><a href="#">{currentProduct.title}</a></h1>
                    <div>
                        <div className='right--rating'>
                            {renderStars(currentProduct.rating.rate)}
                            {currentProduct.rating.rate}
                            <span> ({currentProduct.rating.count} reviews)</span>
                        </div>
                    </div>
                    <div>
                        <span>Choose your order type:</span>
                        <div className='right--price'>
                            <div className='right--select right--delevery'>
                                <div className='right--select--input'>
                                    <input 
                                        type="radio" 
                                        name="radio" 
                                        id="Replenish" 
                                        checked={selectedOption === 'Replenish'}
                                        onChange={handleOptionChange}
                                    />
                                    <label htmlFor="Replenish">Auto Replenish</label>
                                    <p>${currentProduct.price.toFixed(2)}</p>
                                </div>
                                {selectedOption === 'Replenish' && (
                                    <div className='right--select--des'>
                                        <div>
                                            <label htmlFor="select">Delivery every</label>
                                            <select id="select">
                                                <option value="1 month">1 month</option>
                                                <option value="2 months">2 months</option>
                                                <option value="3 months">3 months</option>
                                                <option value="4 months">4 months</option>
                                            </select>
                                        </div>
                                        <ul>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 11" role="presentation">
                                                    <path stroke="currentColor" d="M12.985 1.015 4.5 9.5l-4-4"></path>
                                                </svg>
                                                <span>Free shipping in US</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 11" role="presentation">
                                                    <path stroke="currentColor" d="M12.985 1.015 4.5 9.5l-4-4"></path>
                                                </svg>
                                                <span>Modify, skip or cancel any time</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 11" role="presentation">
                                                    <path stroke="currentColor" d="M12.985 1.015 4.5 9.5l-4-4"></path>
                                                </svg>
                                                <span>Reminder email sent before each replenish date</span>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className='right--select'>
                                <input 
                                    type="radio" 
                                    name="radio" 
                                    id="one--time" 
                                    checked={selectedOption === 'one--time'}
                                    onChange={handleOptionChange}
                                />
                                <label htmlFor="one--time">One time purchase</label>
                                <p>${currentProduct.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <button className='right-cartbtn' onClick={handleAddToCart}>Add to Cart</button>
                        <div className='right--shipping'>
                            <p><img src="https://cdn.shopify.com/s/files/1/1919/1971/files/checkmark_blue_3.png?v=1709173416" alt="" /> 100-day money back guarantee</p>
                            <p><img src="https://cdn.shopify.com/s/files/1/1919/1971/files/checkmark_blue_3.png?v=1709173416" alt="" /> Free return shipping</p>
                        </div>
                    </div>
                    <div className='right--about'>
                        <p><strong>Winner -- the Strategist Beauty 100 award</strong></p>
                        <p>Comprehensive protection against signs of aging and free-radical damage using a proven blend of antioxidants for glowing skin.</p>
                        <p><em>1.0 fl oz / 30 ml</em></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;

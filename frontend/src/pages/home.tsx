export default function Home() {
  const products = [
    { id: 1, name: 'Product 1', image: './crosant.jpg', price: '$10' },
    { id: 2, name: 'Product 2', image: './crosant.jpg', price: '$15' },
    { id: 3, name: 'Product 3', image: './crosant.jpg', price: '$20' },
    { id: 4, name: 'Product 4', image: './crosant.jpg', price: '$25' },
  ]

  return (
    <>
      <section 
        id="home" 
        className="flex items-center bg-[url('../assets/header-bg.jpg')] bg-no-repeat bg-cover bg-center pt-[70px]"
      >
        <main className="max-w-[1000px] w-full mx-auto px-[30px] text-white">
          <div className="">
            <h1>Welcome to <span>Cafes</span></h1>
            <p>Discover the best cafes in Indonesia with us. From cozy coffee shops to trendy cafes, we have it all. Explore our curated list of cafes and find your new favorite spot to enjoy a cup of coffee.</p>
          </div>
        </main>
      </section>

      {/* Products Carousel Section */}
      <section className="bg-[#101010] py-8">
        <div className="max-w-[1200px] w-full mx-auto px-[30px]">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Products</h2>
          
          {/* Carousel Container */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="min-w-[280px] bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="w-full h-[200px] bg-gray-600">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                    <p className="text-[#f77124] text-lg font-bold mb-4">{product.price}</p>
                    
                    {/* Buy Button */}
                    <button className="w-full bg-[#f77124] hover:bg-[#d96320] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
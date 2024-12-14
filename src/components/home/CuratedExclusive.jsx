import { ProductCard } from "../util/product-card";
import product from '../../public/images/productimg.png'
const products = [
    {
      id: 1,
      title: "Mystic Moonlight Maxi",
      price: 560.00,
      description: "Men's Denim Jacket distressed Casual Winter warm loose fit large size vintage",
      image: "/placeholder.svg?height=600&width=500",
      rating: 4.5,
      reviews: 1200,
      image: product
    },
    {
      id: 2,
      title: "Tropical Paradise Shirt",
      price: 480.00,
      description: "Men's Hawaiian Print Shirt Summer Collection loose fit breathable cotton blend",
      image: "/placeholder.svg?height=600&width=500",
      rating: 4.7,
      reviews: 890,
      image: product
    },
    {
      id: 3,
      title: "Urban Bloom Tee",
      price: 520.00,
      description: "Men's Floral Print T-Shirt Premium Cotton casual summer wear comfort fit",
      image: "/placeholder.svg?height=600&width=500",
      rating: 4.3,
      reviews: 750,
      image: product
    },
    {
      id: 4,
      title: "Sunset Flora Shirt",
      price: 495.00,
      description: "Men's Short Sleeve Shirt tropical print vacation wear premium quality",
      image: "/placeholder.svg?height=600&width=500",
      rating: 4.6,
      reviews: 980,
      image: product
    },
    {
      id: 5,
      title: "Island Breeze Collection",
      price: 540.00,
      description: "Men's Resort Wear Shirt botanical print summer collection premium cotton",
      image: "/placeholder.svg?height=600&width=500",
      rating: 4.4,
      reviews: 670,
      image: product
    },
    {
      id: 6,
      title: "Palm Springs Casual",
      price: 510.00,
      description: "Men's Casual Shirt tropical motif weekend wear comfortable fit",
      image: "/placeholder.svg?height=600&width=500",
      rating: 4.8,
      reviews: 1100,
      image: product
    },
    {
      id: 7,
      title: "Coastal Breeze Shirt",
      price: 530.00,
      description: "Men's Beach Wear Shirt summer collection light fabric premium quality",
      image: "/placeholder.svg?height=600&width=500",
      rating: 4.2,
      reviews: 560,
      image: product
    },
    {
      id: 8,
      title: "Coastal Breeze Shirt",
      price: 530.00,
      description: "Men's Beach Wear Shirt summer collection light fabric premium quality",
      image: "/placeholder.svg?height=600&width=500",
      rating: 4.2,
      reviews: 560,
      image: product
    },
   
  ];
export default function CuratedExclusive() {
  return (
    <div className=" bg-primary">
      <div className="container mx-auto p-4">

        <h1 className="text-4xl font-bold  text-white mb-10">Curated Exclusive</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


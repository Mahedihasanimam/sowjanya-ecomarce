

// import { useState } from 'react'
// import Image from 'next/image'
// import { Card } from 'antd'


// export function ProductGallery({ images }) {
//   const [selectedImage, setSelectedImage] = useState(0)
// console.log(images)
//   return (
//     <div className="grid grid-cols-4 ">
//       <div className="col-span-4 md:col-span-3">
//         <Card className="overflow-hidden bg-transparent border-0">
//           <div className="relative aspect-square">
//             <Image
//               src={images[selectedImage].src}
//               alt={images[selectedImage].alt}
//               fill
//               className="object-cover rounded-lg"
//               priority
//             />
//           </div>
//         </Card>
//       </div>
//       <div className="col-span-4 md:col-span-1 flex md:flex-col gap-2 overflow-auto">
//         {images.map((image, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedImage(index)}
//             className={`relative aspect-square w-20 md:w-full rounded-lg overflow-hidden border-2 transition-colors ${
//               selectedImage === index ? 'border-blue-500' : 'border-transparent'
//             }`}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               className="object-cover"
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

import { useState } from 'react';
import Image from 'next/image';
import { Card } from 'antd';

export function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Check if images is not empty and handle fallback
  if (!images || images.length === 0) {
    return <div>No images available</div>; // Handle case where there are no images
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Main Image Display */}
      <div className="col-span-4 md:col-span-3">
        <Card className="overflow-hidden bg-transparent border-0">
          <div className="relative aspect-square">
            <Image
              src={images[selectedImage]} // Access the image directly from the array
              alt={`Product Image ${selectedImage + 1}`}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </Card>
      </div>

      {/* Thumbnail Images */}
      <div className="col-span-4 md:col-span-1 flex md:flex-col gap-2 overflow-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square w-20 md:w-full rounded-lg overflow-hidden border-2 transition-colors ${
              selectedImage === index ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <Image
              src={image} // Access the image directly from the array
              alt={`Thumbnail Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

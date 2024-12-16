

import React from "react";
import Image from "next/image";

function PhotoGallery() {
  return (
    <section className="w-full max-w-[1440px] mx-auto mt-[100px] mb-[200px] px-4">
      <div className="text-center space-y-4 mb-10">
        <h3 className="text-xl font-semibold text-gray-600">
          Share your setup with
        </h3>
        <h2 className="text-4xl font-bold text-gray-900">#FuniroFurniture</h2>
      </div>


      <div className="relative w-full h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 lg:h-[600px]">
        {/* Image 1 */}
        <div className="relative lg:absolute lg:top-0 lg:left-0">
          <Image src="/Rectangle 36.png" height={382} width={100} alt="image1" className="w-full h-full object-cover" />
        </div>

        {/* Image 2 */}
        <div className="relative lg:absolute lg:top-[70px] lg:left-[100px]">
          <Image src="/Rectangle 38.png" width={451} height={312} alt="image2" className="w-full h-full object-cover" />
        </div>

        {/* Image 3 */}
        <div className="relative lg:absolute lg:top-[160px] lg:left-[570px]">
          <Image src="/Rectangle 40.png" width={295} height={392} alt="image3" className="w-full h-full object-cover" />
        </div>

        {/* Image 4 */}
        <div className="relative lg:absolute lg:top-[100px] lg:left-[875px]">
          <Image src="/Rectangle 43.png" width={290} height={384} alt="image4" className="w-full h-full object-cover" />
        </div>

        {/* Image 5 */}
        <div className="relative lg:absolute lg:top-[15px] lg:left-[1170px] h-[433px] w-full lg:w-[230px] bg-red-600">
          <Image src="/Rectangle 45.png" layout="fill" objectFit="cover" alt="image5" />
        </div>

        {/* Image 6 */}
        <div className="relative lg:absolute lg:top-[400px] lg:left-[0px] h-[323px] w-full lg:w-[200px] bg-red-600">
          <Image src="/Rectangle 37.png" height={323} width={200} alt="image6" className="w-full h-full object-cover" />
        </div>

        {/* Image 7 */}
        <div className="relative lg:absolute lg:top-[400px] lg:left-[215px] h-[242px] w-full lg:w-[344px] bg-red-600">
          <Image src="/Rectangle 39.png" height={242} width={344} alt="image7" className="w-full h-full object-cover" />
        </div>

        {/* Image 8 */}
        <div className="relative lg:absolute lg:top-[460px] lg:left-[875px] h-[242px] w-full lg:w-[178px] bg-red-600">
          <Image src="/Rectangle 41.png" height={242} width={178} alt="image8" className="w-full h-full object-cover" />
        </div>

        {/* Image 9 */}
        <div className="relative lg:absolute lg:top-[460px] lg:left-[1065px] h-[196px] w-full lg:w-[258px] bg-red-600">
          <Image src="/Rectangle 44.png" height={196} width={258} alt="image9" className="w-full h-full object-cover" />
        </div>

        
      </div>
    </section>
  );
}

export default PhotoGallery;



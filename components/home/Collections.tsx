import Image from 'next/image';
import Link from 'next/link';
import Section from '../common/Section';

const collections = [
  {
    title: 'أطقم اللحاف',
    description: 'تشكيلة واسعة من الأطقم الفاخرة',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
    link: '/products?category=لحاف',
  },
  {
    title: 'مخدات فاخرة',
    description: 'راحة لا مثيل لها لنوم هادئ',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80',
    link: '/products?category=مخدات',
  },
  {
    title: 'شراشف قطنية',
    description: 'شراشف طبيعي بجودة عالية',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80',
    link: '/products?category=شراشف',
  },
];

export default function Collections() {
  return (
    <Section id="collections" className="bg-gradient-to-br from-pink-soft to-blue-calm">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-dark mb-4">تسوق حسب التشكيلة</h3>
          <p className="text-gray-600 text-lg">اختر من مجموعاتنا المتنوعة</p>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-3xl h-96 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >

              <Image 
                src={collection.image} 
                alt={collection.title}
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 right-0 left-0 p-8 text-white text-right">
                <h4 className="text-3xl font-bold mb-2">{collection.title}</h4>
                <p className="text-lg mb-4 text-white/90">{collection.description}</p>
                <Link 
                  href={collection.link}
                  className="inline-block text-white border-2 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-gray-dark transition-all font-medium"
                >
                  تسوق الآن
                </Link>
              </div>
            </div>
          ))}
        </div>
    </Section>
  );
}
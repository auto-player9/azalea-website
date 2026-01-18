import Image from 'next/image';
import Section from '../common/Section';

const stats = [
  { label: 'خامات طبيعية', value: '١٠٠٪' },
  { label: 'سنوات خبرة', value: '٥+' },
  { label: 'عميل سعيد', value: '١٠٠٠+' },
];

export default function About() {
  return (
    <Section id="about" className="py-20 bg-gradient-to-br from-blue-calm to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* العناوين الرئيسية */}
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-gray-dark mb-6 leading-tight">
            جودة النوم تبدأ من هنا
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن نؤمن بأن النوم الجيد هو أساس الحياة الصحية والسعيدة. لذلك نقدم لكم أفضل أقمشة الغرف المصنوعة من أجود الخامات الطبيعية.
          </p>
        </div>

        {/* الجزء الأول: الرؤية */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 relative h-[450px] w-full">
            <Image 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80" 
              alt="رؤيتنا في الأقمشة الفاخرة" 
              fill 
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 text-right">
            <h4 className="text-3xl font-bold text-gray-dark mb-6 italic">رؤيتنا</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              نسعى لأن نكون الخيار الأول للعائلات التي تبحث عن الراحة والفخامة في غرف نومها. نحن نختار كل قطعة بعناية فائقة لضمان أعلى معايير الجودة والراحة.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              نؤمن بأن التفاصيل الصغيرة تصنع الفارق الكبير، ولذلك نهتم بكل جانب من جوانب منتجاتنا من اختيار الخامات إلى التصميم النهائي.
            </p>
          </div>
        </div>

        {/* الجزء الثاني: التزامنا بالجودة + الإحصائيات */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-right">
            <h4 className="text-3xl font-bold text-gray-dark mb-6 italic">التزامنا بالجودة</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              نستخدم فقط أفضل الخامات الطبيعية من القطن المصري الفاخر إلى الحرير الطبيعي والصوف الأصلي. كل منتج يمر بفحوصات صارمة لضمان المتانة والراحة.
            </p>
            
            {/* بطاقات الإحصائيات */}
            <div className="flex flex-wrap gap-4 mt-8 justify-end">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-lg flex-1 min-w-[120px] text-center border-t-4 border-pink-accent"
                >
                  <div className="text-3xl font-bold text-pink-accent mb-2">{stat.value}</div>
                  <div className="text-gray-700 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[450px] w-full">
            <Image 
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80" 
              alt="التزامنا بالجودة" 
              fill 
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
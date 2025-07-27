import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "Home",
      title: "Уборка квартир",
      description: "Профессиональная уборка жилых помещений с использованием безопасных средств"
    },
    {
      icon: "Building",
      title: "Уборка офисов",
      description: "Комплексная уборка офисных помещений для комфортной рабочей атмосферы"
    },
    {
      icon: "Sparkles",
      title: "Генеральная уборка",
      description: "Глубокая уборка с чисткой труднодоступных мест и поверхностей"
    },
    {
      icon: "Car",
      title: "Уборка после ремонта",
      description: "Специализированная уборка помещений после строительных и ремонтных работ"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Клининг
                  <span className="block text-primary">Севастополь</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Профессиональные услуги уборки с гарантией качества. 
                  Доверьте чистоту вашего дома или офиса опытным специалистам.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 rounded-xl">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать уборку
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="text-gray-600">24/7 поддержка</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <span className="text-gray-600">Гарантия качества</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/1f244e0b-2118-48b6-be51-7e59c66d7ca3.jpg" 
                  alt="Профессиональная уборка в Севастополе"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-primary fill-current" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">500+ клиентов</div>
                    <div className="text-sm text-gray-600">доверяют нам</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр клининговых услуг с использованием 
              профессионального оборудования и экологически чистых средств
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  Почему выбирают нас?
                </h2>
                <p className="text-xl text-gray-600">
                  Мы работаем в Севастополе уже более 5 лет и знаем, как обеспечить 
                  идеальную чистоту в любом помещении.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Опытная команда
                    </h3>
                    <p className="text-gray-600">
                      Все сотрудники проходят обучение и имеют опыт работы от 2 лет
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Гарантия качества
                    </h3>
                    <p className="text-gray-600">
                      Предоставляем гарантию на все виды работ и переделываем бесплатно
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Leaf" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Безопасные средства
                    </h3>
                    <p className="text-gray-600">
                      Используем только сертифицированные экологически чистые средства
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-gray-600">Лет на рынке</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Поддержка клиентов</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Гарантия качества</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Готовы заказать уборку?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами прямо сейчас и получите бесплатную консультацию 
            по выбору подходящих услуг и расчету стоимости
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-xl">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (978) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>

          <div className="flex justify-center gap-8 text-sm opacity-75 pt-4">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} />
              <span>Севастополь, ул. Ленина, 15</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>Ежедневно 8:00 - 22:00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
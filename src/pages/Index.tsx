import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [squareMeters, setSquareMeters] = useState("");
  const [windowCount, setWindowCount] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const { toast } = useToast();

  const servicePrices = {
    "general": { price: 220, windowPrice: 220, name: "Генеральная уборка" },
    "construction": { price: 240, windowPrice: 260, name: "После строительства" },
    "maintenance": { price: 140, windowPrice: 140, name: "Поддерживающая уборка" }
  };

  const calculateCost = () => {
    if (!serviceType || !squareMeters) {
      setTotalCost(0);
      return;
    }
    
    const service = servicePrices[serviceType as keyof typeof servicePrices];
    const squareMetersNum = parseFloat(squareMeters) || 0;
    const windowCountNum = parseFloat(windowCount) || 0;
    
    const areaTotal = squareMetersNum * service.price;
    const windowTotal = (serviceType !== "maintenance" && windowCountNum > 0) ? windowCountNum * service.windowPrice : 0;
    
    setTotalCost(areaTotal + windowTotal);
  };

  const handleMaintenanceSelect = () => {
    toast({
      title: "Важная информация",
      description: "Поддерживающая уборка выполняется не позднее чем через неделю после генеральной уборки",
      duration: 5000,
    });
  };
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
                <Button size="lg" className="text-lg px-8 py-6 rounded-xl" onClick={() => window.open('tel:+79785329403')}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать уборку
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl" onClick={() => setShowCalculator(true)}>
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-xl" onClick={() => window.open('tel:+79785329403')}>
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (978) 532-94-03
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-xl" onClick={() => window.open('tel:+79782827725')}>
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (978) 282-77-25
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl border-white text-white hover:bg-white hover:text-primary" onClick={() => window.open('https://wa.me/79785329403')}>
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

      {/* Calculator Modal */}
      <Dialog open={showCalculator} onOpenChange={setShowCalculator}>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-gray-900">
              Калькулятор стоимости
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label className="text-base font-medium">Вид уборки</Label>
              <Select value={serviceType} onValueChange={(value) => {
                setServiceType(value);
                if (value === "maintenance") {
                  setWindowCount("");
                  handleMaintenanceSelect();
                }
                setTimeout(() => calculateCost(), 0);
              }}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Выберите тип уборки" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">Генеральная уборка (220 ₽/м²)</SelectItem>
                  <SelectItem value="construction">После строительства (240 ₽/м²)</SelectItem>
                  <SelectItem value="maintenance">Поддерживающая уборка (140 ₽/м²)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-base font-medium">Количество кв.м</Label>
              <Input 
                type="number" 
                placeholder="Введите площадь"
                value={squareMeters}
                onChange={(e) => {
                  setSquareMeters(e.target.value);
                  setTimeout(() => calculateCost(), 0);
                }}
                className="h-12"
              />
            </div>

            {serviceType !== "maintenance" && (
              <div className="space-y-2">
                <Label className="text-base font-medium">Окна кв.м</Label>
                <Input 
                  type="number" 
                  placeholder="Площадь окон в кв.м"
                  value={windowCount}
                  onChange={(e) => {
                    setWindowCount(e.target.value);
                    setTimeout(() => calculateCost(), 0);
                  }}
                  className="h-12"
                />
              </div>
            )}

            {totalCost > 0 && (
              <div className="bg-primary/5 rounded-xl p-6 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Расчет стоимости:</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  {serviceType && squareMeters && (
                    <div className="flex justify-between">
                      <span>{servicePrices[serviceType as keyof typeof servicePrices].name} ({squareMeters} м²)</span>
                      <span>{(parseFloat(squareMeters) * servicePrices[serviceType as keyof typeof servicePrices].price).toLocaleString()} ₽</span>
                    </div>
                  )}
                  {windowCount && (
                    <div className="flex justify-between">
                      <span>Мытье окон ({windowCount} м²)</span>
                      <span>{(parseFloat(windowCount) * servicePrices[serviceType as keyof typeof servicePrices].windowPrice).toLocaleString()} ₽</span>
                    </div>
                  )}
                  <div className="border-t pt-2 space-y-1">
                    <div className="flex justify-between font-semibold text-lg text-gray-900">
                      <span>Приблизительно:</span>
                      <span className="text-primary">{totalCost.toLocaleString()} ₽</span>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      Для более точной стоимости напишите или позвоните нам
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button 
                className="flex-1 h-12" 
                onClick={() => {
                  if (totalCost > 0) {
                    window.open('tel:+79785329403');
                  }
                }}
                disabled={totalCost === 0}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать
              </Button>
              <Button variant="outline" className="flex-1 h-12" onClick={() => setShowCalculator(false)}>
                Закрыть
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Wrench',
      title: 'Устранение засоров',
      description: 'Прочистка труб, канализации, раковин любой сложности',
      price: 'от 1500 ₽'
    },
    {
      icon: 'Droplet',
      title: 'Ремонт сантехники',
      description: 'Замена и ремонт кранов, смесителей, унитазов',
      price: 'от 800 ₽'
    },
    {
      icon: 'Thermometer',
      title: 'Отопление и радиаторы',
      description: 'Монтаж, ремонт и замена радиаторов, теплых полов',
      price: 'от 3000 ₽'
    },
    {
      icon: 'Home',
      title: 'Теплый дом под ключ',
      description: 'Комплексное обустройство системы отопления',
      price: 'от 15000 ₽'
    },
    {
      icon: 'Wrench',
      title: 'Замена труб',
      description: 'Монтаж водопроводных и канализационных систем',
      price: 'от 2000 ₽'
    },
    {
      icon: 'Briefcase',
      title: 'Аварийный вызов',
      description: 'Круглосуточное устранение протечек и аварий',
      price: 'от 2500 ₽'
    }
  ];

  const galleryItems = [
    {
      title: 'Установка радиатора',
      before: 'img/0d4dae1d-1698-4f06-b530-ad365ba8502b.jpg',
      after: 'img/0d4dae1d-1698-4f06-b530-ad365ba8502b.jpg'
    },
    {
      title: 'Монтаж теплого пола',
      before: 'img/424aea91-47ee-4300-9c4f-9aaf9c8fbfbf.jpg',
      after: 'img/424aea91-47ee-4300-9c4f-9aaf9c8fbfbf.jpg'
    },
    {
      title: 'Замена смесителя',
      before: '/placeholder.svg',
      after: '/placeholder.svg'
    },
    {
      title: 'Монтаж унитаза',
      before: '/placeholder.svg',
      after: '/placeholder.svg'
    },
    {
      title: 'Прочистка канализации',
      before: '/placeholder.svg',
      after: '/placeholder.svg'
    },
    {
      title: 'Комплексное отопление',
      before: 'img/424aea91-47ee-4300-9c4f-9aaf9c8fbfbf.jpg',
      after: 'img/424aea91-47ee-4300-9c4f-9aaf9c8fbfbf.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary rounded-lg p-2">
                <Icon name="Wrench" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">СантехМастер</h1>
                <p className="text-sm text-gray-600">Профессиональные услуги</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-gray-700'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'services' ? 'text-primary' : 'text-gray-700'
                }`}
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'gallery' ? 'text-primary' : 'text-gray-700'
                }`}
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-gray-700'
                }`}
              >
                О мастере
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-gray-700'
                }`}
              >
                Контакты
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-right">
                <p className="text-sm text-gray-600">Звоните прямо сейчас</p>
                <p className="text-lg font-semibold text-gray-900">+7 (999) 123-45-67</p>
              </div>
              <Button>Вызвать мастера</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">Работаем с 2010 года</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Сантехник с отоплением
                <span className="text-primary block">в вашем районе</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Качественный ремонт сантехники, отопление, теплый пол и аварийные работы. 
                Гарантия на все виды услуг. Приезжаем в течение часа.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Вызвать мастера
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Calculator" className="mr-2 h-5 w-5" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-primary/10 rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                        <Icon name="Clock" className="h-8 w-8 text-primary" />
                      </div>
                      <p className="font-semibold">Быстро</p>
                      <p className="text-sm text-gray-600">Приезжаем за час</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary/10 rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                        <Icon name="Shield" className="h-8 w-8 text-primary" />
                      </div>
                      <p className="font-semibold">Гарантия</p>
                      <p className="text-sm text-gray-600">До 2 лет</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary/10 rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                        <Icon name="Star" className="h-8 w-8 text-primary" />
                      </div>
                      <p className="font-semibold">Качество</p>
                      <p className="text-sm text-gray-600">500+ отзывов</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary/10 rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                        <Icon name="Wrench" className="h-8 w-8 text-primary" />
                      </div>
                      <p className="font-semibold">Опыт</p>
                      <p className="text-sm text-gray-600">14 лет работы</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Профессиональное решение любых сантехнических задач</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon name={service.icon as any} className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Badge variant="outline" className="text-primary border-primary">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Заказать услугу
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Галерея работ</h2>
            <p className="text-xl text-gray-600">Фотографии выполненных работ до и после</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img 
                        src={item.before} 
                        alt="До ремонта" 
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        ДО
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={item.after} 
                        alt="После ремонта" 
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        ПОСЛЕ
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">Выполнено за 2 часа</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">О мастере</h2>
              <p className="text-lg text-gray-600 mb-6">
                Меня зовут Алексей, и я занимаюсь сантехническими работами уже более 14 лет. 
                За это время выполнил свыше 2000 заказов различной сложности.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                  <span>Сертифицированный специалист</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                  <span>Работаю с профессиональным инструментом</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                  <span>Гарантия на все виды работ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                  <span>Фиксированные цены без переплат</span>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <Card className="bg-primary text-white">
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 rounded-full p-6 mb-6 mx-auto w-24 h-24 flex items-center justify-center">
                    <Icon name="User" className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Алексей Петров</h3>
                  <p className="text-primary-foreground/80 mb-6">Сантехник-профессионал</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-3xl font-bold">14+</p>
                      <p className="text-sm text-primary-foreground/80">лет опыта</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">2000+</p>
                      <p className="text-sm text-primary-foreground/80">заказов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь со мной любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Icon name="Phone" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600 mb-4">Звоните в любое время</p>
                <p className="text-xl font-bold text-primary">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Icon name="MessageSquare" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Быстрые сообщения</p>
                <Button variant="outline">Написать в WhatsApp</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Icon name="MapPin" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Зона обслуживания</h3>
                <p className="text-gray-600 mb-4">Работаю в районах</p>
                <p className="font-medium">Центральный, Северный, Восточный</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="bg-primary text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Нужен сантехник прямо сейчас?</h3>
                <p className="mb-6 text-primary-foreground/80">
                  Оставьте заявку и я перезвоню в течение 5 минут для уточнения деталей
                </p>
                <Button size="lg" variant="secondary" className="text-primary">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Заказать обратный звонок
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-primary rounded-lg p-2">
                <Icon name="Wrench" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">СантехМастер</h3>
                <p className="text-sm text-gray-400">Надежные сантехнические услуги</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">© 2024 СантехМастер</p>
              <p className="text-sm text-gray-400">Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
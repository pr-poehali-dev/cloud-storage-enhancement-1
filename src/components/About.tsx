export default function About() {
  return (
    <div id="about" className="bg-neutral-50 px-6 py-24 lg:py-32">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="flex-1">
          <h3 className="uppercase text-sm tracking-wide text-neutral-400 mb-4">О водителе</h3>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-8 leading-tight">
            Олег<br />Сорокин
          </h2>
          <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
            <p>
              Родом из деревни Мокрый Лог. Парень в целом нормальный — добросовестный, 
              пунктуальный, знает дороги как свои пять пальцев.
            </p>
            <p>
              Работает водителем в АО «Радиоавионика». Коллеги ценят, руководство доверяет. 
              Однако время от времени Олег уходит в сервис — и тут начинается совсем другая история.
            </p>
            <p className="text-neutral-400 italic text-base">
              «Периодически переходит в сервис» — из характеристики отдела кадров.
            </p>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-[3/4] bg-neutral-200 relative overflow-hidden">
            <img
              src="/images/mountain-landscape.jpg"
              alt="Олег Сорокин"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-neutral-900/20" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white text-neutral-900 text-xs uppercase tracking-widest px-3 py-1">
                Водитель · АО Радиоавионика
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

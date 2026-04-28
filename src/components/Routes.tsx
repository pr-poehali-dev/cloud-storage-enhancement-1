export default function Routes() {
  const mapUrl =
    "https://yandex.ru/map-widget/v1/?rtext=59.939099%2C30.315877~47.222078%2C39.720349&rtt=auto&lang=ru_RU&scroll=false";

  return (
    <div id="routes" className="bg-neutral-50 px-6 py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-400 mb-4">Маршруты</h3>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4 leading-tight">
          Санкт-Петербург — Ростов-на-Дону
        </h2>
        <p className="text-neutral-500 mb-12 text-lg">
          ~1 900 км · ~20 часов в пути · возможны незапланированные остановки
        </p>

        <div className="w-full overflow-hidden rounded-none border border-neutral-200" style={{ height: "480px" }}>
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Маршрут Санкт-Петербург — Ростов-на-Дону"
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-neutral-500 uppercase tracking-wide">
          <div>
            <span className="block text-neutral-900 font-bold text-base normal-case">Откуда</span>
            Санкт-Петербург, АО «Радиоавионика»
          </div>
          <div className="hidden sm:block text-neutral-300">→</div>
          <div>
            <span className="block text-neutral-900 font-bold text-base normal-case">Куда</span>
            Ростов-на-Дону
          </div>
        </div>
      </div>
    </div>
  );
}

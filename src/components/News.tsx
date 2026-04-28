export default function News() {
  return (
    <div id="news" className="bg-white px-6 py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-400 mb-4">Новости</h3>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-16 leading-tight">
          Последние события
        </h2>

        <div className="divide-y divide-neutral-100">
          <article className="py-8 flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12">
            <div className="lg:w-40 shrink-0">
              <time className="text-sm text-neutral-400 uppercase tracking-wide">28 апр 2026</time>
            </div>
            <div className="flex-1">
              <span className="inline-block bg-red-100 text-red-700 text-xs uppercase tracking-widest px-2 py-1 mb-3">
                Срочно
              </span>
              <h4 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3 leading-tight">
                Сорокин снова уехал с сервисом в Сосново
              </h4>
              <p className="text-neutral-600 leading-relaxed">
                По имеющимся данным, Олег Сорокин в очередной раз покинул рабочее место и 
                отправился кататься с сервисом в направлении Сосново. Местонахождение 
                подтверждено. Коллеги не удивлены. Руководство осведомлено.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

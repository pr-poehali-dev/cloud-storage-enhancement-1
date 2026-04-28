const members = [
  {
    name: "Бабошин Владимир",
    role: "Коллега",
  },
  {
    name: "Белоусов Дмитрий",
    role: "Коллега",
  },
  {
    name: "Новикова Ольга",
    role: "Коллега",
  },
];

export default function Team() {
  return (
    <div id="team" className="bg-white px-6 py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-400 mb-4">Команда</h3>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-16 leading-tight">
          Те, кого Олег<br />периодически предаёт
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.name} className="flex flex-col gap-4">
              <div className="aspect-square bg-neutral-100 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl text-neutral-300 font-bold">
                  {member.name[0]}
                </div>
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-lg">{member.name}</p>
                <p className="text-neutral-400 text-sm uppercase tracking-wide">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { mockGlobalStats } from "@/mocks";

const YOUR_STATS = "Your Stats";
const COMING_SOON = "Coming Soon";
const GLOBAL_STATS = "Global Stats";

export default function StatsPage() {
  return (
    <article className="border-1 border-pink-primary rounded-lg overflow-hidden w-full min-h-[500px] p-5 lg:p-10 uppercase tracking-widest">
      <section className="mb-20">
        <h2 className="font-bold mb-10">{YOUR_STATS}</h2>
        <h2 className="font-bold text-xs ">{COMING_SOON}</h2>
      </section>

      <section>
        <h2 className="font-bold mb-6">{GLOBAL_STATS}</h2>

        <div className="flex flex-col gap-3">
          {mockGlobalStats.map((stat) => (
            <div className="flex justify-between items-center ">
              <div className="text-[8px] lg:text-base text-gray-primary ">
                {stat.label}
              </div>
              <div className="text-xs lg:text-base text-blue-primary font-bold">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-creme-50 py-24 lg:py-32">
      {/* Decorative blobs */}
      <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-rosa-100/40 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-64 w-64 rounded-full bg-creme-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Image side - asymmetric, editorial */}
          <ScrollReveal className="relative w-full lg:w-[45%]">
            <div className="relative">
              {/* Main image */}
              <div className="relative h-[450px] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-choco-500/8 lg:h-[550px]">
                {/*
                  SUBSTITUIR com foto da confeiteira/cozinha:
                  <Image src="/about.jpg" alt="Lelis na cozinha" fill className="object-cover" />
                */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, #FFF0ED 0%, #F5E6D3 40%, #FDDDD6 70%, #E8B4B8 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-heading text-sm italic text-choco-300/50">
                    Foto da confeiteira
                  </p>
                </div>
              </div>

              {/* Small accent image - overlapping */}
              <div className="absolute -bottom-8 -right-6 h-40 w-40 overflow-hidden rounded-2xl border-4 border-creme-50 shadow-lg lg:-right-10 lg:h-52 lg:w-52">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #5C3D2E 0%, #8B6F47 100%)",
                  }}
                />
              </div>

              {/* Years badge */}
              <div className="absolute -left-4 top-8 rounded-2xl bg-white px-5 py-4 shadow-lg lg:-left-8">
                <p className="font-heading text-2xl font-bold text-choco-600">
                  5+
                </p>
                <p className="font-body text-xs text-choco-300">
                  anos de amor
                  <br />
                  pela confeitaria
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal className="flex-1 lg:pl-4" delay={200}>
            <span className="mb-4 inline-block font-body text-xs font-medium uppercase tracking-[0.3em] text-rosa-400">
              Nossa história
            </span>

            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-choco-600 sm:text-4xl lg:text-[2.75rem]">
              De uma paixão na cozinha
              <br />
              <span className="italic text-rosa-500">nasceu a Doces da Lelis</span>
            </h2>

            <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-choco-400 lg:text-lg">
              <p>
                Tudo começou com uma receita de família e o desejo de levar
                carinho em forma de doce para as pessoas. Cada brigadeiro, cada
                bolo, cada doce fino é feito à mão, com ingredientes
                selecionados e muita dedicação.
              </p>
              <p>
                Acreditamos que um doce tem o poder de transformar um momento
                comum em algo especial. Por isso, cuidamos de cada detalhe
                &mdash; do preparo à entrega &mdash; para que cada mordida
                seja uma experiência única.
              </p>
            </div>

            {/* Values - organic layout, not a rigid grid */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { icon: "🤎", text: "Feito à mão" },
                { icon: "🌿", text: "Ingredientes selecionados" },
                { icon: "✨", text: "Cada detalhe importa" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 shadow-sm"
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="font-body text-sm font-medium text-choco-500">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

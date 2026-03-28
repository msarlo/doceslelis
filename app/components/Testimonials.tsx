import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Camila R.",
    text: "Os brigadeiros da Lelis são de outro mundo! Pedi para o aniversário da minha filha e todos amaram. Já virou tradição!",
    context: "Festa de aniversário",
    initials: "CR",
    color: "bg-rosa-200",
  },
  {
    name: "Fernanda M.",
    text: "Nunca comi um brownie tão bom. Fudgy na medida certa, com chocolate de verdade. Viciei completamente.",
    context: "Cliente frequente",
    initials: "FM",
    color: "bg-creme-300",
  },
  {
    name: "Juliana S.",
    text: "O bolo do meu casamento ficou perfeito! Lindo, delicioso e com um carinho que a gente sente em cada fatia. Obrigada, Lelis!",
    context: "Bolo de casamento",
    initials: "JS",
    color: "bg-rosa-300",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-rosa-200 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20 text-center">
            <span className="mb-3 inline-block font-body text-xs font-medium uppercase tracking-[0.3em] text-rosa-400">
              Depoimentos
            </span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-choco-600 sm:text-4xl lg:text-5xl">
              O que nossos clientes
              <span className="italic text-rosa-500"> dizem</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonials - staggered, organic layout */}
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-8 lg:gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal
                key={t.name}
                delay={i * 150}
                className={`${
                  i === 1 ? "lg:ml-auto lg:mr-8" : i === 2 ? "lg:ml-16" : "lg:mr-16"
                }`}
              >
                <div className="relative max-w-xl rounded-3xl bg-creme-50 p-8 lg:p-10">
                  {/* Quote mark */}
                  <span className="absolute -top-4 left-8 font-heading text-6xl leading-none text-rosa-200">
                    &ldquo;
                  </span>

                  <p className="relative z-10 font-body text-base leading-relaxed text-choco-400 lg:text-lg">
                    {t.text}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${t.color}`}
                    >
                      <span className="font-heading text-sm font-semibold text-choco-600">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-choco-600">
                        {t.name}
                      </p>
                      <p className="font-body text-xs text-choco-300">
                        {t.context}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

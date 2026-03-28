import ScrollReveal from "./ScrollReveal";
import { WHATSAPP_URL } from "./WhatsAppButton";

const products = [
  {
    name: "Brigadeiros Gourmet",
    description: "Receita secreta, derretem na boca",
    gradient: "linear-gradient(160deg, #5C3D2E 0%, #8B6F47 50%, #B8986E 100%)",
    emoji: "🍫",
    tag: "Mais pedido",
  },
  {
    name: "Bolos Decorados",
    description: "Para celebrar com beleza e sabor",
    gradient: "linear-gradient(160deg, #F5B8AC 0%, #E8968A 50%, #D4716A 100%)",
    emoji: "🎂",
    tag: "Sob encomenda",
  },
  {
    name: "Brownies Artesanais",
    description: "Intensos, fudgy e irresistíveis",
    gradient: "linear-gradient(160deg, #3E2723 0%, #5C3D2E 50%, #6B4F37 100%)",
    emoji: "🍪",
    tag: "Novidade",
  },
  {
    name: "Doces Finos",
    description: "Elegância em cada detalhe",
    gradient: "linear-gradient(160deg, #FDDDD6 0%, #F5B8AC 50%, #E8B4B8 100%)",
    emoji: "✨",
    tag: "Para festas",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="doces" className="relative bg-creme-50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section header - offset, not centered */}
        <ScrollReveal>
          <div className="mb-20 max-w-xl lg:ml-[8%]">
            <span className="mb-3 inline-block font-body text-xs font-medium uppercase tracking-[0.3em] text-rosa-400">
              Nossos doces
            </span>
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-choco-600 sm:text-4xl lg:text-5xl">
              Feitos para encantar
              <span className="italic text-rosa-500"> todos os sentidos</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Asymmetric product layout */}
        <div className="grid auto-rows-auto gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Product 1 - Large */}
          <ScrollReveal className="lg:col-span-7" delay={0}>
            <div className="group relative h-[420px] overflow-hidden rounded-3xl lg:h-[500px]">
              <div className="absolute inset-0" style={{ background: products[0].gradient }} />
              {/* Replace with: <Image src="/brigadeiros.jpg" alt="Brigadeiros" fill className="object-cover" /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 lg:p-10">
                <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {products[0].tag}
                </span>
                <h3 className="font-heading text-2xl font-semibold text-white lg:text-3xl">
                  {products[0].name}
                </h3>
                <p className="mt-2 font-body text-sm text-white/80">
                  {products[0].description}
                </p>
              </div>
              <div className="absolute right-6 top-6 text-4xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4">
                {products[0].emoji}
              </div>
            </div>
          </ScrollReveal>

          {/* Product 2 - Tall */}
          <ScrollReveal className="lg:col-span-5" delay={150}>
            <div className="group relative h-[420px] overflow-hidden rounded-3xl lg:h-[500px]">
              <div className="absolute inset-0" style={{ background: products[1].gradient }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 lg:p-10">
                <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {products[1].tag}
                </span>
                <h3 className="font-heading text-2xl font-semibold text-white lg:text-3xl">
                  {products[1].name}
                </h3>
                <p className="mt-2 font-body text-sm text-white/80">
                  {products[1].description}
                </p>
              </div>
              <div className="absolute right-6 top-6 text-4xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4">
                {products[1].emoji}
              </div>
            </div>
          </ScrollReveal>

          {/* Product 3 - Wide */}
          <ScrollReveal className="lg:col-span-5" delay={100}>
            <div className="group relative h-[360px] overflow-hidden rounded-3xl lg:h-[400px]">
              <div className="absolute inset-0" style={{ background: products[2].gradient }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 lg:p-10">
                <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {products[2].tag}
                </span>
                <h3 className="font-heading text-2xl font-semibold text-white lg:text-3xl">
                  {products[2].name}
                </h3>
                <p className="mt-2 font-body text-sm text-white/80">
                  {products[2].description}
                </p>
              </div>
              <div className="absolute right-6 top-6 text-4xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4">
                {products[2].emoji}
              </div>
            </div>
          </ScrollReveal>

          {/* Product 4 + CTA */}
          <ScrollReveal className="lg:col-span-7" delay={250}>
            <div className="relative flex h-[360px] flex-col overflow-hidden rounded-3xl lg:h-[400px] lg:flex-row">
              {/* Image side */}
              <div className="group relative h-1/2 w-full lg:h-full lg:w-3/5">
                <div className="absolute inset-0" style={{ background: products[3].gradient }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />
                <div className="absolute bottom-4 left-6 lg:bottom-8 lg:left-8">
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {products[3].tag}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-white lg:text-2xl">
                    {products[3].name}
                  </h3>
                </div>
              </div>
              {/* CTA side */}
              <div className="flex h-1/2 flex-col items-center justify-center bg-choco-500 p-6 lg:h-full lg:w-2/5 lg:p-8">
                <p className="mb-4 text-center font-heading text-lg font-medium text-white lg:text-xl">
                  Quer provar?
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3 font-body text-sm font-medium text-choco-600 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                >
                  Peça pelo WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

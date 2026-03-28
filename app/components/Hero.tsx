import { WHATSAPP_URL } from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-creme-50">
      {/* Background decorative elements */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-rosa-100/50 blur-3xl" />
      <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-rosa-200/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col-reverse items-center px-6 pt-24 lg:flex-row lg:gap-0 lg:px-10 lg:pt-0">
        {/* Text content - emotional, minimal */}
        <div className="flex flex-1 flex-col items-center pb-16 text-center lg:items-start lg:pb-0 lg:text-left">
          <span className="mb-5 inline-block font-body text-xs font-medium uppercase tracking-[0.3em] text-rosa-500">
            Confeitaria Artesanal
          </span>

          <h1 className="font-heading text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-choco-600 sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
            Cada doce conta
            <br />
            <span className="italic text-rosa-500">uma história</span>
            <br />
            de carinho
          </h1>

          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-choco-300 lg:text-lg">
            Feitos à mão com ingredientes selecionados, nossos doces
            transformam momentos simples em lembranças inesquecíveis.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-choco-500 px-8 py-4 font-body text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-choco-600 hover:shadow-xl hover:shadow-choco-500/25"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fazer meu pedido
            </a>
            <a
              href="#doces"
              className="font-body text-sm font-medium tracking-wide text-choco-400 underline decoration-rosa-300 decoration-1 underline-offset-4 transition-colors hover:text-choco-600 hover:decoration-rosa-500"
            >
              Ver nossos doces
            </a>
          </div>
        </div>

        {/* Hero image - large, editorial */}
        <div className="relative flex flex-1 items-center justify-center lg:justify-end">
          <div className="relative">
            {/* Main image */}
            <div className="relative h-[55vh] w-[80vw] max-w-[520px] overflow-hidden rounded-[2rem] shadow-2xl shadow-choco-500/10 sm:h-[60vh] lg:h-[75vh] lg:w-[38vw] lg:rounded-[2.5rem]">
              {/*
                SUBSTITUIR: Coloque aqui a imagem principal dos seus doces
                Use next/image para otimização:
                <Image src="/hero.jpg" alt="Doces artesanais" fill className="object-cover" priority />
              */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #F5E6D3 0%, #FDDDD6 30%, #E8B4B8 60%, #D4919B 100%)",
                }}
              />
              {/* Decorative overlay suggesting confectionery */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm" />
                <div className="h-16 w-32 rounded-full bg-white/15 backdrop-blur-sm" />
                <p className="mt-4 font-heading text-sm italic text-white/70">
                  Sua foto principal aqui
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-8 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-choco-500/8 lg:-left-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rosa-100">
                  <span className="text-lg">🍫</span>
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-choco-600">
                    +500 pedidos
                  </p>
                  <p className="font-body text-xs text-choco-300">
                    clientes felizes
                  </p>
                </div>
              </div>
            </div>

            {/* Floating rating */}
            <div className="absolute -right-4 top-16 rounded-xl bg-white px-4 py-3 shadow-xl shadow-choco-500/8 lg:-right-12">
              <div className="flex items-center gap-1.5">
                <span className="text-sm text-amber-400">★★★★★</span>
                <span className="font-body text-xs font-medium text-choco-400">
                  5.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom organic divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0V40Z"
            fill="#FFFDFB"
          />
        </svg>
      </div>
    </section>
  );
}

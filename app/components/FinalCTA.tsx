import ScrollReveal from "./ScrollReveal";
import { WHATSAPP_URL } from "./WhatsAppButton";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Full background with warm gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #5C3D2E 0%, #6B4F37 30%, #8B6F47 60%, #5C3D2E 100%)",
        }}
      />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%)`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-rosa-400/10 blur-3xl" />
      <div className="absolute -right-20 top-1/3 h-48 w-48 rounded-full bg-creme-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <ScrollReveal>
          <span className="mb-5 inline-block font-body text-xs font-medium uppercase tracking-[0.3em] text-rosa-300/80">
            Pronta para adoçar seu dia?
          </span>

          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Seu momento especial
            <br />
            <span className="italic text-rosa-300">merece doces especiais</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg font-body text-base leading-relaxed text-creme-200/80 lg:text-lg">
            Faça sua encomenda pelo WhatsApp e receba doces feitos com todo
            carinho, especialmente para você.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-white px-9 py-4 font-body text-sm font-medium tracking-wide text-choco-600 transition-all duration-300 hover:bg-rosa-50 hover:shadow-2xl hover:shadow-white/20"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-[#25D366] transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fazer meu pedido agora
            </a>
            <a
              href="https://www.instagram.com/doces_da_lelis/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium tracking-wide text-creme-200/70 underline decoration-rosa-400/40 decoration-1 underline-offset-4 transition-colors hover:text-white hover:decoration-rosa-300"
            >
              ou veja mais no Instagram
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

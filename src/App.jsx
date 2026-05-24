import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

export default function HICCThanksgivingCampaign() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const products = [
    {
      name: 'Pet Oral Spray',
      desc: 'Fresh breath made simple.',
      emoji: '🫧',
    },
    {
      name: 'Care Gel',
      desc: 'Gentle daily oral protection.',
      emoji: '💜',
    },
    {
      name: 'Dental Wipes',
      desc: 'Quick clean after every treat.',
      emoji: '✨',
    },
    {
      name: 'Holiday Toothbrush',
      desc: 'Soft care for tiny smiles.',
      emoji: '🪥',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F6EFE7] text-[#3E2F56] overflow-x-hidden font-sans scroll-smooth selection:bg-[#6F56D9] selection:text-white">
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <div className="text-[#6F56D9] font-black text-2xl tracking-tight">
              HICC PET
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A79A7]">
              Thanksgiving Campaign
            </div>
          </div>

          <button className="w-11 h-11 rounded-full bg-[#6F56D9] text-white text-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
            ☰
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen w-full flex items-center pt-28 pb-16 will-change-transform"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`leaf-${i}`}
              animate={{
                y: ['-10vh', '110vh'],
                x: [0, i % 2 === 0 ? 30 : -30, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.8,
              }}
              className="absolute text-2xl opacity-40"
              style={{
                left: `${i * 12}%`,
                top: '-10%',
              }}
            >
              🍁
            </motion.div>
          ))}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse text-[#E6A04B]/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 20}px`,
              }}
            >
              🍁
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 lg:px-20 text-white">
          <div className="inline-block px-4 py-2 rounded-full bg-[#6F56D9]/80 text-sm tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
            Thanksgiving Limited Campaign
          </div>

          <h1 className="text-[54px] sm:text-7xl lg:text-8xl font-black leading-none mb-6">
            THANKFUL
            <br />
            FOR EVERY
            <br />
            KISS.
          </h1>

          <p className="max-w-xl text-lg lg:text-2xl text-white/85 leading-relaxed mb-10">
            Celebrate the season of gratitude with cozy moments, gentle care,
            and exclusive holiday bundles for every furry family member.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#E6A04B] hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl">
              Shop Holiday Sets
            </button>

            <button className="border border-white/60 backdrop-blur-md hover:bg-white/10 transition-all duration-300 text-white px-8 py-4 rounded-full text-lg font-semibold">
              Explore Campaign
            </button>
          </div>
        </div>
      </section>

      {/* SALE SECTION */}
      <section className="py-28 px-5 lg:px-20 bg-[#F8F3EC]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[#6F56D9] uppercase tracking-[0.25em] text-sm mb-4 font-semibold">
              Long Weekend Sale
            </div>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-[#3E2F56]">
              15% OFF
              <br />
              Sitewide
            </h2>

            <p className="text-lg text-[#5B4C74] leading-relaxed mb-8 max-w-xl">
              Enjoy exclusive Thanksgiving bundles, cozy seasonal packaging,
              and vet-trusted oral care essentials designed for every cuddle,
              every smile, and every welcome-home kiss.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                'Free Gift on $60+',
                'Limited Holiday Packaging',
                'Vet-Trusted Formula',
                'Gentle Daily Care',
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-3xl p-5 shadow-sm border border-[#EEE5DA]"
                >
                  <div className="text-[#6F56D9] font-semibold">✦ {item}</div>
                </div>
              ))}
            </div>

            <button className="bg-[#6F56D9] hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
              Claim Holiday Offer
            </button>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#E6A04B]/20 rounded-[40px] blur-2xl"></div>

            <img
              src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1200&auto=format&fit=crop"
              alt="Thanksgiving Pet"
              className="relative rounded-[40px] shadow-2xl object-cover h-[420px] sm:h-[650px] w-full"
            />
          </div>
        </div>
      </section>

      {/* CHARACTER SECTION */}
      <section className="py-28 px-5 lg:px-20 bg-[#6F56D9] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[0.25em] text-sm mb-4 text-[#E6A04B]">
              Meet The Holiday Duo
            </div>

            <h2 className="text-5xl lg:text-7xl font-black mb-6">
              Hibi & Choo
            </h2>

            <p className="max-w-2xl mx-auto text-xl text-white/80 leading-relaxed">
              Different personalities. Same healthy smiles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-10 border border-white/10 hover:-translate-y-3 hover:scale-[1.01] transition-all duration-700 will-change-transform">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, -3, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-8xl mb-6 origin-center"
              >
                🐶
              </motion.div>

              <h3 className="text-4xl font-bold mb-6">Hibi</h3>

              <div className="space-y-3 mb-8 text-lg text-white/85">
                <div>✦ Playful</div>
                <div>✦ Gentle</div>
                <div>✦ Loyal</div>
                <div>✦ Sweet Helper</div>
              </div>

              <p className="text-white/75 leading-relaxed text-lg">
                Always ready to bring warmth, cuddles, and tiny happy moments to
                every Thanksgiving gathering.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-10 border border-white/10 hover:-translate-y-3 hover:scale-[1.01] transition-all duration-700 will-change-transform">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-8xl mb-6 origin-center"
              >
                🐱
              </motion.div>

              <h3 className="text-4xl font-bold mb-6">Choo</h3>

              <div className="space-y-3 mb-8 text-lg text-white/85">
                <div>✦ Graceful</div>
                <div>✦ Curious</div>
                <div>✦ Independent</div>
                <div>✦ Affectionate</div>
              </div>

              <p className="text-white/75 leading-relaxed text-lg">
                Quietly elegant, endlessly curious, and always close during the
                coziest moments of the season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="py-28 px-5 lg:px-20 bg-[#F6EFE7]">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <div className="uppercase tracking-[0.25em] text-sm mb-4 text-[#6F56D9]">
            Holiday Essentials
          </div>

          <h2 className="text-5xl lg:text-7xl font-black mb-6 text-[#3E2F56]">
            Cozy Care Box
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-[#5B4C74] leading-relaxed">
            Thoughtfully curated oral care essentials designed to make every
            holiday cuddle fresher, healthier, and happier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((item) => (
            <div
              key={item.name}
              className="group bg-white rounded-[35px] p-8 border border-[#EEE5DA] shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 will-change-transform"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#3E2F56]">
                {item.name}
              </h3>

              <p className="text-[#6B5C84] text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EMOTIONAL SECTION */}
      <section className="relative py-36 px-5 lg:px-20 overflow-hidden bg-[#3E2F56] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#E6A04B,transparent_50%)]"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="text-[#E6A04B] uppercase tracking-[0.25em] text-sm mb-6">
            A Thanksgiving Story
          </div>

          <h2 className="text-[54px] sm:text-7xl lg:text-8xl font-black leading-tight mb-10">
            They're thankful
            <br />
            for you.
          </h2>

          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-16">
            Every cuddle. Every welcome-home moment. Every tiny kiss. They all
            deserve gentle care and love that lasts beyond the holidays.
          </p>

          <button className="bg-[#E6A04B] hover:scale-105 transition-all duration-300 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-2xl">
            Celebrate Together
          </button>
        </div>
      </section>

      {/* SOCIAL SECTION */}
      <section className="py-28 px-5 lg:px-20 bg-[#F8F3EC]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-[0.25em] text-sm mb-4 text-[#6F56D9]">
              Community Moments
            </div>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-[#3E2F56]">
              Share Your
              <br />
              Cozy Moments
            </h2>

            <p className="text-xl text-[#5B4C74] leading-relaxed mb-10">
              Post your Thanksgiving pet moments and celebrate the season with
              the HICC PET family.
            </p>

            <div className="bg-white rounded-[35px] p-8 border border-[#EEE5DA] shadow-sm">
              <div className="text-[#6F56D9] text-2xl font-bold mb-4">
                #HICCTHANKFULKISS
              </div>

              <p className="text-[#6B5C84] text-lg leading-relaxed">
                Tag us on Instagram & TikTok for a chance to be featured in our
                holiday gallery.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-[30px] bg-[#EADFFB] flex items-center justify-center text-5xl shadow-md hover:scale-105 transition-all duration-300"
              >
                🐾
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-36 px-5 lg:px-20 bg-[#6F56D9] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,white,transparent_40%)]"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-[#E6A04B] uppercase tracking-[0.25em] text-sm mb-6">
            Limited Holiday Event
          </div>

          <h2 className="text-[54px] sm:text-7xl lg:text-8xl font-black leading-tight mb-10">
            Thank you
            <br />
            for loving them
            <br />
            as family.
          </h2>

          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-16">
            Cozy care. Gentle smiles. Thanksgiving moments that stay warm long
            after the season ends.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-12">
            <button className="bg-[#E6A04B] hover:scale-105 transition-all duration-300 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-2xl">
              Shop Collection
            </button>

            <button className="border border-white/40 hover:bg-white/10 transition-all duration-300 text-white px-10 py-5 rounded-full text-xl font-semibold backdrop-blur-sm">
              Follow Instagram
            </button>
          </div>

          <div className="text-white/50 text-sm tracking-[0.2em] uppercase">
            Vet-Trusted Gentle Care
          </div>
        </div>
      </section>
    </div>
  );
}

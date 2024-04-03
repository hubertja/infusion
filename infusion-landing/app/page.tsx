import Image from "next/image";
import { quattrocento } from '@/app/ui/fonts';

export default function Home() {
  return (
    <>
      <header className={`${quattrocento.className} bg-soup`}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

          <div className="flex h-36 items-center justify-between">

            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block" href="#">
                <span className="text-7xl text-teal-600"> Infusion </span>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">

              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-base">
                  <li>
                    <a className="text-stone-800 transition hover:text-stone-700/75" href="#"> Services </a>
                  </li>
                  <li>
                    <a className="text-stone-800 transition hover:text-stone-700/75" href="#"> Team </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[3px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="#" >
                    <span className="block rounded-full bg-soup px-8 py-3 text-base font-medium group-hover:bg-transparent"
                    >
                      Contact
                    </span>
                  </a>

                </div>
              </div>

            </div>

          </div>

        </div>
      </header>

      <section className={`${quattrocento.className} bg-soup text-stone-700`}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                src="/infusion.png"
                width={1000}
                height={760}
                className="absolute inset-0 h-full w-full object-cover"
                alt="Infusion"
              />
            </div>

            <div className="lg:py-12">
              <h2 className="text-7xl font-bold sm:text-7xl">What can AI do for your team?</h2>
              <h3 className="text-2xl py-10 sm:text-2xl">Ignite <b>workforce productivity</b> and <b>automation capabilities</b>.</h3>

              <p className="text-xl">
                We&apos;re an <b>AI consulting services studio</b>.<br />We work with clients of all sizes to <b>strategize</b>, <b>evangelize</b>, <b>integrate</b> or <b>build</b> AI solutions that are <b>safe</b>, <b>robust</b> and <b>tailored</b> to their needs.
              </p>

              <a className="mt-8 group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[3px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="#" >
                <span className="block rounded-full bg-soup px-8 py-3 text-base font-medium group-hover:bg-transparent" >
                  Get In Touch
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`${quattrocento.className} bg-soup text-stone-700`}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <h1 className="text-6xl font-bold sm:text-6xl">How we help</h1>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <li>
              <a className="group block overflow-hidden">
              <Image
                src="/strategy.png"
                width={1000}
                height={760}
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                alt="Strategy"
              />
                <div className="relative pt-3 tracking-wider">
                  <h3 className="text-2xl font-bold">Strategy</h3>
                  <p className="mt-2">
                    We review opportunities for AI to boost your workforce productivity and automation capabilities.
                  </p>
              </div>
            </a>
          </li>

          <li>
            <a className="group block overflow-hidden">
              <Image
                src="/training.png"
                width={1000}
                height={760}
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                alt="Training"
              />
            <div className="relative pt-3 tracking-wider">
              <h3 className="text-2xl font-bold">Training & Evangelization</h3>
              <p className="mt-2">
                We train your teams on AI concepts, use cases and risks. We also provide continuous evangelization of AI within your organization.
              </p>
            </div>
          </a>
        </li>

        <li>
          <a className="group block overflow-hidden">
            <Image
                src="/integrating.png"
                width={1000}
                height={760}
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                alt="Integrating"
            />

          <div className="relative pt-3 tracking-wider">
            <h3 className="text-2xl font-bold">Integration</h3>
            <p className="mt-2">
              We review the most relevant tools for your use cases. We can implement them in your organization.
            </p>
          </div>
        </a>
      </li>

      <li>
        <a className="group block overflow-hidden">
          <Image
                src="/building.png"
                width={1000}
                height={760}
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                alt="Building"
            />

        <div className="relative pt-3 tracking-wider">
          <h3 className="text-2xl font-bold">Building</h3>
          <p className="mt-2">
            We can implement custom AI solutions to address your specific needs.
          </p>
        </div>
      </a>
    </li>

  </ul>
</div>
    </section>

    <section className={`${quattrocento.className} bg-soup text-stone-700`}>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold sm:text-6xl">What makes us special</h1>
        </div>

        <p className="mt-8 text-xl">
          All members of our team are <b>seasoned tech professionals</b> with <b>top educational background</b>, <b>10+ years of professional experience</b>, and contributed to <b>top tech companies</b> like Spotify, Alan, Dataiku, 55...<br /><br />
          This allows us to approach AI consulting with the following <b>foundational principles</b>:
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg p-4">
              <Image
                src="/experienced.png"
                width={40}
                height={40}
                alt="Experienced"
              />
            </span>

            <div>
              <h2 className="text-4xl font-bold">Experienced</h2>
              <p className="mt-1 text-sm">
                We have a deep understanding of what it takes to make AI deliver ROI in a safe and secure way.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg p-4">
            <Image
                src="/pragmatic.png"
                width={40}
                height={40}
                alt="Pragmatic"
              />
            </span>

            <div>
              <h2 className="text-4xl font-bold">Pragmatic</h2>

              <p className="mt-1 text-sm">
                We aim at impact and measurable results. We know how to prioritize and focus on what matters.
              </p>
            </div>
          </div>


          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg p-4">
              <Image
                src="/holistic.png"
                width={40}
                height={40}
                alt="Holistic"
              /> 
            </span>

            <div>
              <h2 className="text-4xl font-bold">Holistic</h2>
              <p className="mt-1 text-sm">
                Making AI systems truly work require AI expertise, but also a more holistic experience in software engineering, data engineering, and product management and change management.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg p-4">
              <Image
                src="/efficient.png"
                width={40}
                height={40}
                alt="Efficient"
              /> 
            </span>

            <div>
              <h2 className="text-4xl font-bold">Efficient</h2>

              <p className="mt-1 text-sm">
                We know how to operate with speed. Time is money. We go fast and take shortcuts when we can.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg p-4">
              <Image
                src="/transparent.png"
                width={40}
                height={40}
                alt="Transparent"
              /> 
            </span>

            <div>
              <h2 className="text-4xl font-bold">Transparent</h2>

              <p className="mt-1 text-sm">
                We are transparent and communicate clearly, frequently. We are not afraid to say no.
                We show our work early and often, and report on metrics.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg p-4">
              <Image
                src="/humane.png"
                width={40}
                height={40}
                alt="Humane"
              />
            </span>

            <div>
              <h2 className="text-4xl font-bold">Humane</h2>

              <p className="mt-1 text-sm">
                We understand that AI can be scary. We see this as a central topic and approach it with empathy and deep care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <footer className={`${quattrocento.className} bg-soup text-stone-700`}>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <a href="#" className="text-2xl"> Infusion </a>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </>
);
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            Nuzzle
          </span>
          <a
            href="mailto:hello@nuzzleapp.io"
            className="text-sm font-medium text-[#3a7d44] hover:text-[#2d6235] transition-colors"
          >
            Contact
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#f4fbf5] py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/nuzzle-logo.png"
                alt="Nuzzle"
                width={240}
                height={80}
                className="mx-auto"
                priority
              />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              Find your dog&rsquo;s community.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Nuzzle connects dog owners through breed communities, local
              meetups, and neighborhood dog spots — a social home for you and
              your pup.
            </p>
          </div>
          <div className="max-w-5xl mx-auto mt-14">
            <Image
              src="/dog-friends.png"
              alt="A group of happy dogs"
              width={1200}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
              Everything for dog people
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon="🐕"
                title="Breed Communities"
                description="Join a feed tailored to your dog's breed. Ask questions, share stories, and get tips from owners who get it."
              />
              <FeatureCard
                icon="📍"
                title="Local Dog Spots"
                description="Discover dog-friendly parks, beaches, and cafés near you. Check in at the dog beach and see who else is there."
              />
              <FeatureCard
                icon="🗓️"
                title="Meetups & Playdates"
                description="Organize or join local meetups, RSVP to events, and arrange playdates for dogs who click."
              />
              <FeatureCard
                icon="💬"
                title="Q&A & Discussions"
                description="Get real answers from real owners. Post questions, share advice, and build lasting connections."
              />
              <FeatureCard
                icon="🤝"
                title="Dog Social Graph"
                description="Log the dogs your pup has met, track new friendships, and keep up with your four-legged network."
              />
              <FeatureCard
                icon="🔔"
                title="Stay in the Loop"
                description="Get notified when someone reacts to your post, joins your meetup, or connects with your dog."
              />
            </div>
          </div>
        </section>

        {/* Organization / About */}
        <section className="py-20 px-6 bg-[#f4fbf5]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Nuzzle
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Nuzzle is built by{" "}
              <strong className="text-gray-900">Little Wonder LLC</strong> — a
              small team passionate about building thoughtful software for the
              people (and pets) we care about.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We&rsquo;re a dog-lover-run company focused on creating genuine
              community experiences — not just another social network.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in touch
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Questions, feedback, or just want to say hi? We&rsquo;d love to
              hear from you.
            </p>
            <a
              href="mailto:hello@nuzzleapp.io"
              className="inline-block bg-[#3a7d44] text-white text-lg font-medium px-8 py-4 rounded-xl hover:bg-[#2d6235] transition-colors shadow-sm"
            >
              hello@nuzzleapp.io
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span>&copy; 2026 Little Wonder LLC. All rights reserved.</span>
          <nav className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <a
              href="mailto:hello@nuzzleapp.io"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#b2d9b8] hover:shadow-sm transition-all">
      <div className="text-3xl mb-4" role="img" aria-label={title}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

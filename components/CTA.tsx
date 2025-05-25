// ============================================================================
// Imports
// ============================================================================
import Image from "next/image";
import Link from "next/link";

// ============================================================================
// Constants
// ============================================================================
const CTA_IMAGE = {
  src: "images/cta.svg",
  width: 362,
  height: 232,
  alt: "cta"
};

const PLUS_ICON = {
  src: "/icons/plus.svg",
  width: 12,
  height: 12,
  alt: "plus"
};

// ============================================================================
// Component
// ============================================================================
const Cta = () => {
  return (
    <section className="cta-section">
      {/* Badge and Heading Section */}
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>

      {/* Description Section */}
      <p>
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>

      {/* Visual Elements */}
      <Image
        src={CTA_IMAGE.src}
        alt={CTA_IMAGE.alt}
        width={CTA_IMAGE.width}
        height={CTA_IMAGE.height}
      />

      {/* Action Button */}
      <button className="btn-primary">
        <Image
          src={PLUS_ICON.src}
          alt={PLUS_ICON.alt}
          width={PLUS_ICON.width}
          height={PLUS_ICON.height}
        />
        <Link href="/companions/new">
          <p>Build a New Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default Cta;

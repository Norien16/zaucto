// pages/index.tsx
import Image from "next/image";

export default function TrustSecurity() {
  return (
    <main className="bg-white text-gray-900 antialiased min-h-screen flex items-start justify-center py-16 px-6">
      <div className="w-full max-w-6xl px-6 grid md:grid-cols-2 gap-10">
        {/* LEFT: Text content */}
        <div className="pr-8">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight whitespace-nowrap">
            Built for{" "}
            <span className="text-[#CFAC35] italic">Trust & Security</span>
          </h2>

          <p className="mt-4 text-gray-500 max-w-lg text-base font-medium">
            Enterprise-grade security, global compliance, and proven reliability
            that procurement professionals depend on.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-2xl font-bold">Global Platform</h3>
              <p className="text-gray-600 mt-3 max-w-md text-base font-medium">
                Supporting procurement across 50+ countries with multi-language
                capabilities and local compliance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">24/7 Support</h3>
              <p className="text-gray-600 mt-3 max-w-md text-base font-medium">
                Round-the-clock technical support and dedicated account
                management for enterprise clients.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Bank-Grade Security</h3>
              <p className="text-gray-600 mt-3 max-w-md text-base font-medium">
                Supporting procurement across 50+ countries with multi-language
                capabilities and local compliance.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Cards grouped into 2 columns */}
        <div className="flex justify-end items-start gap-6 mt-16">
          {/* Left column: Card 1 & 3 */}
          <div className="flex flex-col gap-6 translate-y-8">
            {/* Card 1 */}
            <div className="border rounded-xl p-6 shadow-sm w-[250px] h-[250px] flex flex-col justify-between text-left">
              <Image
                src="/lock.png"
                alt="SOC 2"
                width={48}
                height={48}
                className="mb-2"
              />
              <div>
                <h4 className="font-bold text-2xl">SOC 2 Type II</h4>
                <p className="text-gray-600 text-xl">Security compliance certified</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border rounded-xl p-6 shadow-sm w-[250px] h-[250px] flex flex-col justify-between text-left">
              <Image
                src="/lock1.png"
                alt="GDPR"
                width={48}
                height={48}
                className="mb-2"
              />
              <div>
                <h4 className="font-bold text-2xl">GDPR Compliant</h4>
                <p className="text-gray-600 text-xl">Data protection certified</p>
              </div>
            </div>
          </div>

          {/* Right column: Card 2 & 4 */}
          <div className="flex flex-col gap-6 translate-y-16">
            {/* Card 2 */}
            <div className="border rounded-xl p-6 shadow-sm w-[250px] h-[250px] flex flex-col justify-between text-left">
              <Image
                src="/pss.png"
                alt="ISO"
                width={48}
                height={48}
                className="mb-2"
              />
              <div>
                <h4 className="font-bold text-2xl">ISO 27001</h4>
                <p className="text-gray-600 text-xl">
                  Information security management
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border rounded-xl p-6 shadow-sm w-[250px] h-[250px] flex flex-col justify-between text-left">
              <Image
                src="/iso.png"
                alt="PCI DSS"
                width={48}
                height={48}
                className="mb-2"
              />
              <div>
                <h4 className="font-bold text-2xl">PCI DSS</h4>
                <p className="text-gray-600 text-xl">
                  Payment security standard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

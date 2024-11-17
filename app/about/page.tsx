// app/about/page.tsx

export default function AboutPage() {
    return (
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About</h1>
          <h2 className="text-3xl font-bold mb-6">
            Transforming Data into Strategic Assets
          </h2>
          <p>
          As an experienced AI and Machine Learning Consultant, I specialize in converting complex data into actionable insights that drive business growth and innovation. Leveraging a unique blend of quantitative user experience research and advanced machine learning expertise, I offer tailored solutions that align with your business objectives, optimize processes, and enhance customer experiences.
          </p>
        <section id="value-to-business" className="py-12">
          <h3 className="text-2xl font-semibold mt-6">Value to Your Business:</h3>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              <strong>Enhanced Decision-Making:</strong> Transform raw data into strategic insights, enabling accurate, data-driven decisions that align with market realities and business objectives.
            </li>
            <li>
              <strong>Operational Efficiency:</strong> Automate complex data analysis tasks to reduce time and resource consumption, allowing your team to focus on core business activities.
            </li>
            <li>
              <strong>Competitive Advantage:</strong> Stay ahead in the market by adopting cutting-edge AI technologies and data strategies tailored to your specific needs.
            </li>
            <li>
              <strong>Improved Customer Experience:</strong> Leverage in-depth customer insights to personalize products and services, increasing customer satisfaction and loyalty.
            </li>
          </ul>
        </section>

      </div>
      
    );
  }
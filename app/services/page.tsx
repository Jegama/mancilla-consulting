// app/services/page.tsx

import ServiceSection from "../components/ServiceSection";
import {
  BrainCircuit,
  Database,
  ChartSpline,
  BotMessageSquare,
  ChartNoAxesCombined,
  UserRoundPlus,
} from "lucide-react";

export const metadata = {
  title: "Services | Mancilla Consulting",
  description:
    "Discover our AI and Machine Learning services designed to transform your business.",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Our Services
      </h1>
      <div className="space-y-12">
        {/* AI and Machine Learning Solutions */}
        <ServiceSection
          id="ai-ml-solutions"
          title="AI and Machine Learning Solutions"
          description="
            Develop custom AI/ML models to solve specific business challenges, such as predictive analytics, recommendation systems, and customer behavior modeling. Implement deep learning techniques, natural language processing (NLP), and large language models (LLMs) to automate and enhance business processes.
          "
          icon={BrainCircuit}
          items={[
            {
              title: "Predictive Modeling",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Develop models to forecast sales, customer churn, demand, and other key business metrics.</li>
                  <li>Utilize time-series analysis, regression models, and machine learning algorithms for accurate predictions.</li>
                </ul>
              `,
            },
            {
              title: "Recommendation Systems",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Create algorithms that suggest products or content to users based on their behavior and preferences.</li>
                  <li>Implement collaborative filtering, content-based filtering, or hybrid approaches.</li>
                </ul>
              `,
            },
            {
              title: "Customer Behavior Modeling",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Analyze customer interactions to predict future behavior.</li>
                  <li>Use classification and clustering techniques to segment customers.</li>
                </ul>
              `,
            },
          ]}
          relatedLinks={[
            {
              title: "Predictive Analytics for Inventory Management",
              href: "/case-studies#predictive-inventory-analytics",
            },
          ]}
        />

        {/* Data Strategy and Roadmapping */}
        <ServiceSection
          id="data-strategy"
          title="Data Strategy and Roadmapping"
          description="
            Design comprehensive data strategies and implementation roadmaps that align AI and data science capabilities with your business goals.
          "
          icon={Database}
          items={[
            {
              title: "Data Assessment and Audit",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Evaluate your current data assets, quality, and infrastructure.</li>
                  <li>Identify gaps and opportunities for improvement.</li>
                </ul>
              `,
            },
            {
              title: "Strategic Roadmap Development",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Outline a step-by-step plan for data collection, processing, analysis, and AI integration.</li>
                  <li>Align data initiatives with business goals and KPIs.</li>
                </ul>
              `,
            },
            {
              title: "Technology and Tool Recommendations",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Advise on the selection of appropriate tools, platforms, and technologies that fit your business needs and budget.</li>
                </ul>
              `,
            },
          ]}
        />

        {/* Advanced Data Analysis and Visualization */}
        <ServiceSection
          id="data-analysis"
          title="Advanced Data Analysis and Visualization"
          description="
            Explore your data's trends, patterns, and relationships using statistical analysis and predictive modeling. Create interactive dashboards and visualizations that inform strategic decisions and provide real-time insights.
          "
          icon={ChartSpline}
          items={[
            {
              title: "Trend and Pattern Analysis",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Use statistical methods to uncover significant trends and patterns in your data.</li>
                  <li>Perform hypothesis testing, regression analysis, and multivariate analysis.</li>
                </ul>
              `,
            },
            {
              title: "Interactive Dashboards",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Develop dashboards using tools like Tableau or custom Python/R solutions.</li>
                  <li>Provide real-time data monitoring and insights.</li>
                </ul>
              `,
            },
            {
              title: "Statistical Modeling",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Apply advanced statistical techniques to model complex business scenarios.</li>
                  <li>Use models to simulate outcomes and inform strategic decisions.</li>
                </ul>
              `,
            },
          ]}
        />

        {/* Natural Language Processing (NLP) and Chatbot Development */}
        <ServiceSection
          id="nlp-chatbot"
          title="Natural Language Processing (NLP) and Chatbot Development"
          description="
            Build NLP models and AI-powered chatbots to automate customer support, improve information retrieval, and enhance user engagement.
          "
          icon={BotMessageSquare}
          items={[
            {
              title: "Text Analytics",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Extract insights from unstructured text data such as customer feedback, reviews, and social media posts.</li>
                  <li>Perform sentiment analysis, topic modeling, and entity recognition.</li>
                </ul>
              `,
            },
            {
              title: "Chatbots and Virtual Assistants",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Design and implement AI-driven chatbots for customer support and engagement.</li>
                  <li>Utilize LLMs and embeddings for natural and context-aware interactions.</li>
                </ul>
              `,
            },
            {
              title: "Document Indexing and Retrieval Systems",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Develop advanced indexing algorithms for efficient information retrieval.</li>
                  <li>Enhance knowledge management with AI-powered search capabilities.</li>
                </ul>
              `,
            },
          ]}
          relatedLinks={[
            {
              title: "AI-Powered Research Librarian",
              href: "/case-studies#ai-research-librarian",
            },
            {
              title: "Customer Support AI Chatbot",
              href: "/case-studies#customer-support-chatbot",
            },
          ]}
        />

        {/* Customer Insights and Market Analysis */}
        <ServiceSection
          id="customer-insights"
          title="Customer Insights and Market Analysis"
          description="
            Characterize and segment customers using machine learning techniques to gain deeper market understanding. Personalize marketing strategies and improve customer experience based on data-driven insights.
          "
          icon={ChartNoAxesCombined}
          items={[
            {
              title: "Customer Segmentation",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Use clustering algorithms to segment your customer base.</li>
                  <li>Identify key characteristics and behaviors for targeted marketing.</li>
                </ul>
              `,
            },
            {
              title: "Market Trend Analysis",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Analyze market data to identify emerging trends and opportunities.</li>
                  <li>Provide strategic recommendations based on data insights.</li>
                </ul>
              `,
            },
            {
              title: "Personalization Strategies",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Implement AI solutions to personalize user experiences across platforms.</li>
                  <li>Increase engagement and conversion rates through tailored content.</li>
                </ul>
              `,
            },
          ]}
        />

        {/* User Experience (UX) Research and Optimization */}
        <ServiceSection
          id="ux-research"
          title="User Experience (UX) Research and Optimization"
          description="
            Utilize quantitative and qualitative research methods to enhance product usability and customer satisfaction. Implement AI tools to analyze user behavior and optimize the user experience across platforms.
          "
          icon={UserRoundPlus}
          items={[
            {
              title: "Quantitative UX Research",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Analyze user interaction data to identify pain points and areas for improvement.</li>
                  <li>Conduct A/B testing and multivariate testing to optimize features.</li>
                </ul>
              `,
            },
            {
              title: "Machine Learning in UX",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Enhance product usability through data-driven design decisions.</li>
                </ul>
              `,
            },
          ]}
        />
      </div>
    </div>
  );
}

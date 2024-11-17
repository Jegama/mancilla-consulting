// app/case-studies/page.tsx

import ServiceSection from "../components/ServiceSection";
import { Briefcase } from "lucide-react";

export const metadata = {
  title: "Case Studies | Mancilla Consulting",
  description:
    "Explore our case studies to see how we've helped businesses achieve their goals.",
};

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Case Studies
      </h1>
      <div className="space-y-12">
        {/* Case Study 1 */}
        <ServiceSection
          id="ai-research-librarian"
          title="AI-Powered Research Librarian"
          description="<strong>Client Need:</strong> A company struggled to access and utilize a vast internal research document repository."
          icon={Briefcase}
          items={[
            {
              title: "Solution Implemented",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Developed an AI-powered indexing system to categorize and index all research documents.</li>
                  <li>Created an autonomous query system that directs user searches to the most relevant content.</li>
                  <li>Implemented a multi-container architecture using Docker for efficient management of query engines.</li>
                </ul>
              `,
            },
            {
              title: "Business Impact",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li><strong>Enhanced Data Retrieval:</strong> Reduced time spent searching for documents by 80%.</li>
                  <li><strong>Improved Decision-Making:</strong> Enabled employees to access critical information quickly.</li>
                  <li><strong>User Satisfaction:</strong> Increased internal user satisfaction due to improved accessibility.</li>
                </ul>
              `,
            },
          ]}
          relatedLinks={[
            {
              title: "Natural Language Processing (NLP) and Chatbot Development",
              href: "/services#nlp-chatbot",
            },
          ]}
        />

        {/* Repeat for other case studies... */}

        {/* Case Study 2 */}
        <ServiceSection
          id="modular-survey-analysis"
          title="Modular Survey Analysis System"
          description="<strong>Client Need:</strong> Manual analysis of diverse surveys was time-consuming and prone to errors."
          icon={Briefcase}
          items={[
            {
              title: "Solution Implemented",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Designed a modular system capable of autonomously analyzing various survey types.</li>
                  <li>Implemented context-aware logic to understand question dependencies and survey flow.</li>
                  <li>Developed an autonomous clustering algorithm for open-ended responses, allowing for automatic categorization and description.</li>
                </ul>
              `,
            },
            {
              title: "Business Impact",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li><strong>Efficiency Gains:</strong> Reduced survey analysis time by 70%.</li>
                  <li><strong>Resource Optimization:</strong> Decreased resource allocation by 50%, allowing reallocation to other strategic initiatives.</li>
                  <li><strong>Insight Depth:</strong> Provided deeper insights through advanced analysis, leading to more effective strategy development.</li>
                </ul>
              `,
            },
          ]}
        />

        {/* Case Study 3 */}
        <ServiceSection
          id="customer-support-chatbot"
          title="Customer Support AI Chatbot"
          description="<strong>Client Need:</strong> A high volume of customer inquiries overwhelmed the support team, leading to delayed responses and decreased customer satisfaction."
          icon={Briefcase}
          items={[
            {
              title: "Solution Implemented",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Developed an autonomous customer support agent using advanced NLP and GPT-3.5.</li>
                  <li>Indexed over 300 support articles to create a comprehensive knowledge base.</li>
                  <li>Utilized embeddings to match customer queries with the most relevant information.</li>
                </ul>
              `,
            },
            {
              title: "Business Impact",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li><strong>Reduced Workload:</strong> Lowered call center inquiries by 40%, allowing support staff to focus on complex issues.</li>
                  <li><strong>Improved Customer Experience:</strong> Increased customer satisfaction scores due to prompt and accurate responses.</li>
                  <li><strong>Cost Savings:</strong> Decreased operational costs associated with customer support.</li>
                </ul>
              `,
            },
          ]}
          relatedLinks={[
            {
              title: "Natural Language Processing (NLP) and Chatbot Development",
              href: "/services#nlp-chatbot",
            },
          ]}
        />

        {/* Case Study 4 */}
        <ServiceSection
          id="predictive-inventory-analytics"
          title="Predictive Analytics for Inventory Management"
          description="<strong>Client Need:</strong> A retailer needed to optimize inventory levels to reduce costs and prevent stockouts."
          icon={Briefcase}
          items={[
            {
              title: "Solution Implemented",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li>Developed predictive models using historical sales data, seasonal trends, and external factors.</li>
                  <li>Implemented machine learning algorithms to forecast demand at a granular level.</li>
                </ul>
              `,
            },
            {
              title: "Business Impact",
              description: `
                <ul class="list-disc ml-6 mt-2 space-y-2">
                  <li><strong>Inventory Optimization:</strong> Reduced excess inventory by 25%, freeing up capital.</li>
                  <li><strong>Sales Increase:</strong> Minimized stockouts, leading to a 15% increase in sales.</li>
                  <li><strong>Data-Driven Decisions:</strong> Enabled proactive inventory planning and procurement.</li>
                </ul>
              `,
            },
          ]}
          relatedLinks={[
            {
              title: "AI and Machine Learning Solutions",
              href: "/services#ai-ml-solutions",
            },
          ]}
        />

      </div>
    </div>
  );
}
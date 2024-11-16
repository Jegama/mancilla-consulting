import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, BrainCircuit, BotMessageSquare, Database, ChartSpline, ChartNoAxesCombined, UserRoundPlus } from 'lucide-react'
import Link from "next/link"
import ChatBot from './components/Chatbot'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Briefcase className="h-6 w-6 mr-2" />
          <span className="font-bold">Mancilla Consulting</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Mancilla Consulting
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Turning Complex Data into Business Growth with AI and Machine Learning.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#services">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BrainCircuit className="w-4 h-4 mr-2" />
                    AI and Machine Learning Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Develop custom AI/ML models to solve business challenges and optimize processes.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-4 h-4 mr-2" />
                    Data Strategy and Roadmapping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Design data strategies that align AI capabilities with your business goals for maximum impact.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    < ChartSpline className="w-4 h-4 mr-2" />
                    Advanced Data Analysis and Visualization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Analyze data trends and create interactive dashboards for real-time strategic insights.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BotMessageSquare className="w-4 h-4 mr-2" />
                    Chatbot Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Build NLP models and AI chatbots to automate support and enhance user engagement.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ChartNoAxesCombined className="w-4 h-4 mr-2" />
                    Customer Insights and Market Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Segment customers using machine learning to personalize marketing and improve experiences.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserRoundPlus className="w-4 h-4 mr-2" />
                    UX Research and Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Use AI to analyze user behavior and optimize user experience across platforms.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="ai-representative" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">AI Representative</h2>
            <ChatBot />
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Ready to take your business to the next level? Contact us today for a free consultation.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <Link href="mailto:jesus@mancillaconsulting.com">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Mancilla Consulting LLC. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
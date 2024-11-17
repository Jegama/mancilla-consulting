// app/contact/page.tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
    return (
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 py-12">
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
    );
  }
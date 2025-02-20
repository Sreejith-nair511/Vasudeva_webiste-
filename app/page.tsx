import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Our School</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <QuickLinkCard title="Academics" description="View your child's academic performance" href="/academics" />
        <QuickLinkCard title="Activities" description="Explore extracurricular activities" href="/activities" />
        <QuickLinkCard title="Notices" description="Stay updated with school announcements" href="/notices" />
        <QuickLinkCard
          title="Teacher's Feedback"
          description="Read personalized feedback from teachers"
          href="/feedback"
        />
      </div>
    </div>
  )
}

function QuickLinkCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full">
          <Link href={href}>View {title}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}


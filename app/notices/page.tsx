import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const notices = [
  {
    id: 1,
    title: "Summer Vacation Dates",
    content: "The school will be closed for summer vacation from July 1st to August 15th.",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    content: "The next Parent-Teacher Meeting is scheduled for June 25th. Please make arrangements to attend.",
    date: "2023-06-10",
  },
  {
    id: 3,
    title: "Annual Day Celebration",
    content: "Our school's Annual Day will be celebrated on August 20th. All parents are cordially invited.",
    date: "2023-06-05",
  },
]

export default function NoticesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">General Notices</h1>
      <div className="space-y-6">
        {notices.map((notice) => (
          <Card key={notice.id}>
            <CardHeader>
              <CardTitle>{notice.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{notice.content}</p>
              <p className="text-sm text-muted-foreground mt-2">Posted on: {notice.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


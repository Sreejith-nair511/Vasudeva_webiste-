import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const feedback = {
  strengths: [
    "Excellent problem-solving skills in mathematics",
    "Active participation in class discussions",
    "Strong leadership qualities in group projects",
  ],
  improvements: [
    "Need to focus more on time management during exams",
    "Could benefit from more consistent homework completion",
    "Encourage more reading to improve vocabulary",
  ],
  suggestions: [
    "Consider joining the school's debate club to further develop communication skills",
    "Participate in upcoming math competitions to challenge problem-solving abilities",
    "Set up a daily reading routine to enhance language skills",
  ],
}

export default function FeedbackPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Teacher's Feedback</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeedbackCard title="Strengths" items={feedback.strengths} />
        <FeedbackCard title="Areas for Improvement" items={feedback.improvements} />
        <FeedbackCard title="Suggestions for Parents" items={feedback.suggestions} />
      </div>
    </div>
  )
}

function FeedbackCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}


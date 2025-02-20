import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const upcomingEvents = [
  { name: "Annual Sports Day", date: "2023-07-15" },
  { name: "Science Fair", date: "2023-08-02" },
  { name: "Drama Club Performance", date: "2023-08-20" },
]

const pastEvents = [
  { name: "Math Olympiad", date: "2023-05-10", result: "2nd Place" },
  { name: "Debate Competition", date: "2023-06-05", result: "Finalist" },
]

const achievements = [
  { name: "Best Student of the Year", year: "2022" },
  { name: "Outstanding Athlete", year: "2023" },
]

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Extracurricular Activities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {upcomingEvents.map((event) => (
                <li key={event.name} className="flex justify-between">
                  <span>{event.name}</span>
                  <span className="text-muted-foreground">{event.date}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Past Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {pastEvents.map((event) => (
                <li key={event.name}>
                  <div className="flex justify-between">
                    <span>{event.name}</span>
                    <span className="text-muted-foreground">{event.date}</span>
                  </div>
                  <div className="text-sm text-primary">{event.result}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {achievements.map((achievement) => (
                <li key={achievement.name} className="flex justify-between">
                  <span>{achievement.name}</span>
                  <span className="text-muted-foreground">{achievement.year}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


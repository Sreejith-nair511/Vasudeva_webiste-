"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const subjects = ["Math", "Science", "English", "History", "Art"]
const performanceData = subjects.map((subject) => ({
  name: subject,
  marks: Math.floor(Math.random() * 41) + 60, // Random marks between 60 and 100
  attendance: Math.floor(Math.random() * 21) + 80, // Random attendance between 80 and 100
}))

const progressData = [
  { month: "Jan", performance: 75 },
  { month: "Feb", performance: 80 },
  { month: "Mar", performance: 78 },
  { month: "Apr", performance: 82 },
  { month: "May", performance: 85 },
]

export default function AcademicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Academic Performance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceData.map((subject) => (
                <div key={subject.name}>
                  <h3 className="font-semibold">{subject.name}</h3>
                  <div className="flex justify-between text-sm">
                    <span>Marks: {subject.marks}%</span>
                    <span>Attendance: {subject.attendance}%</span>
                  </div>
                  <div className="h-2 bg-secondary mt-1">
                    <div className="h-full bg-primary" style={{ width: `${subject.marks}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Progress Graph</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="performance" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


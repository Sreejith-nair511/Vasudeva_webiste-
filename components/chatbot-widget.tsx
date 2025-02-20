"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X } from "lucide-react"

type Message = {
  sender: "user" | "bot"
  text: string
  details?: string
}

type StudentContext = {
  recentSubject: string
  concernLevel: number
  academicPerformance: Record<string, number[]>
  extracurricularActivities: string[]
  behaviorPatterns: string[]
  lastInteraction: Date
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [context, setContext] = useState<StudentContext>({
    recentSubject: "",
    concernLevel: 0,
    academicPerformance: {
      math: [85, 88, 92],
      science: [78, 82, 80],
      english: [90, 92, 95],
    },
    extracurricularActivities: ["Robotics Club", "Chess Club"],
    behaviorPatterns: ["creative", "sometimes distracted"],
    lastInteraction: new Date(),
  })

  const conversationCount = useRef(0)

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "Hello! I'm Vasudeva, your AI assistant. How can I help you today?",
        },
      ])
    }
  }, [messages])

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage: Message = { sender: "user", text: input }
      setMessages((prevMessages) => [...prevMessages, userMessage])
      setInput("")
      generateBotResponse(input)
      conversationCount.current += 1
    }
  }

  const generateBotResponse = (userInput: string) => {
    const lowercaseInput = userInput.toLowerCase()
    let botResponse: Message = { sender: "bot", text: "" }

    if (lowercaseInput.includes("performance") || lowercaseInput.includes("score")) {
      const subject = getSubjectFromInput(lowercaseInput)
      setContext((prevContext) => ({ ...prevContext, recentSubject: subject }))
      botResponse = generatePerformanceResponse(subject)
    } else if (lowercaseInput.includes("activit") || lowercaseInput.includes("event")) {
      botResponse = generateActivityResponse()
    } else if (lowercaseInput.includes("teacher") || lowercaseInput.includes("feedback")) {
      botResponse = generateTeacherFeedbackResponse()
    } else if (lowercaseInput.includes("notice") || lowercaseInput.includes("announcement")) {
      botResponse = generateNoticeResponse()
    } else if (lowercaseInput.includes("improve") || lowercaseInput.includes("help")) {
      botResponse = generateImprovementSuggestion()
    } else {
      botResponse = generateGenericResponse()
    }

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botResponse])
    }, 1000)

    // Simulate learning by adjusting the context based on the conversation
    setContext((prevContext) => ({
      ...prevContext,
      lastInteraction: new Date(),
      concernLevel: prevContext.concernLevel + (lowercaseInput.includes("worried") ? 1 : 0),
    }))
  }

  const getSubjectFromInput = (input: string): string => {
    const subjects = ["math", "science", "english", "history", "art"]
    return subjects.find((subject) => input.includes(subject)) || "overall"
  }

  const generatePerformanceResponse = (subject: string): Message => {
    const performances = context.academicPerformance[subject] || [80, 85, 90]
    const latestScore = performances[performances.length - 1]
    const improvement = latestScore - performances[performances.length - 2]

    const responseText = `Your child's latest score in ${subject} is ${latestScore}%, which is a ${Math.abs(improvement)}% ${
      improvement >= 0 ? "improvement" : "decrease"
    } from the previous test.`

    let details = ""

    if (improvement < 0) {
      details = `I've noticed a slight dip in ${subject} performance. Let's work on a strategy to bring those scores back up. Would you like a personalized study plan?`
      setContext((prevContext) => ({ ...prevContext, concernLevel: prevContext.concernLevel + 1 }))
    } else {
      details = `Great progress in ${subject}! To maintain this upward trend, I suggest exploring some advanced topics. Would you like some challenging ${subject} problems to keep the momentum going?`
    }

    // Predictive analysis
    const trend = performances.reduce((a, b) => a + b, 0) / performances.length
    if (trend > 85) {
      details += ` Based on current trends, your child is likely to excel in the upcoming ${subject} exam. Keep up the great work!`
    } else {
      details += ` With consistent effort, we can aim for a 5-10% improvement in the next ${subject} test. Shall we set up a study schedule?`
    }

    return { sender: "bot", text: responseText, details }
  }

  const generateActivityResponse = (): Message => {
    const { extracurricularActivities } = context
    const randomActivity = extracurricularActivities[Math.floor(Math.random() * extracurricularActivities.length)]
    const date = new Date(Date.now() + Math.random() * 10 * 24 * 60 * 60 * 1000).toLocaleDateString()

    const responseText = `Your child is actively involved in ${randomActivity}.`
    let details = `The next ${randomActivity} session is on ${date}. `

    if (randomActivity === "Robotics Club") {
      details += `This is a great opportunity to develop problem-solving skills. Would you like some at-home robotics projects to complement their learning?`
    } else if (randomActivity === "Chess Club") {
      details += `Chess is excellent for strategic thinking. Shall I suggest some online chess tutorials to further improve their skills?`
    }

    return { sender: "bot", text: responseText, details }
  }

  const generateTeacherFeedbackResponse = (): Message => {
    const { behaviorPatterns } = context

    const responseText = `The teacher notes that your child is ${behaviorPatterns.join(" and ")}.`
    let details = ""

    if (behaviorPatterns.includes("creative")) {
      details += `To nurture their creativity, consider enrolling them in art classes or creative writing workshops. `
    }
    if (behaviorPatterns.includes("sometimes distracted")) {
      details += `To improve focus, we could try short study sessions with regular breaks. Would you like a customized focus-improvement plan?`
    }

    return { sender: "bot", text: responseText, details }
  }

  const generateNoticeResponse = (): Message => {
    const notices = [
      {
        event: "Parent-Teacher Meeting",
        date: "2023-07-05",
        time: "10:00 AM",
        impact: "crucial for discussing your child's progress",
      },
      {
        event: "Annual Sports Day",
        date: "2023-07-15",
        time: "9:00 AM",
        impact: "great for building team spirit and physical fitness",
      },
      {
        event: "Science Fair",
        date: "2023-07-25",
        time: "8:00 AM",
        impact: "excellent opportunity to showcase your child's scientific aptitude",
      },
    ]

    const randomNotice = notices[Math.floor(Math.random() * notices.length)]

    const responseText = `The ${randomNotice.event} is scheduled for ${randomNotice.date} at ${randomNotice.time}.`
    const details = `This event is ${randomNotice.impact}. Would you like me to set a reminder and provide preparation tips?`

    return { sender: "bot", text: responseText, details }
  }

  const generateImprovementSuggestion = (): Message => {
    const { recentSubject, academicPerformance } = context
    const subject = recentSubject || "overall studies"

    const responseText = `To improve in ${subject}, here are some tailored suggestions:`
    let details = ""

    if (subject === "math" || subject === "overall studies") {
      details += "1. Practice problem-solving daily with online math games.\n"
    }
    if (subject === "science" || subject === "overall studies") {
      details += "2. Watch educational science videos to reinforce concepts.\n"
    }
    if (subject === "english" || subject === "overall studies") {
      details += "3. Encourage daily reading and discuss the stories together.\n"
    }

    details += `\nWould you like a personalized 30-day improvement plan for ${subject}?`

    return { sender: "bot", text: responseText, details }
  }

  const generateGenericResponse = (): Message => {
    const responseText =
      "I'm here to help with any questions about your child's academics, activities, or school notices."
    const details =
      "Can you please specify if you'd like information about performance, activities, teacher feedback, or notices?"

    return { sender: "bot", text: responseText, details }
  }

  return (
    <>
      {!isOpen && (
        <Button className="fixed bottom-4 right-4 rounded-full p-4" onClick={() => setIsOpen(true)}>
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 w-96 h-[32rem] flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Vasudeva AI Assistant</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.text}
                </span>
                {message.details && <p className="text-sm text-muted-foreground mt-2 max-w-[80%]">{message.details}</p>}
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex w-full gap-2"
            >
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
              <Button type="submit">Send</Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}


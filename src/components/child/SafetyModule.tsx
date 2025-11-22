import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Shield, Lock, AlertTriangle, ThumbsUp, ThumbsDown, Eye, MessageCircle, Star, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

interface SafetyModuleProps {
  onBack: () => void;
  earnStar: () => void;
}

export function SafetyModule({ onBack, earnStar }: SafetyModuleProps) {
  const [currentTopic, setCurrentTopic] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: boolean | null }>({});

  const handleQuizAnswer = (topicIndex: number, isCorrect: boolean) => {
    setQuizAnswers(prev => ({ ...prev, [topicIndex]: isCorrect }));
    if (isCorrect) {
      earnStar();
    }
  };

  const topic = safetyTopics[currentTopic];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button variant="outline" onClick={onBack} className="border-2 border-green-300">
          <ArrowLeft className="size-4 mr-2" />
          Back to Home
        </Button>
        <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full border-2 border-green-300">
          <Shield className="size-5 text-green-600" />
          <span className="text-green-900">Safety First!</span>
        </div>
      </div>

      {/* Topic Selection */}
      <div className="grid md:grid-cols-5 gap-3 mb-8">
        {safetyTopics.map((t, index) => (
          <button
            key={index}
            onClick={() => setCurrentTopic(index)}
            className={`p-4 rounded-xl border-2 transition-all ${
              index === currentTopic
                ? 'bg-green-500 text-white border-green-600'
                : quizAnswers[index] === true
                ? 'bg-green-100 text-green-700 border-green-300'
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            <t.icon className="size-6 mx-auto mb-2" />
            <div className="text-sm">{t.shortTitle}</div>
          </button>
        ))}
      </div>

      {/* Topic Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTopic}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Card className="p-8 bg-white border-4 border-green-300 shadow-xl mb-6">
            <div className={`inline-flex p-4 rounded-2xl mb-6 ${topic.iconBg}`}>
              <topic.icon className="size-12 text-white" />
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">{topic.title}</h2>
            <p className="text-xl text-gray-700 mb-8">{topic.intro}</p>

            {/* Safety Rules */}
            <div className="space-y-6 mb-8">
              {topic.rules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200"
                >
                  <div className="text-4xl">{rule.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl text-gray-900 mb-2">{rule.title}</h3>
                    <p className="text-gray-700">{rule.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Good vs Bad Examples */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-2xl border-4 border-green-300">
                <div className="flex items-center gap-2 mb-4">
                  <ThumbsUp className="size-8 text-green-600" />
                  <h3 className="text-2xl text-green-900">Do This ✓</h3>
                </div>
                <ul className="space-y-3">
                  {topic.goodExamples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl border-4 border-red-300">
                <div className="flex items-center gap-2 mb-4">
                  <ThumbsDown className="size-8 text-red-600" />
                  <h3 className="text-2xl text-red-900">Don't Do This ✗</h3>
                </div>
                <ul className="space-y-3">
                  {topic.badExamples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertTriangle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quiz */}
            <div className="bg-yellow-50 p-6 rounded-2xl border-4 border-yellow-300">
              <h3 className="text-2xl text-gray-900 mb-4 flex items-center gap-2">
                <Star className="size-6 text-yellow-600" />
                Quick Check!
              </h3>
              <p className="text-lg text-gray-700 mb-4">{topic.quiz.question}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {topic.quiz.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(currentTopic, option.correct)}
                    disabled={quizAnswers[currentTopic] !== undefined}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      quizAnswers[currentTopic] === undefined
                        ? 'bg-white border-gray-300 hover:border-yellow-400'
                        : option.correct
                        ? 'bg-green-100 border-green-400'
                        : quizAnswers[currentTopic] === false && !option.correct
                        ? 'bg-red-100 border-red-400'
                        : 'bg-white border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{option.emoji}</div>
                      <div>
                        <p className="text-gray-900 mb-1">{option.text}</p>
                        {quizAnswers[currentTopic] !== undefined && option.correct && (
                          <Badge className="bg-green-600">Correct! ✓</Badge>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              {quizAnswers[currentTopic] !== undefined && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 p-4 bg-white rounded-lg border-2 border-yellow-300"
                >
                  <p className="text-gray-700">
                    <span className="text-yellow-600">Why: </span>
                    {topic.quiz.explanation}
                  </p>
                </motion.div>
              )}
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentTopic(Math.max(0, currentTopic - 1))}
              disabled={currentTopic === 0}
              className="border-2"
            >
              <ArrowLeft className="size-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={() => {
                if (currentTopic < safetyTopics.length - 1) {
                  setCurrentTopic(currentTopic + 1);
                } else {
                  onBack();
                }
              }}
              className="bg-green-600 hover:bg-green-700"
            >
              {currentTopic === safetyTopics.length - 1 ? 'Finish' : 'Next Topic'}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

const safetyTopics = [
  {
    shortTitle: "Privacy",
    title: "Keep Your Information Private",
    icon: Lock,
    iconBg: "bg-blue-500",
    intro: "Your personal information is special and should be kept safe, just like your toys!",
    rules: [
      {
        emoji: "🏠",
        title: "Never Share Personal Details",
        description: "Don't tell AI your full name, address, phone number, or school name. Keep this information secret!"
      },
      {
        emoji: "👨‍👩‍👧",
        title: "Ask a Grown-Up First",
        description: "Before sharing anything online with AI, always ask your parents or teacher if it's okay."
      },
      {
        emoji: "🎭",
        title: "Create Fun Usernames",
        description: "Use made-up names instead of your real name. Be creative and safe at the same time!"
      }
    ],
    goodExamples: [
      "Using a nickname like 'SuperGamer123'",
      "Asking mom before chatting with AI",
      "Saying 'I live in a big city' instead of your address",
      "Keeping passwords secret"
    ],
    badExamples: [
      "Telling AI your home address",
      "Sharing your phone number",
      "Using your full real name online",
      "Giving out your school's name"
    ],
    quiz: {
      question: "What should you do before using a new AI chatbot?",
      options: [
        { text: "Tell it all about yourself right away", emoji: "❌", correct: false },
        { text: "Ask a parent or teacher if it's safe", emoji: "✅", correct: true },
        { text: "Share your address to get started", emoji: "❌", correct: false },
        { text: "Give it your phone number", emoji: "❌", correct: false }
      ],
      explanation: "Always ask a trusted adult before using new AI tools. They can help make sure it's safe for you!"
    }
  },
  {
    shortTitle: "Truth",
    title: "AI Can Make Mistakes",
    icon: AlertTriangle,
    iconBg: "bg-orange-500",
    intro: "AI is smart, but it's not perfect! Sometimes it can give wrong information or make things up.",
    rules: [
      {
        emoji: "🔍",
        title: "Check Important Information",
        description: "If AI tells you something important for homework or decisions, check with other sources or ask an adult."
      },
      {
        emoji: "📚",
        title: "AI Doesn't Know Everything",
        description: "AI can't always tell what's true or false. It sometimes guesses and can be wrong."
      },
      {
        emoji: "❓",
        title: "Ask Questions",
        description: "If something AI says seems weird or wrong, it's okay to question it and ask a teacher or parent."
      }
    ],
    goodExamples: [
      "Checking AI's homework help with your teacher",
      "Using multiple sources for research",
      "Asking parents about confusing information",
      "Understanding that AI can make mistakes"
    ],
    badExamples: [
      "Believing everything AI says without checking",
      "Copying AI's answers for homework",
      "Trusting AI more than your teachers",
      "Not asking adults when confused"
    ],
    quiz: {
      question: "If AI tells you a fact for your homework, what should you do?",
      options: [
        { text: "Use it without checking - AI is always right", emoji: "❌", correct: false },
        { text: "Check it with another source or ask your teacher", emoji: "✅", correct: true },
        { text: "Tell everyone it must be true", emoji: "❌", correct: false },
        { text: "Never use any information from AI", emoji: "❌", correct: false }
      ],
      explanation: "AI can be helpful, but it's important to verify important information with trusted sources like teachers, books, or reliable websites!"
    }
  },
  {
    shortTitle: "Time",
    title: "Use AI for the Right Amount of Time",
    icon: Eye,
    iconBg: "bg-purple-500",
    intro: "Using AI can be fun, but it's important to take breaks and do other things too!",
    rules: [
      {
        emoji: "⏰",
        title: "Set Time Limits",
        description: "Don't spend all day with AI. Make time for playing outside, reading books, and being with friends and family."
      },
      {
        emoji: "🏃",
        title: "Stay Active",
        description: "Remember to move around, play sports, and do activities away from screens."
      },
      {
        emoji: "😴",
        title: "No AI Before Bed",
        description: "Stop using AI and screens at least an hour before bedtime so you can sleep well."
      }
    ],
    goodExamples: [
      "Setting a timer when using AI",
      "Taking breaks every 30 minutes",
      "Playing outside after screen time",
      "Having screen-free family time"
    ],
    badExamples: [
      "Using AI all day without breaks",
      "Skipping outdoor play for chatbots",
      "Using AI right before sleeping",
      "Ignoring friends and family"
    ],
    quiz: {
      question: "What's a healthy way to use AI?",
      options: [
        { text: "Use it all day, every day", emoji: "❌", correct: false },
        { text: "Use it for set times with breaks for other activities", emoji: "✅", correct: true },
        { text: "Only use it at night before bed", emoji: "❌", correct: false },
        { text: "Never take breaks when using it", emoji: "❌", correct: false }
      ],
      explanation: "Balance is important! Use AI for learning and fun, but also make time for physical activities, friends, and family."
    }
  },
  {
    shortTitle: "Strangers",
    title: "Don't Trust Strangers Online",
    icon: Shield,
    iconBg: "bg-red-500",
    intro: "Just like you wouldn't talk to strangers in real life, be careful with strangers using AI too!",
    rules: [
      {
        emoji: "🚫",
        title: "Don't Meet Online Friends",
        description: "Never agree to meet someone you only know from online or through AI. They might not be who they say they are."
      },
      {
        emoji: "🎁",
        title: "No Gifts from Strangers",
        description: "If someone online promises you gifts or prizes, tell an adult right away. It could be a trick!"
      },
      {
        emoji: "📧",
        title: "Don't Click Strange Links",
        description: "If AI or someone sends you a link you don't recognize, don't click it. Ask an adult first."
      }
    ],
    goodExamples: [
      "Telling parents about strange messages",
      "Only using AI with adult permission",
      "Being careful with links and downloads",
      "Keeping online activities supervised"
    ],
    badExamples: [
      "Clicking on suspicious links",
      "Agreeing to meet online contacts",
      "Accepting 'prizes' from strangers",
      "Keeping secrets from parents about online activity"
    ],
    quiz: {
      question: "Someone you met through an AI chat wants to meet you in person. What do you do?",
      options: [
        { text: "Tell your parents immediately", emoji: "✅", correct: true },
        { text: "Go meet them alone", emoji: "❌", correct: false },
        { text: "Give them your address", emoji: "❌", correct: false },
        { text: "Keep it a secret", emoji: "❌", correct: false }
      ],
      explanation: "Always tell a trusted adult if anyone online wants to meet you or asks for personal information. Your safety is most important!"
    }
  },
  {
    shortTitle: "Kindness",
    title: "Be Kind and Respectful",
    icon: MessageCircle,
    iconBg: "bg-green-500",
    intro: "Even though AI isn't a real person, it's good practice to be kind and respectful!",
    rules: [
      {
        emoji: "💝",
        title: "Use Polite Words",
        description: "Talk to AI the same way you'd talk to a teacher or friend. Say please and thank you!"
      },
      {
        emoji: "🚫",
        title: "Don't Ask for Bad Things",
        description: "Never ask AI to help you do something mean, dangerous, or against the rules."
      },
      {
        emoji: "🌟",
        title: "Practice Good Habits",
        description: "Using AI is practice for real conversations. Being kind to AI helps you be kind to everyone!"
      }
    ],
    goodExamples: [
      "Saying 'please' and 'thank you' to AI",
      "Asking for help with homework nicely",
      "Using AI to learn positive things",
      "Being respectful in your questions"
    ],
    badExamples: [
      "Asking AI to help you cheat",
      "Being rude or mean to AI",
      "Trying to trick AI into bad things",
      "Using mean or hurtful language"
    ],
    quiz: {
      question: "How should you talk to AI?",
      options: [
        { text: "However I want, it's just a computer", emoji: "❌", correct: false },
        { text: "Politely and respectfully, like talking to a teacher", emoji: "✅", correct: true },
        { text: "Try to trick it into saying bad things", emoji: "❌", correct: false },
        { text: "Use it to help me be mean to others", emoji: "❌", correct: false }
      ],
      explanation: "Being kind and respectful to AI is good practice for real life! It helps you develop good habits for all your interactions."
    }
  }
];

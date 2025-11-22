import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Brain, MessageSquare, Image as ImageIcon, Sparkles, Star, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Progress } from '../ui/progress';

interface LearningModuleProps {
  onBack: () => void;
  earnStar: () => void;
}

export function LearningModule({ onBack, earnStar }: LearningModuleProps) {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);

  const completeLesson = () => {
    if (!completed.includes(currentLesson)) {
      setCompleted([...completed, currentLesson]);
      earnStar();
    }
  };

  const nextLesson = () => {
    completeLesson();
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const lesson = lessons[currentLesson];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button variant="outline" onClick={onBack} className="border-2 border-purple-300">
          <ArrowLeft className="size-4 mr-2" />
          Back to Home
        </Button>
        <div className="flex items-center gap-2">
          <Progress value={((completed.length) / lessons.length) * 100} className="w-32 h-2" />
          <span className="text-gray-700">{completed.length}/{lessons.length}</span>
        </div>
      </div>

      {/* Lesson Navigation */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-4">
        {lessons.map((l, index) => (
          <button
            key={index}
            onClick={() => setCurrentLesson(index)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap border-2 transition-all ${
              index === currentLesson
                ? 'bg-purple-500 text-white border-purple-600'
                : completed.includes(index)
                ? 'bg-green-100 text-green-700 border-green-300'
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            {completed.includes(index) && <CheckCircle className="size-4" />}
            {l.title}
          </button>
        ))}
      </div>

      {/* Lesson Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentLesson}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Card className="p-8 bg-white border-4 border-purple-300 shadow-xl mb-6">
            <div className={`inline-flex p-4 rounded-2xl mb-6 ${lesson.iconBg}`}>
              <lesson.icon className="size-12 text-white" />
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">{lesson.title}</h2>
            <p className="text-xl text-gray-700 mb-8">{lesson.intro}</p>

            <div className="space-y-8">
              {lesson.content.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{section.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-gray-900 mb-2">{section.heading}</h3>
                      <p className="text-lg text-gray-700 mb-3">{section.text}</p>
                      {section.example && (
                        <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                          <p className="text-gray-600">
                            <span className="text-purple-600">Example:</span> {section.example}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Element */}
            {lesson.interactive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-yellow-50 p-6 rounded-2xl border-4 border-yellow-300"
              >
                <h3 className="text-2xl text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="size-6 text-yellow-600" />
                  Try It Yourself!
                </h3>
                <p className="text-lg text-gray-700 mb-4">{lesson.interactive.prompt}</p>
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-300">
                  <p className="text-gray-600 italic">{lesson.interactive.activity}</p>
                </div>
              </motion.div>
            )}
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={prevLesson}
              disabled={currentLesson === 0}
              className="border-2"
            >
              <ArrowLeft className="size-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={nextLesson}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {currentLesson === lessons.length - 1 ? (
                <>
                  <CheckCircle className="size-4 mr-2" />
                  Complete
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="size-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

const lessons = [
  {
    title: "What is AI?",
    icon: Brain,
    iconBg: "bg-blue-500",
    intro: "AI stands for Artificial Intelligence. It's when computers can think and learn, almost like a brain!",
    content: [
      {
        emoji: "🤖",
        heading: "AI is Like a Smart Helper",
        text: "Imagine having a robot friend that can learn new things. That's what AI is! It's computer programs that can learn from information and help us do things.",
        example: "When you talk to Siri or Alexa, you're talking to AI! It listens to your words and tries to help you."
      },
      {
        emoji: "📚",
        heading: "How Does AI Learn?",
        text: "Just like you learn by reading books and practicing, AI learns by looking at lots of information. The more it learns, the smarter it gets!",
        example: "If you show AI 1000 pictures of cats, it learns what cats look like and can recognize them in new pictures!"
      },
      {
        emoji: "🎮",
        heading: "AI is Everywhere!",
        text: "You use AI every day! It's in your games, apps, and even helps YouTube suggest videos you might like.",
        example: "Netflix uses AI to recommend shows you might enjoy based on what you've watched before."
      }
    ],
    interactive: {
      prompt: "Can you think of 3 places where you've used AI today?",
      activity: "Maybe you used voice search, played a video game with smart characters, or watched recommended videos!"
    }
  },
  {
    title: "How Chatbots Work",
    icon: MessageSquare,
    iconBg: "bg-green-500",
    intro: "Chatbots are AI programs that can talk with you! Let's learn how they understand what you say.",
    content: [
      {
        emoji: "💬",
        heading: "Chatbots Read Your Words",
        text: "When you type a message to a chatbot, it reads your words and tries to understand what you want. It's like having a conversation with a computer!",
        example: "If you type 'What's the weather?', the chatbot understands you want to know about the weather."
      },
      {
        emoji: "🧩",
        heading: "They Look for Patterns",
        text: "Chatbots look for patterns in what you say. They've learned from millions of conversations to know what people usually mean.",
        example: "If you say 'I'm hungry', the chatbot knows you might want food suggestions or restaurant recommendations."
      },
      {
        emoji: "🎯",
        heading: "They Try to Help",
        text: "The chatbot's job is to give you helpful answers. It uses everything it learned to pick the best response!",
        example: "Customer service chatbots can help you track packages, answer questions, or solve problems."
      }
    ],
    interactive: {
      prompt: "Imagine you're creating a chatbot. What would you want it to help people with?",
      activity: "Maybe a homework helper, a friend to talk to, or something that tells jokes!"
    }
  },
  {
    title: "AI & Images",
    icon: ImageIcon,
    iconBg: "bg-purple-500",
    intro: "Did you know AI can create and understand pictures? Let's explore this amazing ability!",
    content: [
      {
        emoji: "🎨",
        heading: "AI Can Make Pictures",
        text: "Some AI programs can draw pictures just by reading words! You can describe what you want, and it creates it.",
        example: "If you type 'a purple dragon flying over a rainbow castle', AI can create that picture for you!"
      },
      {
        emoji: "👁️",
        heading: "AI Can See Pictures",
        text: "AI can look at pictures and tell you what's in them. It can recognize faces, animals, objects, and more!",
        example: "When you upload a photo and it automatically tags your friends, that's AI recognizing faces!"
      },
      {
        emoji: "🔍",
        heading: "AI Learns from Many Pictures",
        text: "To get good at pictures, AI looks at millions of photos and learns what things look like. The more it sees, the better it gets!",
        example: "AI learned what dogs look like by seeing pictures of thousands of different dogs - big ones, small ones, fluffy ones!"
      }
    ],
    interactive: {
      prompt: "If you could ask AI to create any picture, what would it be?",
      activity: "Draw or describe your dream picture! Maybe a unicorn superhero or a castle made of candy?"
    }
  },
  {
    title: "AI Makes Predictions",
    icon: Sparkles,
    iconBg: "bg-yellow-500",
    intro: "AI is really good at guessing what might happen next! Let's see how it does this.",
    content: [
      {
        emoji: "🔮",
        heading: "AI Looks at Patterns",
        text: "AI notices patterns in data and uses them to predict what might happen. It's like noticing that dark clouds usually mean rain!",
        example: "When your phone suggests the next word you might type, that's AI predicting based on what you usually write."
      },
      {
        emoji: "📊",
        heading: "Learning from the Past",
        text: "AI uses information from the past to guess about the future. Just like you know that summer is hot because it's always been hot!",
        example: "Weather apps use AI to predict if it will rain by looking at past weather patterns."
      },
      {
        emoji: "🎯",
        heading: "Sometimes AI is Wrong",
        text: "Just like humans, AI can make mistakes! It's important to remember that AI predictions aren't always perfect.",
        example: "Sometimes the weather app says it will be sunny, but it rains anyway. AI does its best, but it's not magic!"
      }
    ],
    interactive: {
      prompt: "What would you like AI to predict for you?",
      activity: "Maybe what games you'd like, what books you'd enjoy, or what activities would be fun!"
    }
  }
];

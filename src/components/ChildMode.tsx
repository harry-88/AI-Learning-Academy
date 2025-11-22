import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Rocket, Shield, Sparkles, Star, Brain, MessageSquare, Image as ImageIcon, Lock, AlertTriangle, ThumbsUp, ThumbsDown, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { LearningModule } from './child/LearningModule';
import { SafetyModule } from './child/SafetyModule';
import { InteractiveGame } from './child/InteractiveGame';

interface ChildModeProps {
  onBack: () => void;
}

type Section = 'home' | 'learning' | 'safety' | 'games';

export function ChildMode({ onBack }: ChildModeProps) {
  const [section, setSection] = useState<Section>('home');
  const [stars, setStars] = useState(0);

  const earnStar = () => {
    setStars(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {/* Kid-Friendly Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b-4 border-purple-300 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={onBack} className="border-2">
                <ArrowLeft className="size-4 mr-2" />
                Exit
              </Button>
              <div className="flex items-center gap-2">
                <Rocket className="size-8 text-purple-600" />
                <span className="text-2xl text-purple-900">AI Adventure!</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full border-2 border-yellow-300">
                <Star className="size-5 text-yellow-600 fill-yellow-600" />
                <span className="text-yellow-900">{stars} Stars</span>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setSection('home')}
                className="border-2 border-purple-300"
              >
                <Home className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {section === 'home' && (
          <ChildHome setSection={setSection} stars={stars} />
        )}
        {section === 'learning' && (
          <LearningModule onBack={() => setSection('home')} earnStar={earnStar} />
        )}
        {section === 'safety' && (
          <SafetyModule onBack={() => setSection('home')} earnStar={earnStar} />
        )}
        {section === 'games' && (
          <InteractiveGame onBack={() => setSection('home')} earnStar={earnStar} />
        )}
      </AnimatePresence>
    </div>
  );
}

interface ChildHomeProps {
  setSection: (section: Section) => void;
  stars: number;
}

function ChildHome({ setSection, stars }: ChildHomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="inline-block mb-6"
        >
          <Rocket className="size-24 text-purple-600" />
        </motion.div>
        <h1 className="text-5xl text-purple-900 mb-4">Welcome to AI Adventure!</h1>
        <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
          Let's explore the amazing world of Artificial Intelligence together! 🎉
        </p>
      </div>

      {/* Progress */}
      <Card className="max-w-2xl mx-auto p-6 mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300">
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg text-gray-900">Your Learning Journey</span>
          <div className="flex items-center gap-2">
            <Star className="size-5 text-yellow-600 fill-yellow-600" />
            <span className="text-yellow-900">{stars} / 12 Stars</span>
          </div>
        </div>
        <Progress value={(stars / 12) * 100} className="h-3" />
        <p className="text-gray-600 mt-2">Keep learning to collect all stars!</p>
      </Card>

      {/* Learning Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {learningCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setSection(card.section as Section)}
          >
            <Card className={`p-6 h-full ${card.bgColor} border-4 ${card.borderColor} hover:shadow-2xl transition-all`}>
              <div className={`inline-flex p-4 rounded-2xl mb-4 ${card.iconBg}`}>
                <card.icon className={`size-8 ${card.iconColor}`} />
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-700 mb-4">{card.description}</p>
              <div className="flex flex-wrap gap-2">
                {card.topics.map((topic) => (
                  <Badge key={topic} variant="secondary" className="text-sm">
                    {topic}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Meet Your AI Friends */}
      <div className="bg-white rounded-3xl p-8 border-4 border-purple-300 shadow-xl">
        <h2 className="text-3xl text-center text-purple-900 mb-8">Meet Your AI Friends!</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {aiFriends.map((friend, index) => (
            <motion.div
              key={friend.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className={`w-24 h-24 rounded-full ${friend.color} mx-auto mb-4 flex items-center justify-center text-4xl shadow-lg`}>
                {friend.emoji}
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{friend.name}</h3>
              <p className="text-gray-600">{friend.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const learningCards = [
  {
    icon: Brain,
    title: "What is AI?",
    description: "Discover how AI thinks and learns, just like you do!",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    borderColor: "border-blue-300",
    iconBg: "bg-blue-500",
    iconColor: "text-white",
    section: "learning",
    topics: ["How AI Works", "AI Friends", "AI Games"]
  },
  {
    icon: Shield,
    title: "Stay Safe!",
    description: "Learn how to use AI safely and protect your information",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-300",
    iconBg: "bg-green-500",
    iconColor: "text-white",
    section: "safety",
    topics: ["Privacy Tips", "Good vs Bad", "Ask Adults"]
  },
  {
    icon: Sparkles,
    title: "Fun Games!",
    description: "Play interactive games and test what you've learned",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
    borderColor: "border-yellow-300",
    iconBg: "bg-yellow-500",
    iconColor: "text-white",
    section: "games",
    topics: ["Quizzes", "Puzzles", "Challenges"]
  }
];

const aiFriends = [
  {
    name: "Brainy",
    emoji: "🤖",
    role: "Teaches you how AI works",
    color: "bg-blue-200"
  },
  {
    name: "Shieldy",
    emoji: "🛡️",
    role: "Keeps you safe online",
    color: "bg-green-200"
  },
  {
    name: "Sparkle",
    emoji: "✨",
    role: "Makes learning fun!",
    color: "bg-purple-200"
  }
];

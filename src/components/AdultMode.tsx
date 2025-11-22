import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Brain, Shield, Users, BookOpen, Lightbulb, GraduationCap, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { TechnicalModule } from './adult/TechnicalModule';
import { ParentalGuide } from './adult/ParentalGuide';
import { RiskAssessment } from './adult/RiskAssessment';
import { RealWorldApplications } from './adult/RealWorldApplications';

interface AdultModeProps {
  onBack: () => void;
}

type Section = 'home' | 'technical' | 'parental' | 'risks' | 'applications';

export function AdultMode({ onBack }: AdultModeProps) {
  const [section, setSection] = useState<Section>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Professional Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={onBack}>
                <ArrowLeft className="size-4 mr-2" />
                Exit
              </Button>
              <div className="flex items-center gap-2">
                <GraduationCap className="size-7 text-blue-600" />
                <span className="text-xl text-gray-900">AI Learning Academy - Adult Mode</span>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setSection('home')}
            >
              <Home className="size-4 mr-2" />
              Dashboard
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {section === 'home' && (
          <AdultHome setSection={setSection} />
        )}
        {section === 'technical' && (
          <TechnicalModule onBack={() => setSection('home')} />
        )}
        {section === 'parental' && (
          <ParentalGuide onBack={() => setSection('home')} />
        )}
        {section === 'risks' && (
          <RiskAssessment onBack={() => setSection('home')} />
        )}
        {section === 'applications' && (
          <RealWorldApplications onBack={() => setSection('home')} />
        )}
      </AnimatePresence>
    </div>
  );
}

interface AdultHomeProps {
  setSection: (section: Section) => void;
}

function AdultHome({ setSection }: AdultHomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="inline-block mb-6"
        >
          <Brain className="size-20 text-blue-600" />
        </motion.div>
        <h1 className="text-5xl text-gray-900 mb-4">Comprehensive AI Education</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Deep dive into artificial intelligence technology, understand risks, and learn how to guide children in the age of AI
        </p>
      </div>

      {/* Main Navigation Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
        {mainSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => setSection(section.id as Section)}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-white to-gray-50 border-2 hover:border-blue-400 hover:shadow-xl transition-all">
              <div className={`inline-flex p-4 rounded-xl mb-4 ${section.iconBg}`}>
                <section.icon className="size-8 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">{section.title}</h3>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-gray-700">
                    <div className={`w-1.5 h-1.5 rounded-full ${section.iconBg}`}></div>
                    <span className="text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <Card className="p-6 text-center bg-white border-2">
              <div className={`text-4xl mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Learning Path */}
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
        <h2 className="text-3xl text-gray-900 mb-6">Recommended Learning Path</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {learningPath.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
              {index < learningPath.length - 1 && (
                <div className="hidden md:block absolute top-4 left-full w-full h-0.5 bg-blue-200"></div>
              )}
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

const mainSections = [
  {
    id: 'technical',
    icon: Brain,
    title: 'Technical Understanding',
    description: 'Explore how AI works, from machine learning to neural networks',
    iconBg: 'bg-blue-600',
    topics: [
      'Machine Learning Fundamentals',
      'Natural Language Processing',
      'Computer Vision',
      'Deep Learning & Neural Networks',
      'Training Data & Models'
    ]
  },
  {
    id: 'parental',
    icon: Users,
    title: 'Parental Guidance',
    description: 'Learn how to guide and supervise children using AI technologies',
    iconBg: 'bg-green-600',
    topics: [
      'Age-Appropriate AI Introduction',
      'Setting Boundaries & Rules',
      'Monitoring AI Usage',
      'Having Conversations About AI',
      'Teaching Critical Thinking'
    ]
  },
  {
    id: 'risks',
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Understand AI risks, ethical concerns, and safety considerations',
    iconBg: 'bg-red-600',
    topics: [
      'Privacy & Data Security',
      'Misinformation & Bias',
      'Addiction & Screen Time',
      'Social Engineering & Scams',
      'Ethical Considerations'
    ]
  },
  {
    id: 'applications',
    icon: Lightbulb,
    title: 'Real-World Applications',
    description: 'Discover how AI is used across industries and daily life',
    iconBg: 'bg-purple-600',
    topics: [
      'AI in Healthcare',
      'AI in Education',
      'AI in Entertainment',
      'AI in Business',
      'Future of AI Technology'
    ]
  }
];

const stats = [
  { value: '50+', label: 'Learning Modules', color: 'text-blue-600' },
  { value: '10+', label: 'Safety Topics', color: 'text-green-600' },
  { value: '4', label: 'Core Areas', color: 'text-purple-600' },
  { value: '100%', label: 'Evidence-Based', color: 'text-orange-600' }
];

const learningPath = [
  {
    title: 'Start with Basics',
    description: 'Understand what AI is and how it works'
  },
  {
    title: 'Learn the Risks',
    description: 'Explore safety concerns and mitigation strategies'
  },
  {
    title: 'Parental Tools',
    description: 'Gain skills to guide children safely'
  },
  {
    title: 'Apply Knowledge',
    description: 'Use AI responsibly in daily life'
  }
];

import { motion } from 'motion/react';
import { Sparkles, GraduationCap, Shield, Brain, Rocket, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import type { Mode } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onSelectMode: (mode: Mode) => void;
}

export function HomePage({ onSelectMode }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="size-8 text-purple-600" />
              <span className="text-2xl text-gray-900">AI Learning Academy</span>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => onSelectMode('child')}>
                Kid Mode
              </Button>
              <Button onClick={() => onSelectMode('adult')}>
                Adult Mode
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="size-4" />
              <span>Safe & Interactive Learning</span>
            </div>
            <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
              Discover the Magic of AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn how Artificial Intelligence works, explore its possibilities, and understand how to use it safely and responsibly. Perfect for curious kids and adults alike!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => onSelectMode('child')}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-lg px-8"
              >
                <Rocket className="size-5 mr-2" />
                Start Kid Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onSelectMode('adult')}
                className="text-lg px-8"
              >
                <GraduationCap className="size-5 mr-2" />
                Explore Adult Mode
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1603354350266-a8de3496163b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYzODMzOTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Learning"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Why Learn About AI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI is shaping our future. Understanding it helps us use technology safely and make better decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${feature.color}`}>
                    <feature.icon className="size-6 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mode Selection Section */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600">
              We've designed two unique experiences tailored to different age groups
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-purple-200 cursor-pointer" onClick={() => onSelectMode('child')}>
                <div className="flex justify-between items-start mb-4">
                  <Rocket className="size-12 text-purple-600" />
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Ages 7-15</div>
                </div>
                <h3 className="text-3xl text-gray-900 mb-4">Kid Mode</h3>
                <p className="text-gray-700 mb-6">
                  Fun, interactive lessons with games, animations, and friendly characters. Learn about AI through stories and adventures!
                </p>
                <ul className="space-y-2 mb-6">
                  {kidFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      <Sparkles className="size-4 text-purple-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => onSelectMode('child')}>
                  Enter Kid Mode
                </Button>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 cursor-pointer" onClick={() => onSelectMode('adult')}>
                <div className="flex justify-between items-start mb-4">
                  <GraduationCap className="size-12 text-blue-600" />
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">16+ & Parents</div>
                </div>
                <h3 className="text-3xl text-gray-900 mb-4">Adult Mode</h3>
                <p className="text-gray-700 mb-6">
                  In-depth technical explanations, real-world applications, and guidance for parents on teaching AI concepts safely.
                </p>
                <ul className="space-y-2 mb-6">
                  {adultFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      <Brain className="size-4 text-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => onSelectMode('adult')}>
                  Enter Adult Mode
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="size-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl text-gray-900 mb-4">Safety First, Always</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our platform prioritizes child safety with age-appropriate content, privacy education, and parental guidance. All content is carefully curated to ensure a safe learning environment.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <Shield className="size-5 text-green-600" />
                <span>No Personal Data Collection</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="size-5 text-green-600" />
                <span>Age-Appropriate Content</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="size-5 text-green-600" />
                <span>Privacy Education</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="size-5 text-green-600" />
                <span>Parental Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="size-6" />
                <span className="text-xl">AI Learning Academy</span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation with AI knowledge and digital literacy.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => onSelectMode('child')} className="hover:text-white transition-colors">Kid Mode</button></li>
                <li><button onClick={() => onSelectMode('adult')} className="hover:text-white transition-colors">Adult Mode</button></li>
                <li><button className="hover:text-white transition-colors">Safety Guidelines</button></li>
                <li><button className="hover:text-white transition-colors">Parent Resources</button></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Learning Topics</h4>
              <ul className="space-y-2 text-gray-400">
                <li>How AI Works</li>
                <li>AI Safety & Privacy</li>
                <li>Responsible AI Use</li>
                <li>AI in Daily Life</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Learning Academy. Designed for safe, responsible AI education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Brain,
    title: "Understand AI Technology",
    description: "Learn how AI thinks, learns, and makes decisions in simple, clear explanations.",
    color: "bg-purple-600"
  },
  {
    icon: Shield,
    title: "Stay Safe Online",
    description: "Discover how to protect your privacy and use AI tools responsibly and securely.",
    color: "bg-green-600"
  },
  {
    icon: Users,
    title: "Learn Together",
    description: "Designed for both kids and adults to explore AI concepts at their own pace.",
    color: "bg-blue-600"
  }
];

const kidFeatures = [
  "Interactive games & quizzes",
  "Animated explanations",
  "Safety tips in simple words",
  "Fun characters & stories"
];

const adultFeatures = [
  "Technical deep-dives",
  "Real-world AI applications",
  "Parental guidance resources",
  "Advanced learning modules"
];

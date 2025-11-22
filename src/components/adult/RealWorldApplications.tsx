import { motion } from 'motion/react';
import { ArrowLeft, Heart, GraduationCap, Tv, Briefcase, TrendingUp, Home, Car, Smartphone, Sparkles, Brain, Eye, AlertTriangle, Shield, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

interface RealWorldApplicationsProps {
  onBack: () => void;
}

export function RealWorldApplications({ onBack }: RealWorldApplicationsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="size-4 mr-2" />
          Back to Dashboard
        </Button>
        <div>
          <h1 className="text-4xl text-gray-900">Real-World AI Applications</h1>
          <p className="text-gray-600">How AI is transforming industries and daily life</p>
        </div>
      </div>

      <Tabs defaultValue="healthcare" className="mb-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="future">Future</TabsTrigger>
        </TabsList>

        <TabsContent value="healthcare">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-red-600">
                <Heart className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">AI in Healthcare</h2>
                <p className="text-gray-600">Revolutionizing diagnosis, treatment, and patient care</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="text-xl text-gray-900 mb-3">Transforming Medicine</h3>
                <p className="text-gray-700">
                  AI is revolutionizing healthcare by improving diagnostic accuracy, personalizing treatments, accelerating drug discovery, and making healthcare more accessible. From analyzing medical images to predicting disease outbreaks, AI is saving lives and improving outcomes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {healthcareApplications.map((app, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200">
                    <div className="flex items-center gap-2 mb-3">
                      <app.icon className="size-6 text-red-600" />
                      <h4 className="text-xl text-gray-900">{app.title}</h4>
                    </div>
                    <Badge className="mb-3 bg-red-600">{app.status}</Badge>
                    <p className="text-gray-700 mb-4">{app.description}</p>
                    
                    <div className="bg-white p-4 rounded-lg border border-red-200 mb-3">
                      <p className="text-sm text-gray-600 mb-2">How it works:</p>
                      <p className="text-gray-800">{app.mechanism}</p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-3">
                      <p className="text-sm text-gray-600 mb-2">Real example:</p>
                      <p className="text-gray-800">{app.example}</p>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="text-sm text-gray-600 mb-1">Impact:</p>
                      <p className="text-sm text-green-800">{app.impact}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
                <h3 className="text-xl text-gray-900 mb-4">Teaching Children About AI in Healthcare</h3>
                <div className="space-y-3">
                  {healthcareEducation.map((lesson, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-yellow-200">
                      <h4 className="text-gray-900 mb-2">{lesson.concept}</h4>
                      <p className="text-sm text-gray-700 mb-2">{lesson.explanation}</p>
                      <p className="text-xs text-gray-600 italic">Kid-friendly example: {lesson.example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-600">
                <GraduationCap className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">AI in Education</h2>
                <p className="text-gray-600">Personalizing learning and expanding access to education</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-3">The Future of Learning</h3>
                <p className="text-gray-700">
                  AI is transforming education by providing personalized learning experiences, automating administrative tasks, and making quality education accessible to more people worldwide. It's not replacing teachers but empowering them with better tools.
                </p>
              </div>

              {educationApplications.map((app, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${app.iconBg}`}>
                        <app.icon className="size-6 text-white" />
                      </div>
                      <h3 className="text-xl text-gray-900">{app.title}</h3>
                    </div>
                    <Badge className={app.badgeColor}>{app.adoption}</Badge>
                  </div>

                  <p className="text-gray-700 mb-4">{app.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <p className="text-sm text-gray-600 mb-2">Benefits:</p>
                      <ul className="space-y-1">
                        {app.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <p className="text-sm text-gray-600 mb-2">Challenges:</p>
                      <ul className="space-y-1">
                        {app.challenges.map((challenge, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-red-600">!</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-sm text-gray-600 mb-2">Example application:</p>
                    <p className="text-gray-800">{app.example}</p>
                  </div>
                </Card>
              ))}

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                <h3 className="text-xl text-gray-900 mb-4">Responsible AI Use in Education</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {educationBestPractices.map((practice, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="text-gray-900 mb-2 flex items-center gap-2">
                        <practice.icon className="size-5 text-green-600" />
                        {practice.title}
                      </h4>
                      <p className="text-sm text-gray-700">{practice.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="entertainment">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-600">
                <Tv className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">AI in Entertainment</h2>
                <p className="text-gray-600">Creating, recommending, and personalizing content</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                <h3 className="text-xl text-gray-900 mb-3">Entertainment Revolution</h3>
                <p className="text-gray-700">
                  AI is reshaping how we create, discover, and consume entertainment. From generating music and art to personalizing recommendations, AI is both a creative tool and a curator of content.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {entertainmentCategories.map((category, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                    <div className="text-4xl mb-3">{category.emoji}</div>
                    <h4 className="text-xl text-gray-900 mb-2">{category.title}</h4>
                    <p className="text-gray-700 mb-4">{category.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Examples:</p>
                      {category.examples.map((example, i) => (
                        <div key={i} className="bg-white p-2 rounded text-sm text-gray-800 border border-purple-200">
                          {example}
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
                <h3 className="text-xl text-gray-900 mb-4">Content Recommendation Systems</h3>
                <p className="text-gray-700 mb-4">
                  Ever wonder how Netflix knows what you might like? AI analyzes your viewing patterns, ratings, and behavior to predict content you'll enjoy.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h4 className="text-gray-900 mb-3">How It Works:</h4>
                    <ol className="space-y-2">
                      {recommendationSteps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-600 flex-shrink-0">{i + 1}.</span>
                          <span className="text-sm text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h4 className="text-gray-900 mb-3">Parent Considerations:</h4>
                    <ul className="space-y-2">
                      {recommendationConcerns.map((concern, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-600">⚠️</span>
                          <span className="text-sm text-gray-700">{concern}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="text-xl text-gray-900 mb-4">AI-Generated Content: Opportunities & Concerns</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h4 className="text-green-900 mb-3 flex items-center gap-2">
                      <Sparkles className="size-5" />
                      Opportunities
                    </h4>
                    <ul className="space-y-2">
                      {aiContentOpportunities.map((opp, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-green-600">+</span>
                          {opp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="text-red-900 mb-3 flex items-center gap-2">
                      <AlertTriangle className="size-5" />
                      Concerns
                    </h4>
                    <ul className="space-y-2">
                      {aiContentConcerns.map((concern, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-red-600">-</span>
                          {concern}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="business">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-600">
                <Briefcase className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">AI in Business</h2>
                <p className="text-gray-600">Transforming operations, decisions, and customer experiences</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h3 className="text-xl text-gray-900 mb-3">Business Transformation</h3>
                <p className="text-gray-700">
                  AI is reshaping how businesses operate, compete, and serve customers. From automating routine tasks to predicting market trends, AI is becoming essential for business success.
                </p>
              </div>

              {businessApplications.map((app, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${app.iconBg}`}>
                      <app.icon className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900">{app.area}</h3>
                      <Badge className={app.impactColor}>{app.impact}</Badge>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{app.description}</p>

                  <div className="bg-white p-4 rounded-lg border border-green-200 mb-4">
                    <p className="text-sm text-gray-600 mb-2">Use cases:</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {app.useCases.map((useCase, i) => (
                        <div key={i} className="text-sm text-gray-700 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <p className="text-sm text-gray-600 mb-1">Business value:</p>
                      <p className="text-sm text-gray-800">{app.value}</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                      <p className="text-sm text-gray-600 mb-1">Future outlook:</p>
                      <p className="text-sm text-gray-800">{app.future}</p>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-4">Career Implications for Today's Children</h3>
                <p className="text-gray-700 mb-4">
                  As AI transforms business, the job market is evolving. Today's children will work in an AI-augmented world:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {careerImplications.map((implication, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-blue-200">
                      <h4 className="text-gray-900 mb-2">{implication.aspect}</h4>
                      <p className="text-sm text-gray-700 mb-2">{implication.change}</p>
                      <p className="text-xs text-gray-600 italic">Preparation: {implication.preparation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="future">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-indigo-600">
                <TrendingUp className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">The Future of AI</h2>
                <p className="text-gray-600">Emerging trends and preparing for what's next</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200">
                <h3 className="text-xl text-gray-900 mb-3">What's Coming Next</h3>
                <p className="text-gray-700">
                  AI is evolving rapidly. Understanding emerging trends helps us prepare children for a future where AI is even more integrated into daily life. The key is fostering adaptability, critical thinking, and ethical awareness.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {futureTrends.map((trend, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <trend.icon className="size-6 text-indigo-600" />
                        <h4 className="text-xl text-gray-900">{trend.title}</h4>
                      </div>
                      <Badge className={trend.timeframeColor}>{trend.timeframe}</Badge>
                    </div>
                    <p className="text-gray-700 mb-4">{trend.description}</p>
                    <div className="bg-white p-4 rounded-lg border border-indigo-200 mb-3">
                      <p className="text-sm text-gray-600 mb-2">Potential impact:</p>
                      <p className="text-sm text-gray-800">{trend.impact}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <p className="text-sm text-gray-600 mb-1">Preparing children:</p>
                      <p className="text-sm text-gray-800">{trend.preparation}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                <h3 className="text-xl text-gray-900 mb-4">Essential Skills for an AI Future</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-900 mb-3">Technical Skills:</h4>
                    <ul className="space-y-2">
                      {technicalSkills.map((skill, i) => (
                        <li key={i} className="bg-white p-3 rounded-lg border border-purple-200">
                          <strong className="text-gray-900">{skill.skill}:</strong>
                          <p className="text-sm text-gray-700 mt-1">{skill.why}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-3">Human Skills:</h4>
                    <ul className="space-y-2">
                      {humanSkills.map((skill, i) => (
                        <li key={i} className="bg-white p-3 rounded-lg border border-purple-200">
                          <strong className="text-gray-900">{skill.skill}:</strong>
                          <p className="text-sm text-gray-700 mt-1">{skill.why}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                <h3 className="text-xl text-gray-900 mb-4">Preparing Your Child for an AI World</h3>
                <div className="space-y-3">
                  {preparationStrategies.map((strategy, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg border border-green-200">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-1">{strategy.strategy}</h4>
                        <p className="text-sm text-gray-700 mb-2">{strategy.description}</p>
                        <p className="text-xs text-gray-600 italic">Action: {strategy.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
                <h3 className="text-xl text-gray-900 mb-3">Final Thoughts</h3>
                <p className="text-gray-700 mb-4">
                  The future with AI is both exciting and uncertain. The best preparation is fostering curiosity, adaptability, and ethical thinking. Teach children to see AI as a tool—powerful but requiring human wisdom to use responsibly.
                </p>
                <p className="text-gray-700">
                  Remember: The goal isn't to predict exactly what will happen, but to develop the mindset and skills to thrive in whatever future emerges.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

const healthcareApplications = [
  {
    icon: Heart,
    title: 'Medical Imaging Analysis',
    status: 'Widely Used',
    description: 'AI analyzes X-rays, MRIs, CT scans, and other medical images to detect diseases, often with accuracy matching or exceeding human radiologists.',
    mechanism: 'Deep learning models trained on millions of medical images learn to identify patterns indicating diseases like cancer, fractures, or abnormalities.',
    example: 'AI detects early-stage breast cancer in mammograms, lung nodules in chest X-rays, and diabetic retinopathy in eye scans.',
    impact: 'Earlier detection, faster diagnosis, reduced workload for radiologists, and improved patient outcomes.'
  },
  {
    icon: Brain,
    title: 'Drug Discovery & Development',
    status: 'Emerging',
    description: 'AI accelerates the discovery of new medications by predicting how different molecules will interact with disease targets.',
    mechanism: 'Machine learning analyzes vast databases of molecular structures, biological data, and clinical trials to identify promising drug candidates.',
    example: 'AI helped identify potential COVID-19 treatments in record time and is being used to develop personalized cancer therapies.',
    impact: 'Faster drug development (years instead of decades), lower costs, and more personalized treatments.'
  },
  {
    icon: Heart,
    title: 'Predictive Healthcare',
    status: 'Growing',
    description: 'AI predicts health risks and disease progression by analyzing patient data, enabling preventive interventions.',
    mechanism: 'Algorithms analyze electronic health records, genetic data, lifestyle factors, and more to identify high-risk patients.',
    example: 'AI predicts which patients are likely to develop diabetes, heart disease, or hospital readmissions, enabling early intervention.',
    impact: 'Prevention instead of treatment, reduced healthcare costs, and better long-term health outcomes.'
  },
  {
    icon: Smartphone,
    title: 'Virtual Health Assistants',
    status: 'Available',
    description: 'AI-powered chatbots and assistants provide medical information, triage symptoms, and support patient care.',
    mechanism: 'Natural language processing enables AI to understand symptoms, ask relevant questions, and provide guidance.',
    example: 'AI assistants help patients manage chronic conditions, schedule appointments, and answer health questions 24/7.',
    impact: 'Improved access to healthcare, especially in underserved areas, and reduced burden on healthcare systems.'
  }
];

const healthcareEducation = [
  {
    concept: 'AI as Medical Helper',
    explanation: 'AI helps doctors see things in X-rays that are hard to spot, like a magnifying glass that never gets tired.',
    example: 'When you get an X-ray, AI might help the doctor find small problems early, so they\'re easier to fix.'
  },
  {
    concept: 'Not Replacing Doctors',
    explanation: 'AI is a tool that doctors use, not a replacement. Doctors still make the final decisions and provide care.',
    example: 'AI is like a calculator for math—helpful, but you still need a teacher to explain things.'
  },
  {
    concept: 'Privacy in Healthcare',
    explanation: 'Medical information is very private and protected by special laws to keep it safe.',
    example: 'When AI helps with medical stuff, your information is kept extra safe and secret.'
  }
];

const educationApplications = [
  {
    icon: GraduationCap,
    title: 'Personalized Learning',
    adoption: 'Growing Fast',
    badgeColor: 'bg-green-600',
    iconBg: 'bg-blue-600',
    description: 'AI adapts educational content to each student\'s pace, learning style, and knowledge gaps.',
    benefits: [
      'Students learn at their own pace',
      'Immediate feedback and adjustment',
      'Identifies knowledge gaps early',
      'Increased engagement and retention'
    ],
    challenges: [
      'Requires significant data collection',
      'Risk of over-reliance on technology',
      'May not suit all learning styles',
      'Teacher training needed'
    ],
    example: 'Khan Academy uses AI to recommend practice problems based on student performance, ensuring mastery before moving forward.'
  },
  {
    icon: Smartphone,
    title: 'Intelligent Tutoring Systems',
    adoption: 'Established',
    badgeColor: 'bg-blue-600',
    iconBg: 'bg-green-600',
    description: 'AI tutors provide one-on-one support, answering questions and guiding students through problems.',
    benefits: [
      'Available 24/7',
      'Infinite patience',
      'Explains concepts multiple ways',
      'Affordable compared to human tutors'
    ],
    challenges: [
      'Cannot replicate human connection',
      'May provide incorrect information',
      'Limited emotional intelligence',
      'Requires internet access'
    ],
    example: 'Duolingo uses AI to personalize language learning, adapting difficulty and providing targeted practice.'
  },
  {
    icon: Brain,
    title: 'Assessment & Grading',
    adoption: 'Common',
    badgeColor: 'bg-yellow-600',
    iconBg: 'bg-purple-600',
    description: 'AI automates grading and provides detailed feedback on assignments, freeing teachers for more meaningful interactions.',
    benefits: [
      'Faster feedback for students',
      'Consistent grading criteria',
      'Frees teacher time',
      'Identifies learning patterns'
    ],
    challenges: [
      'Cannot evaluate creativity well',
      'May miss context or nuance',
      'Potential for gaming the system',
      'Teacher oversight still needed'
    ],
    example: 'AI grades multiple-choice and short-answer tests, and even provides feedback on essays using natural language processing.'
  },
  {
    icon: Briefcase,
    title: 'Administrative Automation',
    adoption: 'Widespread',
    badgeColor: 'bg-green-600',
    iconBg: 'bg-orange-600',
    description: 'AI handles scheduling, enrollment, resource allocation, and other administrative tasks.',
    benefits: [
      'Reduces administrative burden',
      'Optimizes resource allocation',
      'Improves operational efficiency',
      'Better data-driven decisions'
    ],
    challenges: [
      'Initial setup complexity',
      'Data security concerns',
      'May lack human judgment',
      'Resistance to change'
    ],
    example: 'AI schedules classes to avoid conflicts, predicts enrollment needs, and optimizes campus resources.'
  }
];

const educationBestPractices = [
  {
    icon: Shield,
    title: 'Teach Verification',
    description: 'Always verify AI-generated information with reliable sources. AI can be wrong, especially for homework.'
  },
  {
    icon: Brain,
    title: 'Emphasize Understanding',
    description: 'Use AI to enhance understanding, not replace thinking. The goal is learning, not just getting answers.'
  },
  {
    icon: Users,
    title: 'Balance Technology',
    description: 'Combine AI tools with traditional learning methods and human interaction.'
  },
  {
    icon: Eye,
    title: 'Monitor Usage',
    description: 'Supervise AI tool use to ensure appropriate, educational interactions.'
  }
];

const entertainmentCategories = [
  {
    emoji: '🎵',
    title: 'Music',
    description: 'AI generates music, recommends songs, and enhances audio production.',
    examples: [
      'Spotify personalized playlists',
      'AI-composed background music',
      'Voice synthesis for songs',
      'Audio mastering tools'
    ]
  },
  {
    emoji: '🎨',
    title: 'Visual Arts',
    description: 'AI creates images, edits photos, and generates art from text prompts.',
    examples: [
      'DALL-E, Midjourney image generation',
      'Photo enhancement tools',
      'Style transfer applications',
      'AI-assisted design software'
    ]
  },
  {
    emoji: '🎬',
    title: 'Film & Video',
    description: 'AI enhances production, creates special effects, and recommends content.',
    examples: [
      'Netflix recommendations',
      'AI-powered video editing',
      'Deepfake technology',
      'Automated subtitling'
    ]
  },
  {
    emoji: '🎮',
    title: 'Gaming',
    description: 'AI creates intelligent NPCs, generates content, and personalizes experiences.',
    examples: [
      'Adaptive difficulty systems',
      'Procedurally generated worlds',
      'Intelligent game opponents',
      'Player behavior analysis'
    ]
  },
  {
    emoji: '📚',
    title: 'Writing',
    description: 'AI assists with writing, generates stories, and provides editing suggestions.',
    examples: [
      'Writing assistants like Grammarly',
      'AI story generators',
      'Automated journalism',
      'Content summarization'
    ]
  },
  {
    emoji: '🎭',
    title: 'Interactive',
    description: 'AI powers interactive experiences like chatbots and virtual characters.',
    examples: [
      'Character AI conversations',
      'Interactive storytelling',
      'Virtual influencers',
      'AI companions'
    ]
  }
];

const recommendationSteps = [
  'Tracks what you watch, how long, and when you stop',
  'Analyzes ratings, searches, and repeat viewing',
  'Compares your patterns to millions of other users',
  'Identifies content liked by people with similar tastes',
  'Predicts probability you\'ll enjoy specific content',
  'Continuously refines based on your reactions'
];

const recommendationConcerns = [
  'Creates "filter bubbles" limiting exposure to diverse content',
  'Can recommend age-inappropriate content',
  'Optimizes for engagement, not necessarily benefit',
  'May encourage binge-watching behaviors',
  'Collects detailed viewing data'
];

const aiContentOpportunities = [
  'Democratizes creative tools for everyone',
  'Enables rapid prototyping and experimentation',
  'Assists artists with tedious tasks',
  'Makes content creation more accessible',
  'Generates personalized content',
  'Accelerates creative workflows'
];

const aiContentConcerns = [
  'Copyright and ownership questions',
  'Potential to replace human creators',
  'Quality and authenticity issues',
  'Spread of misinformation',
  'Loss of human creative jobs',
  'Homogenization of content'
];

const businessApplications = [
  {
    icon: Briefcase,
    area: 'Operations & Automation',
    impact: 'Transformative',
    impactColor: 'bg-red-600',
    iconBg: 'bg-blue-600',
    description: 'AI automates repetitive tasks, optimizes processes, and improves operational efficiency.',
    useCases: [
      'Supply chain optimization',
      'Inventory management',
      'Process automation',
      'Quality control',
      'Resource allocation',
      'Predictive maintenance'
    ],
    value: 'Reduced costs, faster processes, fewer errors, better resource utilization',
    future: 'Increasingly autonomous operations with AI handling complex decision-making'
  },
  {
    icon: Users,
    area: 'Customer Experience',
    impact: 'High',
    impactColor: 'bg-orange-600',
    iconBg: 'bg-green-600',
    description: 'AI personalizes customer interactions, provides support, and enhances satisfaction.',
    useCases: [
      'Chatbots and virtual assistants',
      'Personalized recommendations',
      'Sentiment analysis',
      'Customer service automation',
      'Predictive customer support',
      'Dynamic pricing'
    ],
    value: '24/7 support, personalized experiences, faster issue resolution, customer insights',
    future: 'Hyper-personalized experiences with AI predicting needs before customers ask'
  },
  {
    icon: TrendingUp,
    area: 'Analytics & Insights',
    impact: 'High',
    impactColor: 'bg-green-600',
    iconBg: 'bg-purple-600',
    description: 'AI analyzes data to uncover patterns, predict trends, and inform strategy.',
    useCases: [
      'Market analysis',
      'Sales forecasting',
      'Risk assessment',
      'Customer segmentation',
      'Competitive intelligence',
      'Trend prediction'
    ],
    value: 'Data-driven decisions, competitive advantage, risk reduction, market insights',
    future: 'Real-time predictive analytics guiding all business decisions'
  }
];

const careerImplications = [
  {
    aspect: 'Job Displacement',
    change: 'Routine and repetitive jobs will be automated',
    preparation: 'Focus on creative, interpersonal, and complex problem-solving skills'
  },
  {
    aspect: 'New Job Creation',
    change: 'New roles will emerge in AI development, ethics, and management',
    preparation: 'Encourage STEM education alongside humanities and arts'
  },
  {
    aspect: 'Augmentation',
    change: 'Many jobs will involve working alongside AI tools',
    preparation: 'Teach adaptability and willingness to learn new technologies'
  },
  {
    aspect: 'Skill Requirements',
    change: 'Technical literacy will be as important as reading and writing',
    preparation: 'Start early with age-appropriate technology education'
  },
  {
    aspect: 'Soft Skills',
    change: 'Human skills like creativity and empathy become more valuable',
    preparation: 'Emphasize emotional intelligence, collaboration, and communication'
  },
  {
    aspect: 'Lifelong Learning',
    change: 'Careers will require continuous learning and adaptation',
    preparation: 'Foster love of learning and comfort with change'
  }
];

const futureTrends = [
  {
    icon: Brain,
    title: 'Advanced General AI',
    timeframe: '10-20 years',
    timeframeColor: 'bg-yellow-600',
    description: 'AI systems that can perform any intellectual task a human can, with broader reasoning capabilities.',
    impact: 'Potential to revolutionize all aspects of work, creativity, and problem-solving—or pose existential risks if not developed carefully.',
    preparation: 'Teach ethical thinking, adaptability, and uniquely human skills like empathy and creativity.'
  },
  {
    icon: Home,
    title: 'Ubiquitous AI Assistants',
    timeframe: '2-5 years',
    timeframeColor: 'bg-green-600',
    description: 'AI integrated into every device and environment, anticipating needs and seamlessly assisting.',
    impact: 'Extreme convenience but concerns about privacy, dependency, and loss of basic skills.',
    preparation: 'Establish healthy relationship with technology early; balance convenience with competence.'
  },
  {
    icon: Car,
    title: 'Autonomous Systems',
    timeframe: '5-10 years',
    timeframeColor: 'bg-blue-600',
    description: 'Self-driving vehicles, delivery robots, and other autonomous systems becoming commonplace.',
    impact: 'Transformed transportation, logistics, and urban planning; job displacement in driving sectors.',
    preparation: 'Discuss how technology changes society; emphasize adaptable career skills.'
  },
  {
    icon: Heart,
    title: 'Personalized Everything',
    timeframe: '2-5 years',
    timeframeColor: 'bg-green-600',
    description: 'AI creating hyper-personalized experiences in education, healthcare, entertainment, and commerce.',
    impact: 'Improved outcomes but risks of manipulation, filter bubbles, and privacy erosion.',
    preparation: 'Develop critical thinking to recognize and resist manipulation; value privacy.'
  }
];

const technicalSkills = [
  {
    skill: 'Basic Coding',
    why: 'Understanding how technology works provides control and career opportunities'
  },
  {
    skill: 'Data Literacy',
    why: 'Ability to interpret data and statistics is crucial for informed decisions'
  },
  {
    skill: 'Digital Citizenship',
    why: 'Safe, ethical, and effective participation in digital world'
  },
  {
    skill: 'AI Literacy',
    why: 'Understanding AI capabilities and limitations for effective use'
  }
];

const humanSkills = [
  {
    skill: 'Critical Thinking',
    why: 'Evaluating information and making reasoned judgments AI cannot replicate'
  },
  {
    skill: 'Creativity',
    why: 'Original thinking and innovation remain uniquely human strengths'
  },
  {
    skill: 'Emotional Intelligence',
    why: 'Understanding and managing emotions is essential for relationships and leadership'
  },
  {
    skill: 'Adaptability',
    why: 'Thriving amid change and learning new skills throughout life'
  },
  {
    skill: 'Ethics & Values',
    why: 'Making moral judgments about technology use and societal impact'
  },
  {
    skill: 'Collaboration',
    why: 'Working effectively with diverse humans and AI systems'
  }
];

const preparationStrategies = [
  {
    strategy: 'Foster Curiosity',
    description: 'Encourage questions, exploration, and learning for its own sake, not just outcomes.',
    action: 'Provide diverse experiences and support varied interests without pressure.'
  },
  {
    strategy: 'Teach Critical Thinking',
    description: 'Help children evaluate information, question assumptions, and think independently.',
    action: 'Ask open-ended questions; discuss current events; play strategy games.'
  },
  {
    strategy: 'Balance Screen Time',
    description: 'Ensure technology enhances rather than replaces physical, social, and creative activities.',
    action: 'Set clear boundaries; model healthy tech use; prioritize outdoor play.'
  },
  {
    strategy: 'Discuss Ethics',
    description: 'Have age-appropriate conversations about right and wrong in technology use.',
    action: 'Use real scenarios to explore ethical dilemmas; develop family values around tech.'
  },
  {
    strategy: 'Emphasize Human Skills',
    description: 'Develop creativity, empathy, collaboration—skills that remain distinctly human.',
    action: 'Encourage arts, team sports, volunteering, and face-to-face relationships.'
  },
  {
    strategy: 'Model Adaptability',
    description: 'Show children that change is normal and learning continues throughout life.',
    action: 'Share your own learning experiences; try new things together; embrace mistakes.'
  }
];

import { AlertTriangle } from 'lucide-react';
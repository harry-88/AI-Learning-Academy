import { motion } from 'motion/react';
import { ArrowLeft, Users, MessageCircle, Shield, Eye, Clock, BookOpen, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

interface ParentalGuideProps {
  onBack: () => void;
}

export function ParentalGuide({ onBack }: ParentalGuideProps) {
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
          <h1 className="text-4xl text-gray-900">Parental Guidance for AI</h1>
          <p className="text-gray-600">Tools and strategies for guiding children safely</p>
        </div>
      </div>

      <Tabs defaultValue="age" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="age">By Age</TabsTrigger>
          <TabsTrigger value="conversation">Conversations</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          <TabsTrigger value="boundaries">Setting Boundaries</TabsTrigger>
        </TabsList>

        <TabsContent value="age">
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
              <h2 className="text-3xl text-gray-900 mb-4">Age-Appropriate AI Introduction</h2>
              <p className="text-gray-700 mb-6">
                Different ages require different approaches to introducing AI concepts. Here's a comprehensive guide for each developmental stage.
              </p>
            </Card>

            {ageGroups.map((group, index) => (
              <motion.div
                key={group.age}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-8 ${group.bgColor} border-2 ${group.borderColor}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl text-gray-900">{group.age}</h3>
                    <Badge className={group.badgeColor}>{group.stage}</Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
                        <BookOpen className="size-5 text-blue-600" />
                        What to Teach
                      </h4>
                      <ul className="space-y-2">
                        {group.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="size-4 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
                        <MessageCircle className="size-5 text-green-600" />
                        How to Explain
                      </h4>
                      <div className="space-y-3">
                        {group.explanations.map((exp, i) => (
                          <div key={i} className="bg-white p-3 rounded-lg border border-gray-200">
                            <p className="text-sm text-gray-700"><strong>{exp.concept}:</strong> {exp.explanation}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-white p-4 rounded-lg border-2 border-blue-200">
                    <h4 className="text-gray-900 mb-2 flex items-center gap-2">
                      <Shield className="size-5 text-green-600" />
                      Safety Focus for This Age
                    </h4>
                    <p className="text-gray-700">{group.safetyFocus}</p>
                  </div>

                  <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="text-gray-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="size-5 text-yellow-600" />
                      Red Flags to Watch For
                    </h4>
                    <ul className="space-y-1">
                      {group.redFlags.map((flag, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                          <span className="text-yellow-600">⚠️</span>
                          {flag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="conversation">
          <Card className="p-8 bg-white">
            <h2 className="text-3xl text-gray-900 mb-6">Having Meaningful Conversations About AI</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-3">The Importance of Open Dialogue</h3>
                <p className="text-gray-700">
                  Regular, open conversations about AI help children develop critical thinking skills and feel comfortable coming to you with questions or concerns. Make these discussions natural, non-judgmental, and age-appropriate.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {conversationTopics.map((topic, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <topic.icon className="size-6 text-green-600" />
                      <h4 className="text-xl text-gray-900">{topic.title}</h4>
                    </div>
                    <div className="space-y-3">
                      {topic.questions.map((q, i) => (
                        <div key={i} className="bg-white p-3 rounded-lg border border-green-200">
                          <p className="text-sm text-gray-900 mb-1"><strong>Ask:</strong> "{q.question}"</p>
                          <p className="text-xs text-gray-600">{q.purpose}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                <h3 className="text-xl text-gray-900 mb-4">Conversation Starters for Different Situations</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {conversationStarters.map((starter, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-purple-200">
                      <p className="text-sm text-gray-600 mb-2">{starter.situation}</p>
                      <p className="text-gray-900">"{starter.opener}"</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
                <h3 className="text-xl text-gray-900 mb-3">What NOT to Do</h3>
                <div className="space-y-2">
                  {conversationDonts.map((dont, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-yellow-200">
                      <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-900">{dont.action}</p>
                        <p className="text-sm text-gray-600">Why: {dont.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring">
          <Card className="p-8 bg-white">
            <h2 className="text-3xl text-gray-900 mb-6">Monitoring AI Usage Effectively</h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-3">Balancing Trust and Safety</h3>
                <p className="text-gray-700">
                  Monitoring isn't about spying—it's about ensuring safety while respecting privacy and building trust. The goal is to gradually increase independence as children demonstrate responsible AI use.
                </p>
              </div>

              {monitoringStrategies.map((strategy, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${strategy.iconBg}`}>
                      <strategy.icon className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900">{strategy.title}</h3>
                      <Badge className={strategy.levelColor}>{strategy.level}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{strategy.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-gray-900 mb-2">Implementation:</h4>
                      <ul className="space-y-1">
                        {strategy.methods.map((method, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="size-4 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-700">{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg border border-purple-200">
                      <p className="text-sm text-gray-600 mb-1">Best for:</p>
                      <p className="text-gray-900">{strategy.bestFor}</p>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                  <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="size-6 text-green-600" />
                    Signs of Healthy AI Use
                  </h3>
                  <ul className="space-y-2">
                    {healthySigns.map((sign, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span className="text-gray-700">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                  <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="size-6 text-red-600" />
                    Warning Signs
                  </h3>
                  <ul className="space-y-2">
                    {warningSigns.map((sign, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600">⚠️</span>
                        <span className="text-gray-700">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="boundaries">
          <Card className="p-8 bg-white">
            <h2 className="text-3xl text-gray-900 mb-6">Setting Healthy Boundaries</h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-3">Why Boundaries Matter</h3>
                <p className="text-gray-700">
                  Clear, consistent boundaries help children develop healthy relationships with technology while maintaining balance in other areas of life. Boundaries should be age-appropriate, reasonable, and explained rather than imposed.
                </p>
              </div>

              {boundaryCategories.map((category, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${category.iconBg}`}>
                      <category.icon className="size-6 text-white" />
                    </div>
                    <h3 className="text-2xl text-gray-900">{category.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-gray-900 mb-3">Rules to Consider:</h4>
                      <ul className="space-y-2">
                        {category.rules.map((rule, i) => (
                          <li key={i} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-indigo-200">
                            <CheckCircle className="size-4 text-indigo-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-gray-900 mb-3">Why It Works:</h4>
                      <p className="text-gray-700 bg-white p-4 rounded-lg border border-indigo-200 mb-3">
                        {category.rationale}
                      </p>
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <p className="text-sm text-gray-600 mb-1">Pro Tip:</p>
                        <p className="text-gray-900">{category.tip}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                <h3 className="text-xl text-gray-900 mb-4">Sample Family AI Agreement</h3>
                <p className="text-gray-700 mb-4">
                  Create a written agreement that both parents and children sign. This promotes buy-in and accountability:
                </p>
                <div className="bg-white p-6 rounded-lg border-2 border-green-200">
                  <h4 className="text-lg text-gray-900 mb-3">Our Family's AI Guidelines</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>✓ We will always ask permission before using new AI tools</p>
                    <p>✓ We will never share personal information with AI</p>
                    <p>✓ We will take breaks every 30-45 minutes</p>
                    <p>✓ We will use AI in common areas when possible</p>
                    <p>✓ We will talk about anything that makes us uncomfortable</p>
                    <p>✓ Screen time ends at [TIME] on school nights</p>
                    <p>✓ We will verify important information from other sources</p>
                    <p>✓ We will be kind and respectful when using AI</p>
                  </div>
                  <div className="mt-4 pt-4 border-t-2 border-green-200">
                    <p className="text-sm text-gray-600">Signed: _________________ Date: _________</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
                <h3 className="text-xl text-gray-900 mb-3">Adjusting Boundaries as Children Grow</h3>
                <p className="text-gray-700 mb-4">
                  Boundaries should evolve with maturity and demonstrated responsibility:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {boundaryProgression.map((stage, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-purple-200">
                      <h4 className="text-gray-900 mb-2">{stage.stage}</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {stage.freedoms.map((freedom, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                            {freedom}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

const ageGroups = [
  {
    age: 'Ages 7-9',
    stage: 'Early Elementary',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    borderColor: 'border-blue-300',
    badgeColor: 'bg-blue-600',
    topics: [
      'AI is like a smart helper that learns from examples',
      'Some toys and apps use AI to work',
      'Never share name, address, or school with AI',
      'Always ask a grown-up before using new apps',
      'AI can make mistakes, just like people'
    ],
    explanations: [
      { concept: 'What is AI', explanation: 'Use analogies like "AI is like teaching a robot friend by showing it lots of examples"' },
      { concept: 'Privacy', explanation: 'Compare to "stranger danger" - "Just like you don\'t tell strangers your address, don\'t tell AI either"' },
      { concept: 'Limitations', explanation: 'Explain that AI is very smart at some things but can\'t replace parents, teachers, or real friends' }
    ],
    safetyFocus: 'Supervision should be constant. Use only age-appropriate AI tools designed for children. Focus on privacy basics and always-ask-permission rules.',
    redFlags: [
      'Wanting to keep AI conversations secret',
      'Sharing personal details with voice assistants',
      'Believing everything AI says without question',
      'Preferring AI interaction over real play'
    ]
  },
  {
    age: 'Ages 10-12',
    stage: 'Late Elementary',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    borderColor: 'border-green-300',
    badgeColor: 'bg-green-600',
    topics: [
      'How AI learns from data and patterns',
      'Why AI recommendations might not always be good for you',
      'Understanding that AI doesn\'t truly "think" like humans',
      'Recognizing when AI might be biased or wrong',
      'Respecting others\' privacy in photos and posts'
    ],
    explanations: [
      { concept: 'How AI Works', explanation: 'Introduce machine learning basics: "AI learns by looking at thousands of examples, like learning to recognize cats by seeing many cat pictures"' },
      { concept: 'Bias', explanation: '"If AI only learns from one type of example, it might not work well for everyone"' },
      { concept: 'Critical Thinking', explanation: 'Teach questioning: "Just because AI suggests it doesn\'t mean it\'s right for you"' }
    ],
    safetyFocus: 'Transition to monitored independence. Discuss digital footprints and how data is used. Introduce the concept of AI bias and checking multiple sources.',
    redFlags: [
      'Excessive reliance on AI for homework',
      'Sharing friends\' information or photos',
      'Exposure to age-inappropriate content via AI',
      'Signs of online manipulation or grooming'
    ]
  },
  {
    age: 'Ages 13-15',
    stage: 'Early Teens',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    borderColor: 'border-purple-300',
    badgeColor: 'bg-purple-600',
    topics: [
      'Deeper understanding of AI algorithms and their purposes',
      'How companies use AI and your data for profit',
      'Ethical implications of AI (privacy, bias, job displacement)',
      'Critical evaluation of AI-generated content',
      'Responsible AI use for creative and educational purposes'
    ],
    explanations: [
      { concept: 'Business Models', explanation: '"Free AI services make money from your data and attention - you\'re not the customer, you\'re the product"' },
      { concept: 'Ethics', explanation: 'Discuss real scenarios: "Should AI make life-or-death decisions? Who\'s responsible when AI makes mistakes?"' },
      { concept: 'Future Impact', explanation: 'Connect to their interests: "How might AI change your dream career?"' }
    ],
    safetyFocus: 'Gradual independence with check-ins. Discuss more complex topics like AI addiction, misinformation, and online reputation. Prepare for encountering AI-generated fake content.',
    redFlags: [
      'Extreme screen time affecting sleep or grades',
      'Believing or sharing misinformation',
      'Using AI to cheat or plagiarize',
      'Signs of comparison anxiety from AI-filtered content',
      'Participating in harmful AI challenges or trends'
    ]
  }
];

const conversationTopics = [
  {
    icon: MessageCircle,
    title: 'Daily Check-ins',
    questions: [
      { question: 'What was interesting about your AI interactions today?', purpose: 'Opens dialogue without judgment' },
      { question: 'Did AI help you learn something new?', purpose: 'Focuses on positive use cases' },
      { question: 'Did anything confusing or weird happen?', purpose: 'Creates opportunity to discuss concerns' }
    ]
  },
  {
    icon: Shield,
    title: 'Safety Discussions',
    questions: [
      { question: 'What information do you think is safe to share with AI?', purpose: 'Assesses their understanding of privacy' },
      { question: 'How do you decide if AI information is trustworthy?', purpose: 'Evaluates critical thinking skills' },
      { question: 'Who would you tell if something made you uncomfortable?', purpose: 'Reinforces safety protocols' }
    ]
  },
  {
    icon: BookOpen,
    title: 'Learning Moments',
    questions: [
      { question: 'How is AI different from a regular computer program?', purpose: 'Checks technical understanding' },
      { question: 'Where have you noticed AI being used today?', purpose: 'Builds awareness of AI in daily life' },
      { question: 'If you could create an AI, what would it do?', purpose: 'Encourages creative and ethical thinking' }
    ]
  },
  {
    icon: Eye,
    title: 'Critical Thinking',
    questions: [
      { question: 'Do you think AI is always fair? Why or why not?', purpose: 'Introduces concept of bias' },
      { question: 'What can AI do better than humans? What can humans do better?', purpose: 'Develops balanced perspective' },
      { question: 'How do you feel after spending time with AI?', purpose: 'Builds emotional awareness' }
    ]
  }
];

const conversationStarters = [
  { situation: 'After they use a voice assistant:', opener: 'How do you think Alexa/Siri knew what you meant?' },
  { situation: 'When watching AI-related news:', opener: 'What do you think about that? Does it seem good or concerning?' },
  { situation: 'During homework time:', opener: 'Would it be helpful to use AI for this? What would be the right way to use it?' },
  { situation: 'Seeing AI-generated art:', opener: 'This was made by AI. How does that change how you feel about it?' },
  { situation: 'After an AI mistake:', opener: 'Why do you think the AI got that wrong? What does that teach us?' },
  { situation: 'When they seem over-reliant:', opener: 'What would you do if AI wasn\'t available? Let\'s practice that skill too.' }
];

const conversationDonts = [
  { action: 'Don\'t shame or punish honest questions', reason: 'This discourages future communication about concerns' },
  { action: 'Don\'t pretend to know everything about AI', reason: 'It\'s okay to learn together - honesty builds trust' },
  { action: 'Don\'t use scare tactics', reason: 'Fear-based teaching is less effective than understanding-based' },
  { action: 'Don\'t dismiss their concerns as trivial', reason: 'What seems small to you might feel significant to them' },
  { action: 'Don\'t have all AI talks be warnings', reason: 'Balance safety with excitement about positive possibilities' }
];

const monitoringStrategies = [
  {
    icon: Eye,
    title: 'Active Supervision',
    level: 'High Monitoring',
    levelColor: 'bg-red-600',
    iconBg: 'bg-red-600',
    description: 'Direct observation and participation in AI activities. Parent is present and engaged.',
    methods: [
      'Use AI tools together in the same room',
      'Review chat histories and interactions regularly',
      'Participate in AI learning activities',
      'Keep devices in common family areas',
      'Use parental control software'
    ],
    bestFor: 'Younger children (ages 7-10) or when introducing new AI tools'
  },
  {
    icon: Clock,
    title: 'Check-in Monitoring',
    level: 'Medium Monitoring',
    levelColor: 'bg-yellow-600',
    iconBg: 'bg-yellow-600',
    description: 'Regular scheduled reviews with increasing independence between check-ins.',
    methods: [
      'Daily or weekly conversations about AI use',
      'Periodic review of activity with child present',
      'Spot-checks at random intervals',
      'Review screen time reports together',
      'Discuss any red flags openly'
    ],
    bestFor: 'Pre-teens (ages 10-13) who have demonstrated responsible use'
  },
  {
    icon: MessageCircle,
    title: 'Trust & Communicate',
    level: 'Light Monitoring',
    levelColor: 'bg-green-600',
    iconBg: 'bg-green-600',
    description: 'Based on earned trust, with open communication channels and occasional verification.',
    methods: [
      'Maintain open dialogue about AI experiences',
      'Trust but verify important claims',
      'Make yourself available for questions',
      'Monitor for behavior or mood changes',
      'Periodic conversations about responsible use'
    ],
    bestFor: 'Teens (ages 14+) who have shown consistent responsibility and good judgment'
  }
];

const healthySigns = [
  'Voluntarily shares what they\'re doing with AI',
  'Uses AI as a tool, not a replacement for thinking',
  'Maintains balance with other activities',
  'Questions AI outputs and verifies information',
  'Respects privacy rules consistently',
  'Comes to you with questions or concerns',
  'Shows awareness of AI limitations',
  'Uses AI creatively and productively'
];

const warningSigns = [
  'Becomes secretive about AI use',
  'Excessive or compulsive use affecting daily life',
  'Declining academic performance',
  'Withdrawal from friends and family',
  'Mood changes when denied access',
  'Sharing or planning to share personal information',
  'Uncritical acceptance of all AI outputs',
  'Using AI to avoid real-world challenges',
  'Exposure to inappropriate content',
  'Signs of online relationships that concern you'
];

const boundaryCategories = [
  {
    icon: Clock,
    title: 'Time Boundaries',
    iconBg: 'bg-blue-600',
    rules: [
      'No screen time during meals',
      'AI use ends 1 hour before bedtime',
      'Set daily/weekly time limits',
      'Required breaks every 30-45 minutes',
      'Screen-free days or times'
    ],
    rationale: 'Time limits prevent addiction, ensure quality sleep, and maintain balance with other important activities like physical play, family time, and homework.',
    tip: 'Use timers or apps that enforce breaks. Make limits reasonable and be consistent with enforcement.'
  },
  {
    icon: Eye,
    title: 'Content Boundaries',
    iconBg: 'bg-green-600',
    rules: [
      'Only age-appropriate AI tools',
      'No AI use for certain topics without supervision',
      'Pre-approved list of allowed AI applications',
      'Reporting anything uncomfortable immediately',
      'No downloading AI apps without permission'
    ],
    rationale: 'Content boundaries protect children from inappropriate material, scams, and harmful interactions while allowing beneficial use.',
    tip: 'Research AI tools before approving them. Use curated platforms designed for children when possible.'
  },
  {
    icon: Shield,
    title: 'Privacy Boundaries',
    iconBg: 'bg-red-600',
    rules: [
      'Never share full name, address, or school',
      'No photos or videos of self or others without permission',
      'Don\'t share family or friend information',
      'Use anonymous usernames',
      'No sharing of passwords or account access'
    ],
    rationale: 'Privacy boundaries protect identity, location, and personal information from exploitation, tracking, and potential harm.',
    tip: 'Role-play scenarios where AI asks for information. Practice saying "I need to ask my parent first."'
  },
  {
    icon: Users,
    title: 'Social Boundaries',
    iconBg: 'bg-purple-600',
    rules: [
      'AI doesn\'t replace human relationships',
      'Regular in-person social activities required',
      'No forming relationships with people met through AI',
      'Be kind and respectful when using AI',
      'Don\'t use AI to harm, bully, or deceive others'
    ],
    rationale: 'Social boundaries ensure AI enhances rather than replaces human connection and prevents misuse that could harm others.',
    tip: 'Model healthy tech use yourself. Prioritize family activities that don\'t involve screens.'
  }
];

const boundaryProgression = [
  {
    stage: 'Early Stage',
    freedoms: [
      'Use with parent present',
      'Pre-approved tools only',
      'Shared device in common area',
      'No independent decisions'
    ]
  },
  {
    stage: 'Middle Stage',
    freedoms: [
      'Some independent use',
      'Can request new tools',
      'Regular check-ins',
      'Increasing privacy'
    ]
  },
  {
    stage: 'Advanced Stage',
    freedoms: [
      'Trusted with more freedom',
      'Demonstrates good judgment',
      'Open communication',
      'Minimal direct monitoring'
    ]
  }
];

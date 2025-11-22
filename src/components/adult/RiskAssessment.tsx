import { motion } from 'motion/react';
import { ArrowLeft, Shield, Lock, AlertTriangle, Eye, Brain, Users, TrendingDown, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

interface RiskAssessmentProps {
  onBack: () => void;
}

export function RiskAssessment({ onBack }: RiskAssessmentProps) {
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
          <h1 className="text-4xl text-gray-900">AI Risk Assessment</h1>
          <p className="text-gray-600">Understanding and mitigating AI-related risks</p>
        </div>
      </div>

      <Tabs defaultValue="privacy" className="mb-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="privacy">Privacy & Data</TabsTrigger>
          <TabsTrigger value="misinformation">Misinformation</TabsTrigger>
          <TabsTrigger value="addiction">Addiction</TabsTrigger>
          <TabsTrigger value="manipulation">Manipulation</TabsTrigger>
          <TabsTrigger value="ethics">Ethics</TabsTrigger>
        </TabsList>

        <TabsContent value="privacy">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-600">
                <Lock className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">Privacy & Data Security</h2>
                <p className="text-gray-600">How AI collects, uses, and potentially misuses personal data</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="text-xl text-gray-900 mb-3">The Privacy Challenge</h3>
                <p className="text-gray-700">
                  AI systems require vast amounts of data to function effectively. Every interaction with AI—from voice commands to chat messages—is typically recorded, analyzed, and used to improve the system. This creates significant privacy concerns, especially for children who may not understand the long-term implications of data sharing.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {privacyRisks.map((risk, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
                    <div className="flex items-center gap-2 mb-3">
                      <risk.icon className="size-6 text-red-600" />
                      <h4 className="text-xl text-gray-900">{risk.title}</h4>
                    </div>
                    <Badge className="mb-3 bg-red-600">{risk.severity}</Badge>
                    <p className="text-gray-700 mb-4">{risk.description}</p>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <p className="text-sm text-gray-600 mb-2">Real Example:</p>
                      <p className="text-gray-800">{risk.example}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-4">Data Collection Methods</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {dataCollectionMethods.map((method, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-blue-200">
                      <h4 className="text-gray-900 mb-2">{method.type}</h4>
                      <p className="text-sm text-gray-700 mb-2">{method.description}</p>
                      <p className="text-xs text-gray-600 italic">{method.dataCollected}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                <h3 className="text-xl text-gray-900 mb-4">Protection Strategies</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {privacyProtections.map((protection, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-green-200">
                      <Shield className="size-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-gray-900 mb-1">{protection.strategy}</h4>
                        <p className="text-sm text-gray-700">{protection.implementation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
                <h3 className="text-xl text-gray-900 mb-3">Teaching Children About Privacy</h3>
                <ul className="space-y-2">
                  {privacyLessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-yellow-600">•</span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="misinformation">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-600">
                <AlertTriangle className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">Misinformation & Bias</h2>
                <p className="text-gray-600">How AI can spread false information and perpetuate biases</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
                <h3 className="text-xl text-gray-900 mb-3">The Misinformation Problem</h3>
                <p className="text-gray-700 mb-4">
                  AI systems don't "know" truth from fiction—they predict based on patterns in training data. This means they can confidently present false information, amplify biases, and even generate convincing fake content (deepfakes).
                </p>
                <p className="text-gray-700">
                  Children are particularly vulnerable because they often lack the experience and critical thinking skills to evaluate AI-generated content effectively.
                </p>
              </div>

              {misinformationTypes.map((type, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <type.icon className="size-6 text-orange-600" />
                      <h3 className="text-xl text-gray-900">{type.title}</h3>
                    </div>
                    <Badge className={type.riskColor}>{type.riskLevel}</Badge>
                  </div>
                  <p className="text-gray-700 mb-4">{type.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg border border-orange-200">
                      <p className="text-sm text-gray-600 mb-2">How it happens:</p>
                      <p className="text-gray-800">{type.mechanism}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-orange-200">
                      <p className="text-sm text-gray-600 mb-2">Real-world impact:</p>
                      <p className="text-gray-800">{type.impact}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600 mb-2">Detection strategies:</p>
                    <ul className="space-y-1">
                      {type.detection.map((strategy, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          {strategy}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                <h3 className="text-xl text-gray-900 mb-4">Teaching Critical Evaluation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-900 mb-3">The "SMART" Check:</h4>
                    {smartCheck.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-green-200 mb-2">
                        <span className="text-green-600">{item.letter}</span>
                        <div>
                          <strong className="text-gray-900">{item.word}:</strong>
                          <p className="text-sm text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-3">Questions to Ask:</h4>
                    <ul className="space-y-2">
                      {criticalQuestions.map((question, index) => (
                        <li key={index} className="bg-white p-3 rounded-lg border border-green-200 text-sm text-gray-700">
                          {question}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="addiction">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-600">
                <TrendingDown className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">Addiction & Overuse</h2>
                <p className="text-gray-600">Understanding compulsive AI use and screen time concerns</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                <h3 className="text-xl text-gray-900 mb-3">Why AI Can Be Addictive</h3>
                <p className="text-gray-700 mb-4">
                  AI systems are designed to be engaging—they provide instant gratification, personalized content, and endless novelty. These features, while valuable, can trigger the same reward pathways in the brain associated with addiction.
                </p>
                <p className="text-gray-700">
                  Children's developing brains are particularly susceptible to these mechanisms, making it harder for them to self-regulate usage.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {addictionMechanisms.map((mechanism, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                    <div className="text-3xl mb-3">{mechanism.emoji}</div>
                    <h4 className="text-lg text-gray-900 mb-2">{mechanism.title}</h4>
                    <p className="text-gray-700 mb-3">{mechanism.description}</p>
                    <div className="bg-white p-3 rounded-lg border border-purple-200">
                      <p className="text-xs text-gray-600 mb-1">Example:</p>
                      <p className="text-sm text-gray-800">{mechanism.example}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="text-xl text-gray-900 mb-4">Warning Signs of Problematic Use</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {addictionWarnings.map((category, index) => (
                    <div key={index}>
                      <h4 className="text-gray-900 mb-3 flex items-center gap-2">
                        <category.icon className="size-5 text-red-600" />
                        {category.category}
                      </h4>
                      <ul className="space-y-2">
                        {category.signs.map((sign, i) => (
                          <li key={i} className="flex items-start gap-2 bg-white p-2 rounded border border-red-200">
                            <span className="text-red-600">⚠️</span>
                            <span className="text-sm text-gray-700">{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                <h3 className="text-xl text-gray-900 mb-4">Healthy Usage Guidelines</h3>
                <div className="space-y-4">
                  {healthyUsageGuidelines.map((guideline, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg border border-green-200">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-1">{guideline.rule}</h4>
                        <p className="text-sm text-gray-700 mb-2">{guideline.rationale}</p>
                        <p className="text-xs text-gray-600 italic">Tip: {guideline.implementation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-3">When to Seek Professional Help</h3>
                <p className="text-gray-700 mb-4">
                  If screen time significantly impacts daily functioning, consider consulting a professional. Signs include:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {professionalHelpSigns.map((sign, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-blue-200 flex items-center gap-2">
                      <AlertTriangle className="size-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="manipulation">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-red-600">
                <Eye className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">Social Engineering & Scams</h2>
                <p className="text-gray-600">How AI can be used for manipulation and exploitation</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="text-xl text-gray-900 mb-3">The Manipulation Threat</h3>
                <p className="text-gray-700">
                  AI enables sophisticated social engineering attacks that are personalized, scalable, and increasingly difficult to detect. Bad actors can use AI to create convincing fake identities, generate persuasive messages, and exploit psychological vulnerabilities—especially in children who are naturally trusting.
                </p>
              </div>

              {manipulationTactics.map((tactic, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${tactic.iconBg}`}>
                      <tactic.icon className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900">{tactic.title}</h3>
                      <Badge className={tactic.threatColor}>{tactic.threatLevel}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{tactic.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <p className="text-sm text-gray-600 mb-2">How it works:</p>
                      <p className="text-gray-800">{tactic.method}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <p className="text-sm text-gray-600 mb-2">Target audience:</p>
                      <p className="text-gray-800">{tactic.target}</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300">
                    <p className="text-sm text-gray-600 mb-2">🛡️ Protection measures:</p>
                    <ul className="space-y-1">
                      {tactic.protection.map((measure, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          {measure}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                <h3 className="text-xl text-gray-900 mb-4">Teaching Children to Recognize Manipulation</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {manipulationEducation.map((lesson, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="text-gray-900 mb-2">{lesson.concept}</h4>
                      <p className="text-sm text-gray-700 mb-3">{lesson.teaching}</p>
                      <div className="bg-blue-50 p-2 rounded text-xs text-gray-600">
                        Example: {lesson.example}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="ethics">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-indigo-600">
                <Brain className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">Ethical Considerations</h2>
                <p className="text-gray-600">Broader societal and moral implications of AI</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200">
                <h3 className="text-xl text-gray-900 mb-3">Why Ethics Matter</h3>
                <p className="text-gray-700">
                  AI raises profound ethical questions about fairness, accountability, privacy, and the future of humanity. Teaching children about these issues prepares them to be thoughtful, responsible users and citizens in an AI-powered world.
                </p>
              </div>

              {ethicalIssues.map((issue, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <issue.icon className="size-6 text-indigo-600" />
                      <h3 className="text-xl text-gray-900">{issue.topic}</h3>
                    </div>
                    <Badge className="bg-indigo-600">{issue.complexity}</Badge>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{issue.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg border border-indigo-200">
                      <p className="text-sm text-gray-600 mb-2">Key concerns:</p>
                      <ul className="space-y-1">
                        {issue.concerns.map((concern, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-indigo-600">•</span>
                            {concern}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-indigo-200">
                      <p className="text-sm text-gray-600 mb-2">Discussion questions:</p>
                      <ul className="space-y-1">
                        {issue.questions.map((question, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-indigo-600">?</span>
                            {question}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600 mb-2">Age-appropriate explanation:</p>
                    <p className="text-gray-800">{issue.childExplanation}</p>
                  </div>
                </Card>
              ))}

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                <h3 className="text-xl text-gray-900 mb-4">Fostering Ethical AI Awareness</h3>
                <div className="space-y-3">
                  {ethicalEducation.map((strategy, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="text-gray-900 mb-2">{strategy.approach}</h4>
                      <p className="text-sm text-gray-700 mb-2">{strategy.method}</p>
                      <p className="text-xs text-gray-600 italic">Activity: {strategy.activity}</p>
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

const privacyRisks = [
  {
    icon: Lock,
    title: 'Data Collection & Storage',
    severity: 'High',
    description: 'AI systems collect and store massive amounts of personal data, including conversations, search history, location, and biometric information.',
    example: 'Voice assistants record all interactions, creating detailed profiles of household members including children.'
  },
  {
    icon: Users,
    title: 'Data Sharing & Sales',
    severity: 'High',
    description: 'Personal data is often shared with third parties, sold to advertisers, or used in ways users don\'t fully understand.',
    example: 'Free AI apps monetize by selling user data to marketing companies for targeted advertising.'
  },
  {
    icon: Eye,
    title: 'Surveillance & Tracking',
    severity: 'Medium',
    description: 'AI enables sophisticated tracking of online behavior, creating detailed profiles for prediction and manipulation.',
    example: 'AI algorithms track children across websites to build behavioral profiles for ad targeting.'
  },
  {
    icon: AlertTriangle,
    title: 'Data Breaches',
    severity: 'High',
    description: 'Stored data can be hacked or leaked, exposing personal information to malicious actors.',
    example: 'Major AI companies have experienced breaches exposing millions of users\' conversations and personal details.'
  }
];

const dataCollectionMethods = [
  {
    type: 'Input Data',
    description: 'Everything typed, spoken, or uploaded',
    dataCollected: 'Messages, voice recordings, images, documents'
  },
  {
    type: 'Interaction Data',
    description: 'How users interact with the AI',
    dataCollected: 'Click patterns, time spent, preferences, behavior'
  },
  {
    type: 'Contextual Data',
    description: 'Information about the user environment',
    dataCollected: 'Location, device info, network, time of use'
  },
  {
    type: 'Derived Data',
    description: 'Inferences made about the user',
    dataCollected: 'Interests, demographics, predictions, profiles'
  },
  {
    type: 'Biometric Data',
    description: 'Physical characteristics',
    dataCollected: 'Facial features, voice patterns, typing rhythm'
  },
  {
    type: 'Social Data',
    description: 'Information about relationships',
    dataCollected: 'Contacts, social connections, communication patterns'
  }
];

const privacyProtections = [
  {
    strategy: 'Minimize Data Sharing',
    implementation: 'Teach children to share only what\'s necessary and use privacy-focused AI tools when available.'
  },
  {
    strategy: 'Use Privacy Settings',
    implementation: 'Review and maximize privacy settings on all AI tools. Disable data collection where possible.'
  },
  {
    strategy: 'Regular Data Audits',
    implementation: 'Periodically review what data has been shared and request deletion when appropriate.'
  },
  {
    strategy: 'Anonymous Usage',
    implementation: 'Use anonymous accounts, avoid linking to real identities, and don\'t provide personal details.'
  },
  {
    strategy: 'Parental Controls',
    implementation: 'Implement robust parental controls and monitoring on devices children use.'
  },
  {
    strategy: 'Education & Awareness',
    implementation: 'Continuously educate about privacy risks and model good privacy practices.'
  }
];

const privacyLessons = [
  'Personal information is like a password - keep it secret and safe',
  'Once data is shared online, it\'s very hard to take back',
  'Free AI services often make money by using your data',
  'Always ask permission before sharing information about others',
  'Private conversations should stay private, not shared with AI',
  'Your digital footprint follows you - be mindful of what you create'
];

const misinformationTypes = [
  {
    icon: Brain,
    title: 'AI Hallucinations',
    riskLevel: 'Very High',
    riskColor: 'bg-red-600',
    description: 'AI confidently generates false information that sounds plausible but is entirely made up.',
    mechanism: 'AI predicts plausible-sounding responses based on patterns, not facts. It doesn\'t "know" when it\'s wrong.',
    impact: 'Children accept false information as fact, impacting homework, understanding, and worldview.',
    detection: [
      'Cross-reference with reliable sources',
      'Be skeptical of very specific claims without sources',
      'Check multiple AI systems for consistency',
      'Ask for sources or evidence'
    ]
  },
  {
    icon: Eye,
    title: 'Algorithmic Bias',
    riskLevel: 'High',
    riskColor: 'bg-orange-600',
    description: 'AI systems perpetuate and amplify biases from their training data, leading to unfair or discriminatory outputs.',
    mechanism: 'AI learns from historical data that may contain societal biases, which get encoded into the model.',
    impact: 'Reinforces stereotypes, provides biased recommendations, and creates unfair outcomes.',
    detection: [
      'Notice if AI makes assumptions about people based on demographics',
      'Question stereotypical or overgeneralized responses',
      'Seek diverse perspectives',
      'Understand AI reflects its training data biases'
    ]
  },
  {
    icon: Zap,
    title: 'Deepfakes & Synthetic Media',
    riskLevel: 'Extreme',
    riskColor: 'bg-red-700',
    description: 'AI generates realistic fake videos, images, or audio that can deceive people into believing false events occurred.',
    mechanism: 'Deep learning models create synthetic media that\'s increasingly indistinguishable from reality.',
    impact: 'Spread misinformation, damage reputations, manipulate public opinion, and undermine trust.',
    detection: [
      'Look for visual artifacts (weird lighting, unnatural movements)',
      'Verify through multiple credible sources',
      'Use deepfake detection tools',
      'Be suspicious of sensational content'
    ]
  }
];

const smartCheck = [
  { letter: 'S', word: 'Source', description: 'Where did this information come from?' },
  { letter: 'M', word: 'Multiple', description: 'Can I find this in multiple reliable places?' },
  { letter: 'A', word: 'Ask', description: 'Ask a trusted adult if you\'re unsure' },
  { letter: 'R', word: 'Recent', description: 'Is this current information?' },
  { letter: 'T', word: 'Think', description: 'Does this make sense? Does it sound too extreme?' }
];

const criticalQuestions = [
  'What is the source of this information?',
  'Can I verify this elsewhere?',
  'Does AI explain how it knows this?',
  'Is this presenting opinion as fact?',
  'Am I being manipulated emotionally?',
  'What would an expert say about this?'
];

const addictionMechanisms = [
  {
    emoji: '🎯',
    title: 'Variable Rewards',
    description: 'Unpredictable rewards keep users engaged, similar to gambling.',
    example: 'AI generates different responses each time, creating curiosity about what comes next.'
  },
  {
    emoji: '⚡',
    title: 'Instant Gratification',
    description: 'Immediate responses satisfy the desire for instant answers.',
    example: 'Get any question answered or any image created in seconds.'
  },
  {
    emoji: '🎨',
    title: 'Personalization',
    description: 'Tailored content makes every interaction feel uniquely relevant.',
    example: 'AI learns preferences and adapts to keep you maximally engaged.'
  },
  {
    emoji: '♾️',
    title: 'Infinite Content',
    description: 'There\'s always more to explore with no natural stopping point.',
    example: 'AI can generate endless conversations, stories, or images.'
  },
  {
    emoji: '🎮',
    title: 'Gamification',
    description: 'Points, achievements, and progress tracking drive continued use.',
    example: 'Streak counters and achievement badges encourage daily usage.'
  },
  {
    emoji: '👥',
    title: 'Social Validation',
    description: 'AI provides positive feedback and validation consistently.',
    example: 'AI always responds, never judges, and makes users feel heard.'
  }
];

const addictionWarnings = [
  {
    icon: TrendingDown,
    category: 'Behavioral Changes',
    signs: [
      'Preoccupation with AI use even when doing other activities',
      'Loss of interest in previously enjoyed activities',
      'Irritability or anxiety when unable to access AI',
      'Lying about or hiding the amount of AI use',
      'Using AI as emotional escape or coping mechanism'
    ]
  },
  {
    icon: Users,
    category: 'Social Impact',
    signs: [
      'Withdrawal from family and friends',
      'Preferring AI interaction over human interaction',
      'Declining social skills or awkwardness',
      'Reduced participation in group activities',
      'Difficulty maintaining real relationships'
    ]
  },
  {
    icon: Brain,
    category: 'Academic/Functional',
    signs: [
      'Declining grades or work quality',
      'Neglecting homework or responsibilities',
      'Excessive use of AI for tasks requiring independent thinking',
      'Inability to concentrate without AI access',
      'Sleep deprivation from late-night AI use'
    ]
  },
  {
    icon: AlertTriangle,
    category: 'Physical/Mental',
    signs: [
      'Sleep problems or changed sleep schedule',
      'Eye strain, headaches, or posture problems',
      'Mood swings related to AI access',
      'Anxiety or depression symptoms',
      'Physical neglect (hygiene, exercise, meals)'
    ]
  }
];

const healthyUsageGuidelines = [
  {
    rule: 'Time Limits',
    rationale: 'Prevents excessive use and maintains balance with other activities',
    implementation: 'Set daily maximums (e.g., 1-2 hours) with built-in breaks every 30 minutes'
  },
  {
    rule: 'Tech-Free Zones/Times',
    rationale: 'Ensures presence in important moments and activities',
    implementation: 'No screens at meals, in bedrooms, or first/last hour of day'
  },
  {
    rule: 'Purpose-Driven Use',
    rationale: 'Encourages intentional use rather than mindless scrolling',
    implementation: 'Establish a purpose before using AI and stop when goal is achieved'
  },
  {
    rule: 'Balance with Real World',
    rationale: 'Maintains physical activity, social connections, and diverse experiences',
    implementation: 'For every hour of AI, require equal time in physical or social activity'
  },
  {
    rule: 'Open Communication',
    rationale: 'Builds trust and allows monitoring of problematic patterns',
    implementation: 'Regular family discussions about AI use and its effects'
  }
];

const professionalHelpSigns = [
  'Inability to cut back despite wanting to',
  'Severe impact on academic performance',
  'Complete withdrawal from social relationships',
  'Depression or anxiety centered on AI access',
  'Physical health problems from overuse',
  'Family conflict centered on AI use'
];

const manipulationTactics = [
  {
    icon: Users,
    title: 'AI-Powered Phishing',
    threatLevel: 'Extreme',
    threatColor: 'bg-red-600',
    iconBg: 'bg-red-600',
    description: 'Sophisticated, personalized scam messages created by AI that are much harder to detect than traditional phishing.',
    method: 'AI analyzes public information to create highly convincing, personalized messages that mimic trusted contacts.',
    target: 'Everyone, but especially vulnerable to children who are less skeptical of digital communications.',
    protection: [
      'Never share personal information via messages',
      'Verify requests through independent channels',
      'Be suspicious of urgency or emotional manipulation',
      'Use multi-factor authentication',
      'Educate about common scam tactics'
    ]
  },
  {
    icon: Eye,
    title: 'Synthetic Identity Fraud',
    threatLevel: 'High',
    threatColor: 'bg-orange-600',
    iconBg: 'bg-orange-600',
    description: 'AI creates fake but believable online identities to build trust before exploitation.',
    method: 'AI generates realistic profiles, conversations, and personas to establish relationships with targets.',
    target: 'Children and teens seeking online friendships or validation.',
    protection: [
      'Never meet online contacts in person',
      'Be skeptical of new online friendships',
      'Verify identities through video calls (though deepfakes exist)',
      'Report suspicious accounts',
      'Discuss online stranger danger regularly'
    ]
  },
  {
    icon: Zap,
    title: 'Manipulative Content',
    threatLevel: 'High',
    threatColor: 'bg-orange-600',
    iconBg: 'bg-yellow-600',
    description: 'AI generates content designed to manipulate emotions, opinions, or behaviors.',
    method: 'AI creates personalized persuasive content based on psychological profiles and known vulnerabilities.',
    target: 'All users, particularly those exposed to targeted advertising or propaganda.',
    protection: [
      'Understand that content is often designed to manipulate',
      'Question emotional responses to content',
      'Seek diverse viewpoints',
      'Limit exposure to AI-recommended content',
      'Develop media literacy skills'
    ]
  }
];

const manipulationEducation = [
  {
    concept: 'Trust but Verify',
    teaching: 'Teach that online personas may not be real, even if they seem trustworthy.',
    example: '"That new online friend might not be who they say they are. Let\'s verify together."'
  },
  {
    concept: 'Emotional Awareness',
    teaching: 'Help children recognize when content is designed to trigger strong emotions.',
    example: '"Notice if something makes you feel scared, excited, or pressured - that might be manipulation."'
  },
  {
    concept: 'Privacy as Protection',
    teaching: 'Frame privacy as a safety tool, not paranoia.',
    example: '"Keeping information private makes it harder for bad people to trick or hurt you."'
  },
  {
    concept: 'Critical Questioning',
    teaching: 'Encourage asking "Why?" about requests or persuasive messages.',
    example: '"Why does this person need my information? What do they gain?"'
  },
  {
    concept: 'Reporting Culture',
    teaching: 'Make it easy and non-punitive to report suspicious interactions.',
    example: '"You can always tell me about weird messages - you won\'t be in trouble."'
  },
  {
    concept: 'Slow Down Decisions',
    teaching: 'Teach that manipulators create urgency; safety requires thoughtful decisions.',
    example: '"If someone says \'Act now or miss out!\', that\'s a warning sign."'
  }
];

const ethicalIssues = [
  {
    icon: Users,
    title: 'Fairness & Bias',
    complexity: 'Complex',
    description: 'AI systems can perpetuate or amplify societal biases, leading to unfair treatment of certain groups.',
    concerns: [
      'Discriminatory hiring or lending algorithms',
      'Biased criminal justice risk assessments',
      'Unequal representation in training data',
      'Reinforcement of stereotypes'
    ],
    questions: [
      'Is it fair if AI treats people differently based on their background?',
      'Who decides what\'s fair in AI?',
      'Should AI be used in important decisions about people\'s lives?'
    ],
    childExplanation: 'Imagine if a robot only learned about animals from pictures of pets. It might not recognize wild animals or think they don\'t exist. That\'s like AI bias - if it only learns from some examples, it might not work well for everyone.'
  },
  {
    icon: Shield,
    title: 'Privacy vs. Benefit',
    complexity: 'Moderate',
    description: 'Balancing the benefits of AI with the need to protect personal privacy and autonomy.',
    concerns: [
      'Data collection for AI improvement vs. privacy rights',
      'Surveillance for safety vs. freedom',
      'Personalization vs. manipulation',
      'Public good vs. individual rights'
    ],
    questions: [
      'Is it okay to give up privacy for convenience?',
      'Who owns the data you create?',
      'Should companies be able to track everything you do?'
    ],
    childExplanation: 'It\'s like a trade: AI apps give you cool features, but they want to know about you in return. We need to decide: is what we get worth what we give up?'
  },
  {
    icon: Brain,
    title: 'Accountability & Responsibility',
    complexity: 'Complex',
    description: 'When AI makes mistakes or causes harm, determining who is responsible is challenging.',
    concerns: [
      'Who\'s liable when AI causes harm?',
      'Can AI systems be held accountable?',
      'Responsibility of developers vs. users',
      'Automated decision-making without human oversight'
    ],
    questions: [
      'If a self-driving car crashes, who\'s to blame?',
      'Should AI make life-or-death decisions?',
      'Can you trust AI to be fair?'
    ],
    childExplanation: 'If a robot makes a mistake, who should fix it? The person who made the robot? The person who told it what to do? Or the person who used it? It\'s a tricky question!'
  },
  {
    icon: Zap,
    title: 'Impact on Society & Work',
    complexity: 'High',
    description: 'AI will transform jobs, economy, and social structures in ways we\'re only beginning to understand.',
    concerns: [
      'Job displacement and economic inequality',
      'Changing nature of work and education',
      'Concentration of power in tech companies',
      'Human skills becoming obsolete'
    ],
    questions: [
      'What jobs will exist in the future?',
      'Should AI replace human workers?',
      'How do we prepare for an AI future?'
    ],
    childExplanation: 'AI can do some jobs faster than people, which is helpful! But what about the people who used to do those jobs? They need new jobs. We have to make sure AI helps everyone, not just some people.'
  }
];

const ethicalEducation = [
  {
    approach: 'Real-World Scenarios',
    method: 'Present ethical dilemmas in age-appropriate contexts',
    activity: 'Discuss: "Should a store use AI cameras to track shoppers? Why or why not?"'
  },
  {
    approach: 'Multiple Perspectives',
    method: 'Explore issues from different viewpoints to develop critical thinking',
    activity: 'Debate: "Argue both for and against using AI in schools for grading"'
  },
  {
    approach: 'Personal Reflection',
    method: 'Connect ethical issues to children\'s own values and experiences',
    activity: 'Journal: "How do you want AI to be used in your life? What are your limits?"'
  },
  {
    approach: 'Future Thinking',
    method: 'Encourage imagination about long-term implications',
    activity: 'Create: "Design an AI tool that helps people without invading privacy"'
  }
];

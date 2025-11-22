import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Brain, MessageSquare, Eye, Network, Database, Cpu, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

interface TechnicalModuleProps {
  onBack: () => void;
}

export function TechnicalModule({ onBack }: TechnicalModuleProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

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
          <h1 className="text-4xl text-gray-900">Technical Understanding of AI</h1>
          <p className="text-gray-600">Deep dive into artificial intelligence technologies</p>
        </div>
      </div>

      <Tabs defaultValue="ml" className="mb-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="ml">Machine Learning</TabsTrigger>
          <TabsTrigger value="nlp">NLP</TabsTrigger>
          <TabsTrigger value="cv">Computer Vision</TabsTrigger>
          <TabsTrigger value="dl">Deep Learning</TabsTrigger>
          <TabsTrigger value="data">Data & Training</TabsTrigger>
        </TabsList>

        <TabsContent value="ml">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-600">
                <Brain className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">Machine Learning (ML)</h2>
                <p className="text-gray-600">How computers learn from data</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-3">What is Machine Learning?</h3>
                <p className="text-gray-700 mb-4">
                  Machine Learning is a subset of AI that enables computers to learn and improve from experience without being explicitly programmed. Instead of following rigid instructions, ML algorithms identify patterns in data and make decisions based on those patterns.
                </p>
                <p className="text-gray-700">
                  Think of it like teaching a child to recognize animals: you show them many examples, and over time, they learn to identify new animals they've never seen before based on common features.
                </p>
              </div>

              {mlTopics.map((topic) => (
                <div key={topic.id} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(topic.id)}
                    className="w-full p-6 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <topic.icon className="size-6 text-blue-600" />
                      <h4 className="text-xl text-gray-900">{topic.title}</h4>
                    </div>
                    {expandedSection === topic.id ? (
                      <ChevronUp className="size-6 text-gray-600" />
                    ) : (
                      <ChevronDown className="size-6 text-gray-600" />
                    )}
                  </button>
                  {expandedSection === topic.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="p-6 bg-white"
                    >
                      <p className="text-gray-700 mb-4">{topic.description}</p>
                      <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <p className="text-sm text-gray-600 mb-2">Real-World Example:</p>
                        <p className="text-gray-800">{topic.example}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Key Characteristics:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {topic.characteristics.map((char, index) => (
                            <li key={index}>{char}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
                <h3 className="text-xl text-gray-900 mb-3">Teaching Children About ML</h3>
                <p className="text-gray-700">
                  Explain ML to children using everyday examples: "Remember how you learned to ride a bike? You fell a few times, adjusted, and got better. That's how AI learns too - by trying, making mistakes, and improving!"
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="nlp">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-600">
                <MessageSquare className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">Natural Language Processing (NLP)</h2>
                <p className="text-gray-600">How AI understands human language</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h3 className="text-xl text-gray-900 mb-3">What is NLP?</h3>
                <p className="text-gray-700 mb-4">
                  Natural Language Processing is the branch of AI focused on enabling computers to understand, interpret, and generate human language. It's what allows chatbots to understand your questions, virtual assistants to respond to commands, and translation apps to convert between languages.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {nlpConcepts.map((concept) => (
                  <Card key={concept.title} className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                    <h4 className="text-xl text-gray-900 mb-3">{concept.title}</h4>
                    <p className="text-gray-700 mb-4">{concept.description}</p>
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <p className="text-sm text-gray-600 mb-1">Example:</p>
                      <p className="text-gray-800">{concept.example}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-3">How NLP Works</h3>
                <div className="space-y-4">
                  {nlpSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
                <h3 className="text-xl text-gray-900 mb-3">NLP in Everyday Life</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {nlpApplications.map((app) => (
                    <div key={app} className="bg-white p-4 rounded-lg border border-yellow-200 text-center">
                      <p className="text-gray-800">{app}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="cv">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-600">
                <Eye className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">Computer Vision (CV)</h2>
                <p className="text-gray-600">How AI sees and understands images</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                <h3 className="text-xl text-gray-900 mb-3">What is Computer Vision?</h3>
                <p className="text-gray-700 mb-4">
                  Computer Vision enables computers to derive meaningful information from digital images, videos, and visual inputs. It's about teaching machines to "see" and understand visual content the way humans do.
                </p>
                <p className="text-gray-700">
                  CV powers facial recognition, autonomous vehicles, medical imaging analysis, and augmented reality applications.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {cvCapabilities.map((capability) => (
                  <Card key={capability.title} className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                    <div className="flex items-center gap-2 mb-3">
                      <capability.icon className="size-6 text-purple-600" />
                      <h4 className="text-xl text-gray-900">{capability.title}</h4>
                    </div>
                    <p className="text-gray-700 mb-3">{capability.description}</p>
                    <Badge className="bg-purple-600">{capability.useCase}</Badge>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-3">How Computer Vision Works</h3>
                <p className="text-gray-700 mb-4">
                  Computer vision uses neural networks to process images in layers, similar to how the human visual cortex works:
                </p>
                <div className="space-y-3">
                  {cvProcess.map((step, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-gray-900">{step.stage}</h4>
                        <p className="text-sm text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
                <h3 className="text-xl text-gray-900 mb-3">Privacy Considerations with CV</h3>
                <p className="text-gray-700 mb-4">
                  Teaching children about computer vision includes discussing privacy:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>Facial recognition in public spaces and social media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>Being mindful about sharing photos online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>Understanding that images can be analyzed and stored</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>Permission before posting photos of others</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="dl">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-indigo-600">
                <Network className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">Deep Learning & Neural Networks</h2>
                <p className="text-gray-600">Advanced AI inspired by the human brain</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200">
                <h3 className="text-xl text-gray-900 mb-3">What is Deep Learning?</h3>
                <p className="text-gray-700 mb-4">
                  Deep Learning is a subset of machine learning that uses artificial neural networks with multiple layers (hence "deep") to model and understand complex patterns. It's inspired by the structure and function of the human brain.
                </p>
                <p className="text-gray-700">
                  Deep learning has revolutionized AI, enabling breakthroughs in image recognition, language translation, game playing, and creative content generation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200">
                  <h4 className="text-xl text-gray-900 mb-3">Neural Networks Explained</h4>
                  <p className="text-gray-700 mb-4">
                    Neural networks consist of interconnected nodes (neurons) organized in layers:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Input Layer:</strong> Receives the initial data</li>
                    <li><strong>Hidden Layers:</strong> Process and transform data</li>
                    <li><strong>Output Layer:</strong> Produces the final result</li>
                  </ul>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200">
                  <h4 className="text-xl text-gray-900 mb-3">Why "Deep"?</h4>
                  <p className="text-gray-700 mb-4">
                    "Deep" refers to the number of layers in the network. More layers allow the network to learn more complex patterns and representations.
                  </p>
                  <p className="text-sm text-gray-600">
                    Modern deep learning models can have hundreds of layers and millions of parameters!
                  </p>
                </Card>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-3">How Neural Networks Learn</h3>
                <div className="space-y-4">
                  {dlLearning.map((step, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-blue-200">
                      <h4 className="text-gray-900 mb-2">{step.phase}</h4>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h3 className="text-xl text-gray-900 mb-3">Deep Learning Applications</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {dlApplications.map((app, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="text-gray-900 mb-2">{app.area}</h4>
                      <p className="text-sm text-gray-700">{app.example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="data">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-600">
                <Database className="size-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900">Data & Training</h2>
                <p className="text-gray-600">The foundation of all AI systems</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
                <h3 className="text-xl text-gray-900 mb-3">Why Data Matters</h3>
                <p className="text-gray-700 mb-4">
                  Data is the fuel that powers AI. Without quality data, even the most sophisticated AI algorithms cannot learn effectively. The saying "garbage in, garbage out" is particularly true for AI systems.
                </p>
                <p className="text-gray-700">
                  AI models learn patterns from training data, so the quality, quantity, and diversity of data directly impact AI performance and reliability.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {dataTypes.map((type) => (
                  <Card key={type.title} className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200">
                    <h4 className="text-xl text-gray-900 mb-3">{type.title}</h4>
                    <p className="text-gray-700 mb-3">{type.description}</p>
                    <div className="space-y-2">
                      {type.examples.map((example, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="text-xl text-gray-900 mb-3">Data Bias & Fairness</h3>
                <p className="text-gray-700 mb-4">
                  AI systems can inherit and amplify biases present in their training data. This is a critical ethical concern:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {biasIssues.map((issue, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-red-200">
                      <h4 className="text-gray-900 mb-2">{issue.problem}</h4>
                      <p className="text-sm text-gray-700 mb-2">{issue.consequence}</p>
                      <p className="text-sm text-red-600">Impact: {issue.impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-3">The Training Process</h3>
                <div className="space-y-3">
                  {trainingSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-1">{step.step}</h4>
                        <p className="text-sm text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
                <h3 className="text-xl text-gray-900 mb-3">Teaching Children About Data</h3>
                <p className="text-gray-700 mb-4">Help children understand:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span>📊</span>
                    <span>AI learns from examples, just like they learn from experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🔒</span>
                    <span>Their data (photos, messages, searches) can be used to train AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>⚖️</span>
                    <span>AI can be unfair if it learns from biased examples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🛡️</span>
                    <span>The importance of data privacy and protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

const mlTopics = [
  {
    id: 'supervised',
    icon: Cpu,
    title: 'Supervised Learning',
    description: 'In supervised learning, the algorithm learns from labeled data - data where the correct answer is already known. It\'s like learning with a teacher who provides the right answers.',
    example: 'Email spam filters learn by being shown thousands of emails labeled as "spam" or "not spam." Over time, they learn to identify spam on their own.',
    characteristics: [
      'Requires labeled training data',
      'Used for classification and prediction',
      'Examples: Image recognition, spam detection',
      'Most common type of machine learning'
    ]
  },
  {
    id: 'unsupervised',
    icon: Network,
    title: 'Unsupervised Learning',
    description: 'Unsupervised learning works with unlabeled data. The algorithm tries to find patterns and structure in the data without being told what to look for.',
    example: 'Customer segmentation in marketing - grouping customers by behavior without predefined categories.',
    characteristics: [
      'No labeled data required',
      'Discovers hidden patterns',
      'Examples: Clustering, anomaly detection',
      'Used for data exploration'
    ]
  },
  {
    id: 'reinforcement',
    icon: Brain,
    title: 'Reinforcement Learning',
    description: 'The algorithm learns by trial and error, receiving rewards for good actions and penalties for bad ones. It\'s like training a dog with treats.',
    example: 'Game-playing AI (like AlphaGo) learns by playing millions of games and learning from wins and losses.',
    characteristics: [
      'Learns through interaction',
      'Reward-based optimization',
      'Examples: Game AI, robotics',
      'Requires many iterations'
    ]
  }
];

const nlpConcepts = [
  {
    title: 'Text Understanding',
    description: 'AI analyzes text to extract meaning, sentiment, and intent from written language.',
    example: 'Sentiment analysis determines if a product review is positive, negative, or neutral.'
  },
  {
    title: 'Language Generation',
    description: 'AI creates human-like text based on patterns learned from vast amounts of text data.',
    example: 'ChatGPT generates coherent responses to questions and prompts.'
  },
  {
    title: 'Translation',
    description: 'AI converts text from one language to another while preserving meaning and context.',
    example: 'Google Translate can translate between over 100 languages.'
  },
  {
    title: 'Speech Recognition',
    description: 'AI converts spoken words into text, enabling voice commands and transcription.',
    example: 'Siri and Alexa understand voice commands to control devices.'
  }
];

const nlpSteps = [
  {
    title: 'Tokenization',
    description: 'Breaking text into smaller units (words, phrases, or characters)'
  },
  {
    title: 'Analysis',
    description: 'Understanding grammar, context, and relationships between words'
  },
  {
    title: 'Meaning Extraction',
    description: 'Determining the intent and sentiment behind the text'
  },
  {
    title: 'Response Generation',
    description: 'Creating appropriate output based on understanding'
  }
];

const nlpApplications = [
  'Virtual Assistants',
  'Email Filters',
  'Search Engines',
  'Translation Apps',
  'Autocomplete',
  'Chatbots'
];

const cvCapabilities = [
  {
    icon: Eye,
    title: 'Object Detection',
    description: 'Identifying and locating specific objects within images',
    useCase: 'Self-driving cars detecting pedestrians'
  },
  {
    icon: MessageSquare,
    title: 'Facial Recognition',
    description: 'Identifying individuals based on facial features',
    useCase: 'Phone unlock with Face ID'
  },
  {
    icon: Network,
    title: 'Image Classification',
    description: 'Categorizing images into predefined groups',
    useCase: 'Google Photos organizing by content'
  },
  {
    icon: Cpu,
    title: 'Image Generation',
    description: 'Creating new images from text descriptions',
    useCase: 'AI art generators like DALL-E'
  }
];

const cvProcess = [
  {
    stage: 'Image Input',
    description: 'The system receives an image as a grid of pixels with color values'
  },
  {
    stage: 'Feature Detection',
    description: 'Early layers detect simple features like edges and shapes'
  },
  {
    stage: 'Pattern Recognition',
    description: 'Middle layers identify more complex patterns like textures'
  },
  {
    stage: 'Object Identification',
    description: 'Deep layers recognize complete objects and their relationships'
  },
  {
    stage: 'Decision Making',
    description: 'Final layers make classifications or predictions'
  }
];

const dlLearning = [
  {
    phase: 'Forward Propagation',
    description: 'Data moves through the network from input to output, with each layer transforming the information'
  },
  {
    phase: 'Loss Calculation',
    description: 'The network compares its output to the correct answer and calculates how wrong it was'
  },
  {
    phase: 'Backpropagation',
    description: 'The error is sent backward through the network to adjust the connections'
  },
  {
    phase: 'Parameter Update',
    description: 'The network fine-tunes itself to perform better on the next attempt'
  }
];

const dlApplications = [
  { area: 'Healthcare', example: 'Disease diagnosis from medical images' },
  { area: 'Language', example: 'Real-time translation and chatbots' },
  { area: 'Vision', example: 'Autonomous vehicle navigation' },
  { area: 'Gaming', example: 'AI opponents and procedural content' },
  { area: 'Finance', example: 'Fraud detection and trading algorithms' },
  { area: 'Creativity', example: 'AI-generated art and music' }
];

const dataTypes = [
  {
    title: 'Training Data',
    description: 'Data used to teach the AI model patterns and relationships',
    examples: [
      'Images with labels',
      'Text documents',
      'Sensor readings',
      'User interactions'
    ]
  },
  {
    title: 'Validation Data',
    description: 'Data used to tune and optimize the model during training',
    examples: [
      'Separate test set',
      'Cross-validation splits',
      'Performance metrics',
      'Error analysis'
    ]
  },
  {
    title: 'Test Data',
    description: 'Unseen data used to evaluate final model performance',
    examples: [
      'Real-world scenarios',
      'Edge cases',
      'Diverse examples',
      'Blind testing'
    ]
  },
  {
    title: 'Production Data',
    description: 'Live data the model encounters in real-world use',
    examples: [
      'User inputs',
      'Streaming data',
      'Real-time decisions',
      'Continuous learning'
    ]
  }
];

const biasIssues = [
  {
    problem: 'Historical Bias',
    consequence: 'AI perpetuates past discrimination in hiring or lending',
    impact: 'Unfair treatment of certain groups'
  },
  {
    problem: 'Sampling Bias',
    consequence: 'AI trained on non-representative data makes poor predictions',
    impact: 'Reduced accuracy for underrepresented groups'
  },
  {
    problem: 'Measurement Bias',
    consequence: 'Incorrect or biased labeling of training data',
    impact: 'Systematic errors in AI decisions'
  },
  {
    problem: 'Algorithm Bias',
    consequence: 'The learning process itself may favor certain outcomes',
    impact: 'Structural unfairness in AI systems'
  }
];

const trainingSteps = [
  {
    step: 'Data Collection',
    description: 'Gather large amounts of relevant, high-quality data'
  },
  {
    step: 'Data Preprocessing',
    description: 'Clean, normalize, and prepare data for training'
  },
  {
    step: 'Model Selection',
    description: 'Choose appropriate algorithm and architecture'
  },
  {
    step: 'Training',
    description: 'Feed data through model repeatedly to learn patterns'
  },
  {
    step: 'Validation',
    description: 'Test performance on separate validation data'
  },
  {
    step: 'Fine-tuning',
    description: 'Adjust parameters to improve performance'
  },
  {
    step: 'Testing',
    description: 'Evaluate final model on unseen test data'
  },
  {
    step: 'Deployment',
    description: 'Put trained model into production use'
  }
];

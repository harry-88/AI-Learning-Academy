import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Sparkles, Star, Trophy, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

interface InteractiveGameProps {
  onBack: () => void;
  earnStar: () => void;
}

type GameType = 'quiz' | 'match' | 'sort';

export function InteractiveGame({ onBack, earnStar }: InteractiveGameProps) {
  const [gameType, setGameType] = useState<GameType | null>(null);

  if (!gameType) {
    return <GameSelector onBack={onBack} setGameType={setGameType} />;
  }

  return (
    <div>
      {gameType === 'quiz' && <AIQuizGame onBack={() => setGameType(null)} earnStar={earnStar} />}
      {gameType === 'match' && <MatchGame onBack={() => setGameType(null)} earnStar={earnStar} />}
      {gameType === 'sort' && <SortingGame onBack={() => setGameType(null)} earnStar={earnStar} />}
    </div>
  );
}

function GameSelector({ onBack, setGameType }: { onBack: () => void; setGameType: (type: GameType) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="flex items-center justify-between mb-8">
        <Button variant="outline" onClick={onBack} className="border-2 border-purple-300">
          <ArrowLeft className="size-4 mr-2" />
          Back to Home
        </Button>
      </div>

      <div className="text-center mb-12">
        <Sparkles className="size-16 text-yellow-600 mx-auto mb-4" />
        <h1 className="text-5xl text-purple-900 mb-4">Fun Learning Games!</h1>
        <p className="text-2xl text-gray-700">Choose a game to test your AI knowledge!</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <motion.div
            key={game.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card
              className={`p-8 cursor-pointer ${game.bgColor} border-4 ${game.borderColor} hover:shadow-2xl transition-all`}
              onClick={() => setGameType(game.type as GameType)}
            >
              <div className={`inline-flex p-4 rounded-2xl mb-4 ${game.iconBg}`}>
                <game.icon className="size-10 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">{game.title}</h3>
              <p className="text-gray-700 mb-4">{game.description}</p>
              <Badge className={game.badgeColor}>{game.difficulty}</Badge>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function AIQuizGame({ onBack, earnStar }: { onBack: () => void; earnStar: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameComplete(true);
        if (score + (index === quizQuestions[currentQuestion].correctAnswer ? 1 : 0) >= 3) {
          earnStar();
        }
      }
    }, 2000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameComplete(false);
  };

  if (gameComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto px-4 py-12"
      >
        <Card className="p-12 text-center bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-yellow-300">
          <Trophy className="size-24 text-yellow-600 mx-auto mb-6" />
          <h2 className="text-4xl text-gray-900 mb-4">Quiz Complete!</h2>
          <p className="text-3xl text-purple-600 mb-6">You scored {score} out of {quizQuestions.length}!</p>
          {score >= 3 ? (
            <div className="mb-6">
              <Star className="size-16 text-yellow-600 fill-yellow-600 mx-auto mb-2" />
              <p className="text-2xl text-green-600">Awesome! You earned a star! ⭐</p>
            </div>
          ) : (
            <p className="text-xl text-gray-700 mb-6">Good try! Play again to earn a star!</p>
          )}
          <div className="flex gap-4 justify-center">
            <Button onClick={resetGame} size="lg" className="bg-purple-600 hover:bg-purple-700">
              <RefreshCw className="size-5 mr-2" />
              Play Again
            </Button>
            <Button onClick={onBack} size="lg" variant="outline">
              Back to Games
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Button variant="outline" onClick={onBack} size="sm">
            <ArrowLeft className="size-4 mr-2" />
            Back
          </Button>
          <Badge className="bg-purple-600 text-lg px-4 py-2">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </Badge>
        </div>
        <Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="h-3" />
      </div>

      <Card className="p-8 bg-white border-4 border-purple-300">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{question.emoji}</div>
          <h2 className="text-3xl text-gray-900 mb-2">{question.question}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
              onClick={() => selectedAnswer === null && handleAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`p-6 rounded-xl border-4 text-left transition-all ${
                selectedAnswer === null
                  ? 'bg-white border-gray-300 hover:border-purple-400'
                  : index === question.correctAnswer
                  ? 'bg-green-100 border-green-400'
                  : selectedAnswer === index
                  ? 'bg-red-100 border-red-400'
                  : 'bg-gray-50 border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-xl text-gray-900">{option}</p>
                {showResult && index === question.correctAnswer && (
                  <CheckCircle className="size-8 text-green-600" />
                )}
                {showResult && selectedAnswer === index && index !== question.correctAnswer && (
                  <XCircle className="size-8 text-red-600" />
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200"
          >
            <p className="text-gray-700">
              <span className="text-blue-600">💡 </span>
              {question.explanation}
            </p>
          </motion.div>
        )}
      </Card>

      <div className="text-center mt-6">
        <p className="text-2xl text-gray-700">Score: {score} / {currentQuestion + (showResult ? 1 : 0)}</p>
      </div>
    </motion.div>
  );
}

function MatchGame({ onBack, earnStar }: { onBack: () => void; earnStar: () => void }) {
  const [matches, setMatches] = useState<{ [key: number]: number | null }>({});
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  const [gameComplete, setGameComplete] = useState(false);

  const handleTermClick = (index: number) => {
    setSelectedTerm(index);
  };

  const handleDefinitionClick = (index: number) => {
    if (selectedTerm === null) return;
    
    const newMatches = { ...matches, [selectedTerm]: index };
    setMatches(newMatches);
    setSelectedTerm(null);

    if (Object.keys(newMatches).length === matchingPairs.length) {
      const allCorrect = matchingPairs.every((_, i) => newMatches[i] === i);
      if (allCorrect) {
        earnStar();
      }
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setMatches({});
    setSelectedTerm(null);
    setGameComplete(false);
  };

  const correctMatches = Object.entries(matches).filter(([term, def]) => parseInt(term) === def).length;

  if (gameComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto px-4 py-12"
      >
        <Card className="p-12 text-center bg-gradient-to-br from-purple-50 to-pink-50 border-4 border-purple-300">
          <Trophy className="size-24 text-purple-600 mx-auto mb-6" />
          <h2 className="text-4xl text-gray-900 mb-4">Matching Complete!</h2>
          <p className="text-3xl text-purple-600 mb-6">
            You got {correctMatches} out of {matchingPairs.length} correct!
          </p>
          {correctMatches === matchingPairs.length && (
            <div className="mb-6">
              <Star className="size-16 text-yellow-600 fill-yellow-600 mx-auto mb-2" />
              <p className="text-2xl text-green-600">Perfect! You earned a star! ⭐</p>
            </div>
          )}
          <div className="flex gap-4 justify-center">
            <Button onClick={resetGame} size="lg" className="bg-purple-600">
              <RefreshCw className="size-5 mr-2" />
              Try Again
            </Button>
            <Button onClick={onBack} size="lg" variant="outline">
              Back to Games
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <div className="flex items-center justify-between mb-8">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="size-4 mr-2" />
          Back to Games
        </Button>
        <Badge className="bg-purple-600 text-lg px-4 py-2">
          Matched: {Object.keys(matches).length} / {matchingPairs.length}
        </Badge>
      </div>

      <Card className="p-8 bg-white border-4 border-purple-300 mb-6">
        <h2 className="text-3xl text-center text-gray-900 mb-2">Match the AI Terms!</h2>
        <p className="text-xl text-center text-gray-700 mb-8">
          Click a term, then click its matching definition
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-xl text-purple-900 mb-4">AI Terms</h3>
            {matchingPairs.map((pair, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => matches[index] === undefined && handleTermClick(index)}
                disabled={matches[index] !== undefined}
                className={`w-full p-4 rounded-xl border-3 text-left transition-all ${
                  matches[index] !== undefined
                    ? matches[index] === index
                      ? 'bg-green-100 border-green-400'
                      : 'bg-red-100 border-red-400'
                    : selectedTerm === index
                    ? 'bg-purple-200 border-purple-400 border-4'
                    : 'bg-blue-50 border-blue-300 hover:border-purple-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl mb-1">{pair.emoji}</div>
                    <p className="text-lg text-gray-900">{pair.term}</p>
                  </div>
                  {matches[index] !== undefined && (
                    matches[index] === index ? (
                      <CheckCircle className="size-6 text-green-600" />
                    ) : (
                      <XCircle className="size-6 text-red-600" />
                    )
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-xl text-purple-900 mb-4">Definitions</h3>
            {matchingPairs.map((pair, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: selectedTerm !== null ? 1.02 : 1 }}
                onClick={() => handleDefinitionClick(index)}
                disabled={Object.values(matches).includes(index) || selectedTerm === null}
                className={`w-full p-4 rounded-xl border-3 text-left transition-all ${
                  Object.values(matches).includes(index)
                    ? 'bg-gray-100 border-gray-300 opacity-50'
                    : selectedTerm !== null
                    ? 'bg-yellow-50 border-yellow-300 hover:border-yellow-400 cursor-pointer'
                    : 'bg-gray-50 border-gray-300'
                }`}
              >
                <p className="text-gray-900">{pair.definition}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function SortingGame({ onBack, earnStar }: { onBack: () => void; earnStar: () => void }) {
  const [safeItems, setSafeItems] = useState<number[]>([]);
  const [unsafeItems, setUnsafeItems] = useState<number[]>([]);
  const [gameComplete, setGameComplete] = useState(false);

  const handleSort = (index: number, isSafe: boolean) => {
    if (safeItems.includes(index) || unsafeItems.includes(index)) return;

    if (isSafe) {
      setSafeItems([...safeItems, index]);
    } else {
      setUnsafeItems([...unsafeItems, index]);
    }

    if (safeItems.length + unsafeItems.length + 1 === sortingItems.length) {
      const correct = sortingItems.every((item, i) => {
        if (item.safe) {
          return safeItems.includes(i) || (safeItems.length === 0 && isSafe && i === index);
        } else {
          return unsafeItems.includes(i) || (unsafeItems.length === 0 && !isSafe && i === index);
        }
      });
      
      if (correct) {
        earnStar();
      }
      setTimeout(() => setGameComplete(true), 500);
    }
  };

  const resetGame = () => {
    setSafeItems([]);
    setUnsafeItems([]);
    setGameComplete(false);
  };

  if (gameComplete) {
    const correctSafe = sortingItems.filter((item, i) => item.safe && safeItems.includes(i)).length;
    const correctUnsafe = sortingItems.filter((item, i) => !item.safe && unsafeItems.includes(i)).length;
    const totalCorrect = correctSafe + correctUnsafe;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto px-4 py-12"
      >
        <Card className="p-12 text-center bg-gradient-to-br from-green-50 to-blue-50 border-4 border-green-300">
          <Trophy className="size-24 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl text-gray-900 mb-4">Sorting Complete!</h2>
          <p className="text-3xl text-green-600 mb-6">
            You got {totalCorrect} out of {sortingItems.length} correct!
          </p>
          {totalCorrect === sortingItems.length && (
            <div className="mb-6">
              <Star className="size-16 text-yellow-600 fill-yellow-600 mx-auto mb-2" />
              <p className="text-2xl text-green-600">Perfect sorting! You earned a star! ⭐</p>
            </div>
          )}
          <div className="flex gap-4 justify-center">
            <Button onClick={resetGame} size="lg" className="bg-green-600">
              <RefreshCw className="size-5 mr-2" />
              Sort Again
            </Button>
            <Button onClick={onBack} size="lg" variant="outline">
              Back to Games
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  }

  const remainingItems = sortingItems.filter((_, i) => !safeItems.includes(i) && !unsafeItems.includes(i));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <div className="flex items-center justify-between mb-8">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="size-4 mr-2" />
          Back to Games
        </Button>
        <Badge className="bg-green-600 text-lg px-4 py-2">
          Sorted: {safeItems.length + unsafeItems.length} / {sortingItems.length}
        </Badge>
      </div>

      <Card className="p-8 bg-white border-4 border-green-300 mb-6">
        <h2 className="text-3xl text-center text-gray-900 mb-2">Sort: Safe or Unsafe?</h2>
        <p className="text-xl text-center text-gray-700 mb-8">
          Drag or click items into the right category!
        </p>

        {/* Items to Sort */}
        <div className="mb-8">
          <h3 className="text-xl text-gray-900 mb-4 text-center">Click to Sort:</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {remainingItems.map((item, originalIndex) => {
              const index = sortingItems.indexOf(item);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                  <Card className="p-4 bg-blue-50 border-2 border-blue-300 cursor-move">
                    <div className="text-2xl mb-2 text-center">{item.emoji}</div>
                    <p className="text-sm text-gray-900 text-center max-w-[150px]">{item.text}</p>
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        onClick={() => handleSort(index, true)}
                        className="bg-green-600 hover:bg-green-700 text-xs"
                      >
                        Safe
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleSort(index, false)}
                        variant="destructive"
                        className="text-xs"
                      >
                        Unsafe
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Sort Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-2xl border-4 border-green-400 min-h-[300px]">
            <h3 className="text-2xl text-green-900 mb-4 flex items-center gap-2">
              <CheckCircle className="size-6" />
              Safe ✓
            </h3>
            <div className="space-y-2">
              {safeItems.map((index) => (
                <div key={index} className="bg-white p-3 rounded-lg border-2 border-green-300 flex items-center gap-3">
                  <span className="text-xl">{sortingItems[index].emoji}</span>
                  <span className="text-gray-900">{sortingItems[index].text}</span>
                  {sortingItems[index].safe && <CheckCircle className="size-5 text-green-600 ml-auto" />}
                  {!sortingItems[index].safe && <XCircle className="size-5 text-red-600 ml-auto" />}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-2xl border-4 border-red-400 min-h-[300px]">
            <h3 className="text-2xl text-red-900 mb-4 flex items-center gap-2">
              <XCircle className="size-6" />
              Unsafe ✗
            </h3>
            <div className="space-y-2">
              {unsafeItems.map((index) => (
                <div key={index} className="bg-white p-3 rounded-lg border-2 border-red-300 flex items-center gap-3">
                  <span className="text-xl">{sortingItems[index].emoji}</span>
                  <span className="text-gray-900">{sortingItems[index].text}</span>
                  {!sortingItems[index].safe && <CheckCircle className="size-5 text-green-600 ml-auto" />}
                  {sortingItems[index].safe && <XCircle className="size-5 text-red-600 ml-auto" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

const games = [
  {
    type: 'quiz',
    icon: Sparkles,
    title: 'AI Quiz',
    description: 'Answer fun questions about AI!',
    difficulty: 'Easy',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    borderColor: 'border-purple-300',
    iconBg: 'bg-purple-500',
    badgeColor: 'bg-purple-600'
  },
  {
    type: 'match',
    icon: Trophy,
    title: 'Match Terms',
    description: 'Match AI words with their meanings!',
    difficulty: 'Medium',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    borderColor: 'border-blue-300',
    iconBg: 'bg-blue-500',
    badgeColor: 'bg-blue-600'
  },
  {
    type: 'sort',
    icon: CheckCircle,
    title: 'Safe or Unsafe?',
    description: 'Sort actions into safe and unsafe!',
    difficulty: 'Easy',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    borderColor: 'border-green-300',
    iconBg: 'bg-green-500',
    badgeColor: 'bg-green-600'
  }
];

const quizQuestions = [
  {
    emoji: '🤖',
    question: 'What does AI stand for?',
    options: [
      'Always Internet',
      'Artificial Intelligence',
      'Animal Information',
      'Awesome Ideas'
    ],
    correctAnswer: 1,
    explanation: 'AI stands for Artificial Intelligence - it means computer programs that can think and learn!'
  },
  {
    emoji: '🔒',
    question: 'What should you NEVER share with AI?',
    options: [
      'Your favorite color',
      'Your home address',
      'What games you like',
      'Your favorite food'
    ],
    correctAnswer: 1,
    explanation: 'Never share personal information like your address, phone number, or full name with AI!'
  },
  {
    emoji: '📚',
    question: 'How does AI learn?',
    options: [
      'By reading lots of information',
      'By eating computer chips',
      'By watching TV',
      'By sleeping'
    ],
    correctAnswer: 0,
    explanation: 'AI learns by processing lots of information and finding patterns, just like you learn by studying!'
  },
  {
    emoji: '👨‍👩‍👧',
    question: 'Before using a new AI tool, you should:',
    options: [
      'Use it immediately',
      'Ask your parents or teacher first',
      'Tell all your friends',
      'Share your password'
    ],
    correctAnswer: 1,
    explanation: 'Always ask a trusted adult before using new AI tools to make sure they\'re safe!'
  },
  {
    emoji: '✅',
    question: 'If AI gives you information for homework, you should:',
    options: [
      'Copy it without checking',
      'Check it with your teacher or other sources',
      'Assume it\'s always right',
      'Never use AI for learning'
    ],
    correctAnswer: 1,
    explanation: 'AI can make mistakes, so always verify important information with teachers or reliable sources!'
  }
];

const matchingPairs = [
  {
    emoji: '🤖',
    term: 'AI',
    definition: 'Computer programs that can learn and think'
  },
  {
    emoji: '💬',
    term: 'Chatbot',
    definition: 'AI that can have conversations with you'
  },
  {
    emoji: '🔒',
    term: 'Privacy',
    definition: 'Keeping your personal information safe'
  },
  {
    emoji: '📊',
    term: 'Data',
    definition: 'Information that AI uses to learn'
  },
  {
    emoji: '🎯',
    term: 'Prediction',
    definition: 'AI\'s guess about what might happen'
  }
];

const sortingItems = [
  { emoji: '✅', text: 'Asking parents before using AI', safe: true },
  { emoji: '❌', text: 'Sharing your home address', safe: false },
  { emoji: '✅', text: 'Using AI to learn about science', safe: true },
  { emoji: '❌', text: 'Telling AI your phone number', safe: false },
  { emoji: '✅', text: 'Checking AI answers with teacher', safe: true },
  { emoji: '❌', text: 'Meeting online friends in person', safe: false },
  { emoji: '✅', text: 'Taking breaks from screen time', safe: true },
  { emoji: '❌', text: 'Clicking unknown links from AI', safe: false },
  { emoji: '✅', text: 'Being kind and polite to AI', safe: true },
  { emoji: '❌', text: 'Keeping AI use secret from parents', safe: false }
];

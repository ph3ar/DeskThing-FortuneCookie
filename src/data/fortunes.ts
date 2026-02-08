export type FortuneCategory =
  | "adventure"
  | "skill"
  | "experience"
  | "wisdom"
  | "chaos"
  | "principle";

export interface Fortune {
  text: string;
  category: FortuneCategory;
}

export interface FortuneData {
  /** Current fortune to display */
  fortune: Fortune;
  /** Index in the fortunes array */
  index: number;
  /** Total fortunes available */
  totalFortunes: number;
  /** How many have been revealed this session */
  totalRevealed: number;
  /** Last updated time string */
  lastUpdated: string;
}

export const fortunes: Fortune[] = [
  // Adventure
  { text: "The Appalachian Trail taught you to walk. Now it is time to learn where you are going.", category: "adventure" },
  { text: "A hot air balloon does not argue with the wind. Rise above, and let direction find you.", category: "adventure" },
  { text: "The northern lights do not perform on demand. Patience reveals what urgency never will.", category: "adventure" },
  { text: "Drive to Alaska. Not because it is far, but because you have never been that version of yourself.", category: "adventure" },
  { text: "Stonehenge has waited thousands of years. It can wait for you a little longer. But can you?", category: "adventure" },
  { text: "Easter Island's statues face inland, not toward the sea. Sometimes looking back is looking forward.", category: "adventure" },
  { text: "Machu Picchu was hidden for centuries. The best things in your life are still waiting to be found.", category: "adventure" },
  { text: "Skydiving taught you that the ground is always there. The real question is how long you dare to fly.", category: "adventure" },
  { text: "A phantom town is proof that even places can have ghosts. Visit yours before you become one.", category: "adventure" },
  { text: "The Grand Canyon was carved by persistence, not force. Drip. Drip. Drip.", category: "adventure" },

  // Skill
  { text: "You learned to pick a lock. Now pick apart the things that keep you locked in place.", category: "skill" },
  { text: "A sewing machine only moves forward. Thread your life the same way.", category: "skill" },
  { text: "Learn sign language. Not every truth needs a voice to be heard.", category: "skill" },
  { text: "Body language speaks louder than words. Learn the dialect of your own posture.", category: "skill" },
  { text: "Woodworking is the art of removing what does not belong. So is becoming yourself.", category: "skill" },
  { text: "To surf is to negotiate with chaos. The wave does not care about your plans.", category: "skill" },
  { text: "Untying knots takes more skill than tying them. Complexity is easy. Simplicity is mastery.", category: "skill" },
  { text: "A Rubik's cube only has one solution but forty-three quintillion wrong answers. Start turning.", category: "skill" },
  { text: "Card counting is not about the cards. It is about knowing what has already been played.", category: "skill" },
  { text: "Ham radio operators talk to the void and sometimes the void talks back. Become licensed for no reason.", category: "skill" },

  // Experience
  { text: "Cristal tastes better when you remember the boxed wine. Never forget where you started.", category: "experience" },
  { text: "You once climbed a mountain to see the sunrise. Do you still wake up that early?", category: "experience" },
  { text: "A blacksmith shapes iron in fire. What fire are you still avoiding?", category: "experience" },
  { text: "The best meals are cooked slowly. So are the best versions of you.", category: "experience" },
  { text: "Every passport stamp tells a story. But what story are you writing between trips?", category: "experience" },
  { text: "Plant a tree. You will not sit in its shade. But someone you love might.", category: "experience" },
  { text: "Watch a sunset without your phone. Let your eyes be the only camera.", category: "experience" },
  { text: "Sleep under the stars at least once. The sky is the oldest movie ever made.", category: "experience" },
  { text: "Write a letter with a pen. The ink does not have a backspace key.", category: "experience" },
  { text: "Dance in the rain. Umbrellas are just walls you carry above your head.", category: "experience" },

  // Wisdom
  { text: "A river does not try to go around a rock. It goes over it, given enough time.", category: "wisdom" },
  { text: "Silence is not empty. It is full of answers.", category: "wisdom" },
  { text: "A mirror shows your face, not your character. Actions reveal the rest.", category: "wisdom" },
  { text: "The longest journey begins with a single question: Why not?", category: "wisdom" },
  { text: "Mistakes are not the opposite of success. They are the ingredients.", category: "wisdom" },
  { text: "Old keys do not open new doors. Change the lock, not the key.", category: "wisdom" },
  { text: "A candle loses nothing by lighting another. Neither do you.", category: "wisdom" },
  { text: "The moon does not compete with the sun. Find your own time to shine.", category: "wisdom" },
  { text: "Every expert was once a beginner. Every master was once a disaster.", category: "wisdom" },
  { text: "Your comfort zone is a beautiful place, but nothing grows there.", category: "wisdom" },

  // Chaos
  { text: "Flip a coin. Not to decide -- but to discover what you hoped for mid-air.", category: "chaos" },
  { text: "Say yes to the next thing that scares you. Fear is just excitement without breath.", category: "chaos" },
  { text: "Get lost on purpose. The best detours become the real destinations.", category: "chaos" },
  { text: "Break your routine today. The rut you are in was once a road you chose.", category: "chaos" },
  { text: "Send a message to someone you have not spoken to in years. Bridges do not burn themselves.", category: "chaos" },
  { text: "Order something you cannot pronounce. Adventure starts at the menu.", category: "chaos" },
  { text: "Wear something that does not match. Confidence is the best accessory.", category: "chaos" },
  { text: "Take a different route home. Same roads lead to same thoughts.", category: "chaos" },
  { text: "Start a conversation with a stranger. Everyone is a book you have not read yet.", category: "chaos" },
  { text: "Do something badly on purpose. Perfectionism is just fear in a nice outfit.", category: "chaos" },

  // Principle
  { text: "Integrity is what you do when nobody is watching. Are you watching yourself?", category: "principle" },
  { text: "Kindness is free, but it is not cheap. Spend it wisely.", category: "principle" },
  { text: "Listen twice as much as you speak. You have two ears and one mouth for a reason.", category: "principle" },
  { text: "Apologize first. Being right is less important than being connected.", category: "principle" },
  { text: "Show up. Half of life is just being present.", category: "principle" },
  { text: "Protect your peace like you protect your phone. It is more valuable.", category: "principle" },
  { text: "Be the person your dog thinks you are.", category: "principle" },
  { text: "Leave every place better than you found it. Including conversations.", category: "principle" },
  { text: "Gratitude is not a feeling. It is a practice. Practice daily.", category: "principle" },
  { text: "Your word is your bond. If you cannot keep it, do not give it.", category: "principle" },

  // Bonus wisdom
  { text: "The stars do not compete for your attention. Be like the stars.", category: "wisdom" },
  { text: "A ship in harbor is safe, but that is not what ships are built for.", category: "adventure" },
  { text: "Time you enjoy wasting is not wasted time.", category: "wisdom" },
  { text: "Not all who wander are lost. But some of them definitely are. Bring a map.", category: "chaos" },
  { text: "The best time to plant a tree was twenty years ago. The second best time is now.", category: "principle" },
  { text: "Life is either a daring adventure or nothing at all.", category: "adventure" },
  { text: "You miss one hundred percent of the shots you do not take.", category: "chaos" },
  { text: "The only way to do great work is to love what you do. If you have not found it, keep looking.", category: "wisdom" },
  { text: "In the middle of difficulty lies opportunity.", category: "wisdom" },
  { text: "The obstacle is the way.", category: "principle" },
  { text: "What we fear doing most is usually what we most need to do.", category: "chaos" },
  { text: "Fortune favors the bold. But it also respects the patient.", category: "wisdom" },
  { text: "The cave you fear to enter holds the treasure you seek.", category: "adventure" },
  { text: "Smooth seas do not make skillful sailors.", category: "experience" },
  { text: "You are not a drop in the ocean. You are the entire ocean in a drop.", category: "wisdom" },
];

export const secretFortune: Fortune = {
  text: "You found what was not meant to be found. The fog bends to your will. You are not a player in this game -- you are its author.",
  category: "wisdom",
};

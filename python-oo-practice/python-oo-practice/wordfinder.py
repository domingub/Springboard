"""Word Finder: finds random words from a dictionary."""


class WordFinder:
    ...
    def __init__(self, val):
        dictionary = open(val)
        self.words = self.parse(dictionary)
        print(f"{len(self.words)} words read")
    
    def parse (self, dictionary):
        return [w.strip() for w in dictionary]

    def random(self):
        return random.choice(self.words)

class SpecialWordFinder(WordFinder):
    def parse(self, dictionary):
        return [i.strip() for i in dictionary if i.strip() and not i.startswith("#")]
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

struct Entry {
  std::string name;
  int score;
};

int main() {
  std::vector<Entry> entries{{"alpha", 42}, {"beta", 17}, {"gamma", 64}};

  std::ranges::sort(entries, {}, &Entry::score);

  for (const auto& entry : entries) {
    std::cout << entry.name << " => " << entry.score << '\n';
  }

  return 0;
}

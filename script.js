let votes = {
  candidate1: 0,
  candidate2: 0
};

function vote(candidate) {
  votes[candidate]++;
  document.getElementById(candidate + '-result').textContent = votes[candidate];
}

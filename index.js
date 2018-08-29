function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks',
{ method: "POST", body: JSON.stringify(res),
  headers: { Authorization `token ${token}` } }).then(res=>document.getElementById("results").innerHTML= res)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

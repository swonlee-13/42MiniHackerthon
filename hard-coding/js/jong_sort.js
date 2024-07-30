// fetch(chrome.runtime.getURL('data/data.json'))
//   .then(response => response.json())
//   .then(projects => {
//     // Fuse 인스턴스 생성
//     const fuse = new Fuse(projects, {
//       keys: ['Project'],
//       threshold: 0.3
//     });

// // 이름으로 검색하는 함수
// function searchByName(query) {
//     const searchResults = fuse.search(query);
//     return searchResults.map(result => ({
//         name: result.item.Project,
//         url: `https://projects.intra.42.fr/projects/${result.item.uri_name}`
//     }));
// }

// // Circle로 필터링하는 함수
// function filterByCircle(circleNumber) {
//     const filteredProjects = projects.filter(project => project[`${circleNumber}Circle`] === 1);
//     return filteredProjects.map(project => ({
//         name: project.Project,
//         url: `https://projects.intra.42.fr/projects/${project.uri_name}`
//     }));
// }


// // 결과를 HTML로 렌더링하는 함수
// function renderResults(title, results) {
//     let html = `<h2>${title}</h2><ul>`;
//     results.forEach(item => {
//         html += `<li><a href="${item.url}" target="_blank">${item.name}</a></li>`;
//     });
//     html += '</ul>';
//     return html;
// }

// // 테스트 함수
// function runTests() {
//     const resultsDiv = document.getElementById('results');
//     const cppResults = searchByName('CPP');
//     const circle2Results = filterByCircle(2);

//     let html = renderResults('Search Results for "CPP"', cppResults);
//     html += renderResults('Filter Results for Circle 2', circle2Results);

//     resultsDiv.innerHTML = html;
// }

// JSON 데이터를 직접 포함시킵니다 (실제 데이터로 대체해야 합니다)
const projects = [
	{
	  "Project": "Libft",
	  "uri_name": "42cursus-libft",
	  "0Circle": 1,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "Born2beroot",
	  "uri_name": "born2beroot",
	  "0Circle": 0,
	  "1Circle": 1,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "get_next_line",
	  "uri_name": "42cursus-get-next-line",
	  "0Circle": 0,
	  "1Circle": 1,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "ft_printf",
	  "uri_name": "42cursus-ft_printf",
	  "0Circle": 0,
	  "1Circle": 1,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "FDF",
	  "uri_name": "42cursus-fdf",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 1,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "fract-ol",
	  "uri_name": "42cursus-fract-ol",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 1,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "minitalk",
	  "uri_name": "minitalk",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 1,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "pipex",
	  "uri_name": "pipex",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 1,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "push_swap",
	  "uri_name": "42cursus-push_swap",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 1,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "so_long",
	  "uri_name": "so_long",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 1,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "minishell",
	  "uri_name": "42cursus-minishell",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 1,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "Philosophers",
	  "uri_name": "42cursus-philosophers",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 1,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "CPP Module 00",
	  "uri_name": "cpp-module-00",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 1,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "CPP Module 01",
	  "uri_name": "cpp-module-01",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 1,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "CPP Module 02",
	  "uri_name": "cpp-module-02",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 1,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "CPP Module 03",
	  "uri_name": "cpp-module-03",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 1,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "CPP Module 04",
	  "uri_name": "cpp-module-04",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 1,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "miniRT",
	  "uri_name": "minirt",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 1,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "cub3d",
	  "uri_name": "cub3d",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 1,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "NetPractice",
	  "uri_name": "netpractice",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 1,
	  "5Circle": 0,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "CPP Module 05",
	  "uri_name": "cpp-module-05",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 1,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "CPP Module 06",
	  "uri_name": "cpp-module-06",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 1,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "CPP Module 07",
	  "uri_name": "cpp-module-07",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 1,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "CPP Module 08",
	  "uri_name": "cpp-module-08",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 1,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "CPP Module 09",
	  "uri_name": "cpp-module-09",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 1,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "Inception",
	  "uri_name": "inception",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 1,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "webserv",
	  "uri_name": "webserv",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 1,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "ft_irc",
	  "uri_name": "ft_irc",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 1,
	  "6Circle": 0,
	  "Score": -1
	},
	{
	  "Project": "ft_transcendence",
	  "uri_name": "ft_transcendence",
	  "0Circle": 0,
	  "1Circle": 0,
	  "2Circle": 0,
	  "3Circle": 0,
	  "4Circle": 0,
	  "5Circle": 0,
	  "6Circle": 1,
	  "Score": -1
	}
  ]
  
  // Fuse 인스턴스 생성
  const fuse = new Fuse(projects, {
	  keys: ['Project'],
	  threshold: 0.3
  });

// 이름으로 검색하는 함수
function searchByName(query) {
    const searchResults = fuse.search(query);
    return searchResults.map(result => ({
        name: result.item.Project,
        url: `https://projects.intra.42.fr/projects/${result.item.uri_name}`
    }));
}

// Circle로 필터링하는 함수
function filterByCircle(circleNumber) {
    const filteredProjects = projects.filter(project => project[`${circleNumber}Circle`] === 1);
    return filteredProjects.map(project => ({
        name: project.Project,
        url: `https://projects.intra.42.fr/projects/${project.uri_name}`
    }));
}

// 결과를 HTML로 렌더링하는 함수
function renderResults(title, results) {
    let html = `<h2>${title}</h2><ul>`;
    results.forEach(item => {
        html += `<li><a href="${item.url}" target="_blank">${item.name}</a></li>`;
    });
    html += '</ul>';
    return html;
}

// 테스트 함수
function runTests() {
    const resultsDiv = document.getElementById('results');
    const cppResults = searchByName('CPP');
    const circle2Results = filterByCircle(2);

    let html = renderResults('Search Results for "CPP"', cppResults);
    html += renderResults('Filter Results for Circle 2', circle2Results);

    resultsDiv.innerHTML = html;
}
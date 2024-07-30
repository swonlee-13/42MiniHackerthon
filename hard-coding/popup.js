document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {"Project": "Libft", "uri_name": "42cursus-libft", "Circle": 0},
        {"Project": "Born2beroot", "uri_name": "born2beroot", "Circle": 1},
        {"Project": "get_next_line", "uri_name": "42cursus-get_next_line", "Circle": 1},
        {"Project": "ft_printf", "uri_name": "42cursus-ft_printf", "Circle": 1},
        {"Project": "FdF", "uri_name": "42cursus-fdf", "Circle": 2},
        {"Project": "minitalk", "uri_name": "minitalk", "Circle": 2},
        {"Project": "pipex", "uri_name": "pipex", "Circle": 2},
        {"Project": "push_swap", "uri_name": "42cursus-push_swap", "Circle": 2},
        {"Project": "so_long", "uri_name": "so_long", "Circle": 2},
        {"Project": "minishell", "uri_name": "42cursus-minishell", "Circle": 3},
        {"Project": "Philosophers", "uri_name": "42cursus-philosophers", "Circle": 3},
        {"Project": "CPP Module 00", "uri_name": "cpp-module-00", "Circle": 4},
        {"Project": "CPP Module 01", "uri_name": "cpp-module-01", "Circle": 4},
        {"Project": "CPP Module 02", "uri_name": "cpp-module-02", "Circle": 4},
        {"Project": "CPP Module 03", "uri_name": "cpp-module-03", "Circle": 4},
        {"Project": "CPP Module 04", "uri_name": "cpp-module-04", "Circle": 4},
        {"Project": "miniRT", "uri_name": "minirt", "Circle": 4},
        {"Project": "cub3d", "uri_name": "cub3d", "Circle": 4},
        {"Project": "NetPractice", "uri_name": "netpractice", "Circle": 4},
        {"Project": "CPP Module 05", "uri_name": "cpp-module-05", "Circle": 5},
        {"Project": "CPP Module 06", "uri_name": "cpp-module-06", "Circle": 5},
        {"Project": "CPP Module 07", "uri_name": "cpp-module-07", "Circle": 5},
        {"Project": "CPP Module 08", "uri_name": "cpp-module-08", "Circle": 5},
        {"Project": "CPP Module 09", "uri_name": "cpp-module-09", "Circle": 5},
        {"Project": "Inception", "uri_name": "inception", "Circle": 5},
        {"Project": "webserv", "uri_name": "webserv", "Circle": 5},
        {"Project": "ft_irc", "uri_name": "ft_irc", "Circle": 5},
        {"Project": "ft_transcendence", "uri_name": "ft_transcendence", "Circle": 6},
    ];

    const searchBar = document.getElementById('search-bar');
    const resultsBody = document.getElementById('results-body');
    const buttons = document.querySelectorAll('.buttons-container .button');

    function getProjectPageURL(uri_name) {
        return `https://projects.intra.42.fr/projects/${uri_name}`;
    }

    function updateResults(circle) {
        resultsBody.innerHTML = '';

        const filteredProjects = projects.filter(project => project.Circle === circle);

        filteredProjects.forEach(project => {
            const row = document.createElement('tr');

            const projectCell = document.createElement('td');
            projectCell.textContent = project.Project;
            row.appendChild(projectCell);

            const pdfCell = document.createElement('td');
            const pdfLink = document.createElement('a');
            pdfLink.href = `https://cdn.intra.42.fr/pdf/pdf/${project.uri_name}.pdf`;
            pdfLink.textContent = 'PDF';
            pdfCell.appendChild(pdfLink);
            row.appendChild(pdfCell);

            const projectPageCell = document.createElement('td');
            const projectLink = document.createElement('a');
            projectLink.href = getProjectPageURL(project.uri_name);
            projectLink.textContent = getProjectPageURL(project.uri_name); // Show URL as link text
            projectLink.target = '_blank'; // Open in a new tab
            projectPageCell.appendChild(projectLink);
            row.appendChild(projectPageCell);

            resultsBody.appendChild(row);
        });
    }

    function filterResults(searchTerm) {
        Array.from(resultsBody.querySelectorAll('tr')).forEach(row => {
            const projectName = row.querySelector('td').textContent.toLowerCase();
            row.style.display = projectName.includes(searchTerm) ? '' : 'none';
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const circle = parseInt(button.dataset.project.replace('Circle', ''));
            updateResults(circle);
            searchBar.value = ''; // Clear search bar when filtering by circle
            filterResults(''); // Show all results when filtering by circle
        });
    });

    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        filterResults(searchTerm);
    });
});

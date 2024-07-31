document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {"Project": "Libft", "uri_name": "42cursus-libft", "Circle": 0, "Status": "incomplete", "Score": 0},
        {"Project": "Born2beroot", "uri_name": "born2beroot", "Circle": 1, "Status": "incomplete", "Score": 0},
        {"Project": "get_next_line", "uri_name": "42cursus-get_next_line", "Circle": 1, "Status": "incomplete", "Score": 0},
        {"Project": "ft_printf", "uri_name": "42cursus-ft_printf", "Circle": 1, "Status": "incomplete", "Score": 0},
        {"Project": "FdF", "uri_name": "42cursus-fdf", "Circle": 2, "Status": "incomplete", "Score": 0},
        {"Project": "minitalk", "uri_name": "minitalk", "Circle": 2, "Status": "incomplete", "Score": 0},
        {"Project": "pipex", "uri_name": "pipex", "Circle": 2, "Status": "incomplete", "Score": 0},
        {"Project": "push_swap", "uri_name": "42cursus-push_swap", "Circle": 2, "Status": "incomplete", "Score": 0},
        {"Project": "so_long", "uri_name": "so_long", "Circle": 2, "Status": "incomplete", "Score": 0},
        {"Project": "minishell", "uri_name": "42cursus-minishell", "Circle": 3, "Status": "incomplete", "Score": 0},
        {"Project": "Philosophers", "uri_name": "42cursus-philosophers", "Circle": 3, "Status": "incomplete", "Score": 0},
        {"Project": "CPP Module 00", "uri_name": "cpp-module-00", "Circle": 4, "Status": "incomplete", "Score": 0},
        {"Project": "CPP Module 01", "uri_name": "cpp-module-01", "Circle": 4, "Status": "incomplete", "Score": 0},
        {"Project": "CPP Module 02", "uri_name": "cpp-module-02", "Circle": 4, "Status": "incomplete", "Score": 0},
        {"Project": "CPP Module 03", "uri_name": "cpp-module-03", "Circle": 4, "Status": "incomplete", "Score": 0},
        {"Project": "CPP Module 04", "uri_name": "cpp-module-04", "Circle": 4, "Status": "incomplete", "Score": 0},
        {"Project": "miniRT", "uri_name": "minirt", "Circle": 4, "Status": "incomplete", "Score": 0},
        {"Project": "cub3d", "uri_name": "cub3d", "Circle": 4, "Status": "incomplete", "Score": 0},
        {"Project": "NetPractice", "uri_name": "netpractice", "Circle": 4, "Status": "incomplete", "Score": 0},
        {"Project": "CPP Module 05", "uri_name": "cpp-module-05", "Circle": 5, "Status": "incomplete", "Score": 0},
        {"Project": "CPP Module 06", "uri_name": "cpp-module-06", "Circle": 5, "Status": "incomplete", "Score": 0},
        {"Project": "CPP Module 07", "uri_name": "cpp-module-07", "Circle": 5, "Status": "incomplete", "Score": 0},
        {"Project": "CPP Module 08", "uri_name": "cpp-module-08", "Circle": 5, "Status": "incomplete", "Score": 0},
        {"Project": "CPP Module 09", "uri_name": "cpp-module-09", "Circle": 5, "Status": "incomplete", "Score": 0},
        {"Project": "Inception", "uri_name": "inception", "Circle": 5, "Status": "incomplete", "Score": 0},
        {"Project": "webserv", "uri_name": "webserv", "Circle": 5, "Status": "incomplete", "Score": 0},
        {"Project": "ft_irc", "uri_name": "ft_irc", "Circle": 5, "Status": "incomplete", "Score": 0},
        {"Project": "ft_transcendence", "uri_name": "ft_transcendence", "Circle": 6, "Status": "incomplete", "Score": 0},
    ];

    const searchBar = document.getElementById('search-bar');
    const resultsBody = document.getElementById('results-body');
    const buttons = document.querySelectorAll('.buttons-container .button');

    let activeCircle = null;

    function getProjectPageURL(uri_name) {
        return `https://projects.intra.42.fr/projects/${uri_name}`;
    }

    function updateResults(filteredProjects) {
        resultsBody.innerHTML = '';

        filteredProjects.forEach(project => {
            const row = document.createElement('tr');

            // Status Cell
            const statusCell = document.createElement('td');
            const statusEmoji = document.createElement('span');
            statusEmoji.className = 'status-emoji';
            const savedStatus = localStorage.getItem(project.uri_name) || project.Status;
            project.Status = savedStatus;
            statusEmoji.textContent = getStatusEmoji(savedStatus);
            statusEmoji.addEventListener('click', () => {
                project.Status = getNextStatus(project.Status);
                statusEmoji.textContent = getStatusEmoji(project.Status);
                localStorage.setItem(project.uri_name, project.Status);
            });
            statusCell.appendChild(statusEmoji);
            row.appendChild(statusCell);

            // Project Name Cell
            const projectCell = document.createElement('td');
            projectCell.textContent = project.Project;
            row.appendChild(projectCell);

            // Score Cell
            const scoreCell = document.createElement('td');
            scoreCell.textContent = project.Score !== null ? project.Score : 'N/A'; // Display score or 'N/A'
            row.appendChild(scoreCell);

            // PDF Cell
            const pdfCell = document.createElement('td');
            const pdfLink = document.createElement('a');
            pdfLink.href = `https://cdn.intra.42.fr/pdf/pdf/${project.uri_name}.pdf`;
            pdfLink.textContent = 'PDF';
            pdfLink.target = '_blank'; // Open in a new tab
            pdfCell.appendChild(pdfLink);
            row.appendChild(pdfCell);

            // Project Page Cell
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
        const filteredProjects = projects.filter(project => 
            project.Project.toLowerCase().includes(searchTerm)
        );
        updateResults(filteredProjects);
    }

    function getStatusEmoji(status) {
        switch (status) {
            case 'incomplete':
                return '🔴'; // Red Circle
            case 'ongoing':
                return '🟡'; // Yellow Circle
            case 'done':
                return '🟢'; // Green Circle
            case 'undefined':
                return '⚪'; // White Circle
            default:
                return '⚪'; // White Circle
        }
    }

    function getNextStatus(currentStatus) {
        switch (currentStatus) {
            case 'undefined':
                return 'incomplete';
            case 'incomplete':
                return 'ongoing';
            case 'ongoing':
                return 'done';
            case 'done':
                return 'undefined';
            default:
                return 'incomplete';
        }
    }

    function setActiveButton(button) {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const circle = parseInt(button.dataset.project.replace('Circle', ''));
            activeCircle = circle;
            const filteredProjects = projects.filter(project => project.Circle === circle);
            updateResults(filteredProjects);
            setActiveButton(button);
            searchBar.value = ''; // Clear search bar when filtering by circle
        });
    });

    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        filterResults(searchTerm);
        setActiveButton(null); // Clear active button highlight when searching
    });

    // Load all projects initially
    updateResults(projects);

    // Fetch experiences from local storage and update projects
    chrome.storage.local.get(['experiences'], (result) => {
        const experiences = result.experiences || [];

        experiences.forEach(exp => {
            const project = projects.find(p => p.Project.trim() === exp.reason.trim());
            if (project) {
                const score = extractScore(exp.content);
                project.Score = score;
                project.Status = 'done'; // Set status to 'done'
            }
        });

        // Update the UI with the new scores and statuses
        updateResults(projects);
    });

    function extractScore(content) {
        const match = content.match(/Final Mark: (\d+)/);
        return match ? parseInt(match[1], 10) : 0;
    }
});

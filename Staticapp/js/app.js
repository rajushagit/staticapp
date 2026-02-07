function loadPage(page) {
    const content = document.getElementById("content");

    if (page === "home") {
        content.innerHTML = `
            <h1>Home</h1>
            <p>This is the home page.</p>
        `;
    } else if (page === "about") {
        content.innerHTML = `
            <h1>About</h1>
            <p>This is a simple HTML, CSS & JS app hosted using Nginx.</p>
        `;
    } else if (page === "services") {
        content.innerHTML = `
            <h1>Services</h1>
            <ul>
                <li>AWS EC2 Hosting</li>
                <li>Nginx Configuration</li>
                <li>Web Deployment</li>
            </ul>
        `;
    } else if (page === "contact") {
        content.innerHTML = `
            <h1>Contact</h1>
            <p>Email: admin@example.com</p>
        `;
    }
}

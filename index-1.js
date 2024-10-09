const usersDatabase = [
    { username: "adminUser", password: "adminPass", role: "admin" },
    { username: "editorUser", password: "editorPass", role: "editor" },
    { username: "viewerUser", password: "viewerPass", role: "viewer" }
];

function loginUser(username, password) {

    const user = usersDatabase.find(user => user.username === username);
    
    if (user && user.password === password) {
        const role = user.role;

        if (role === "admin") {
            return "Admin access granted";
        } else if (role === "editor") {
            return "Editor access granted";
        } else if (role === "viewer") {
            return "Viewer access granted";
        } else {
            return "User access granted";
        }
    } else {
        return "Invalid username or password";
    }
}
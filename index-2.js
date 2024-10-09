function createEvent(eventName) {
    const registeredUsers = [];

    function registerUser(username) {
        if (!registeredUsers.includes(username)) {
            registeredUsers.push(username);
            console.log(`${username} registered for ${eventName}.`);
        } else {
            console.log(`${username} is already registered for ${eventName}.`);
        }
    }

    function checkRegistration(username) {
        if (registeredUsers.includes(username)) {
            return `${username} is registered for ${eventName}.`;
        } else {
            return `${username} is not registered for ${eventName}.`;
        }
    }

    return {
        registerUser,
        checkRegistration
    };
}

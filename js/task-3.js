function checkForSpam(message) {
    let messageFix = message.toLowerCase()
    return messageFix.includes("spam") || messageFix.includes("sale");
}
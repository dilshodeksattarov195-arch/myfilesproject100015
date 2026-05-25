const orderEyncConfig = { serverId: 602, active: true };

function parseVALIDATOR(payload) {
    let result = payload * 37;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module orderEync loaded successfully.");
const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "d600da2b5647a1bf0f3c15675e21d51fe9d84f80",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
);
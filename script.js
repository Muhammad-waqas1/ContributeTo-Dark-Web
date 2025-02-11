document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const accessBtn = document.getElementById("access-btn");
    const errorMsg = document.getElementById("error-msg");
    
    let attempts = 0;
    const secretPassword = "redroom";  // Change this to anything you want!

    accessBtn.addEventListener("click", function () {
        if (passwordInput.value === secretPassword) {
            window.location.href = "home.html";  // Next page (we’ll build later)
        } else {
            attempts++;
            errorMsg.innerText = "Access Denied. Attempt " + attempts + " of 3.";
            errorMsg.style.display = "block";

            if (attempts >= 3) {
                errorMsg.innerText = "Warning: Your IP has been logged!";
                document.body.style.backgroundColor = "red";  // Scare effect
                setTimeout(() => {
                    document.body.style.backgroundColor = "black";
                    errorMsg.style.display = "none";
                    attempts = 0;  // Reset attempts after a fake scare
                }, 3000);
            }
        }
    });
});



// home page 




document.addEventListener("DOMContentLoaded", function () {
    // Generate Fake Last Login
    const lastLogin = document.getElementById("last-login");
    const randomDaysAgo = Math.floor(Math.random() * 10) + 1;
    lastLogin.innerText = randomDaysAgo + " days ago";

    // Mystery Link Behavior
    const mysteryLink = document.getElementById("mystery-link");
    mysteryLink.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Access Denied: Level 5 Clearance Required.");
        setTimeout(() => {
            window.location.href = "index.html";  // Sends user back to login
        }, 3000);
    });
});





// market page 




document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-btn");
    const scamMessage = document.getElementById("scam-message");
    const secretLink = document.getElementById("secret-link");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const item = button.dataset.item;
            scamMessage.innerText = "Transaction Processing...";
            scamMessage.style.display = "block";

            setTimeout(() => {
                scamMessage.innerText = "Error: Payment Rejected. You've been scammed!";
                document.body.style.backgroundColor = "red";

                setTimeout(() => {
                    document.body.style.backgroundColor = "black";
                    scamMessage.style.display = "none";
                }, 3000);
            }, 2000);
        });
    });

    // Secret Vendor Link
    secretLink.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Accessing secret vendor...");
        setTimeout(() => {
            window.location.href = "secrets.html";  // Leads to a hidden page
        }, 2000);
    });
});




// secrets page 




document.addEventListener("DOMContentLoaded", function () {
    const decryptButtons = document.querySelectorAll(".decrypt-btn");
    const decryptionMessage = document.getElementById("decryption-message");

    decryptButtons.forEach(button => {
        button.addEventListener("click", function () {
            const file = button.dataset.file;
            decryptionMessage.innerText = "Decrypting...";
            decryptionMessage.style.display = "block";

            setTimeout(() => {
                if (file === "omega") {
                    decryptionMessage.innerText = "🚨 WARNING: Project Omega contains restricted data. Viewing this file is illegal.";
                } else if (file === "coverup") {
                    decryptionMessage.innerText = "📜 Decrypted: Evidence suggests multiple cover-ups. Data redacted.";
                } else if (file === "truth") {
                    decryptionMessage.innerText = "⚠️ The truth is too dangerous to be revealed here.";
                }

                setTimeout(() => {
                    decryptionMessage.style.display = "none";
                }, 5000);
            }, 3000);
        });
    });

    // Add Jumpscare Effect After 20 Seconds
    setTimeout(() => {
        alert("⚠️ WARNING: Unauthorized access detected!");
        document.body.style.backgroundImage = "url('https://i.imgur.com/zrttD77.png')";
        document.body.style.backgroundSize = "cover";
        setTimeout(() => {
            document.body.style.backgroundImage = "none";
        }, 3000);
    }, 20000);
});





// Chatroom page 



document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const sendMessageBtn = document.getElementById("send-message");
    const userMessageInput = document.getElementById("user-message");

    const hackerMessages = [
        "[Anon_1337]: Anyone cracked the new Bitcoin encryption yet?",
        "[GhostNet]: Selling leaked government passwords. PM me.",
        "[DarkShadow]: Just hacked a bank, got 2M. Who wants in?",
        "[Xen0]: Exploit found in Windows. Patch coming soon.",
        "[RootMaster]: Anyone got fresh credit card dumps?",
        "[DeepWeb]: I have access to NSA servers. Want proof?"
    ];

    let messageIndex = 0;

    function addHackerMessage() {
        if (messageIndex < hackerMessages.length) {
            const p = document.createElement("p");
            p.innerText = hackerMessages[messageIndex];
            chatMessages.appendChild(p);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            messageIndex++;
            setTimeout(addHackerMessage, Math.random() * 5000 + 2000);
        }
    }

    addHackerMessage();  // Start injecting hacker messages

    sendMessageBtn.addEventListener("click", function () {
        const userMessage = userMessageInput.value;
        if (userMessage.trim() !== "") {
            const p = document.createElement("p");
            p.innerText = `[YOU]: ${userMessage}`;
            chatMessages.appendChild(p);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            userMessageInput.value = "";

            setTimeout(() => {
                const ignoreMessage = document.createElement("p");
                ignoreMessage.innerText = "[System]: Your message has been ignored.";
                chatMessages.appendChild(ignoreMessage);
            }, 1000);
        }
    });

    // FBI WARNING AFTER 30 SECONDS
    setTimeout(() => {
        alert("⚠️ FBI WARNING: This chatroom is under surveillance. Exit immediately.");
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "black";
        }, 3000);
    }, 30000);
});




// Hitman Page  


document.addEventListener("DOMContentLoaded", function () {
    const hireButtons = document.querySelectorAll(".hire-btn");
    const paymentMessage = document.getElementById("payment-message");

    hireButtons.forEach(button => {
        button.addEventListener("click", function () {
            const hitman = button.dataset.hitman;
            paymentMessage.innerText = "Processing payment...";
            paymentMessage.style.display = "block";

            setTimeout(() => {
                paymentMessage.innerText = "✅ Payment received. Hitman assigned.";

                setTimeout(() => {
                    alert("🚨 FBI WARNING: Your transaction has been tracked. You are under surveillance.");
                    document.body.style.backgroundColor = "red";
                    paymentMessage.innerText = "⚠️ WARNING: YOUR IP HAS BEEN LOGGED!";
                    
                    setTimeout(() => {
                        document.body.style.backgroundColor = "black";
                    }, 3000);
                }, 4000);
            }, 3000);
        });
    });
});



// RedRoom Page 

document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    const chatMessages = document.getElementById("chat-messages");
    const userChatInput = document.getElementById("user-chat");
    const sendChatBtn = document.getElementById("send-chat");
    const finalWarning = document.getElementById("final-warning");

    let countdown = 30;

    function updateTimer() {
        countdown--;
        timerElement.innerText = countdown;
        if (countdown > 0) {
            setTimeout(updateTimer, 1000);
        } else {
            finalWarning.innerText = "⚠️ ERROR: Stream Disconnected. YOU HAVE BEEN MARKED.";
            finalWarning.style.display = "block";
            document.body.style.backgroundColor = "red";
            setTimeout(() => {
                document.body.style.backgroundColor = "black";
            }, 3000);
        }
    }

    updateTimer();  // Start countdown

    sendChatBtn.addEventListener("click", function () {
        const userMessage = userChatInput.value;
        if (userMessage.trim() !== "") {
            const p = document.createElement("p");
            p.innerText = `[YOU]: ${userMessage}`;
            chatMessages.appendChild(p);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            userChatInput.value = "";

            setTimeout(() => {
                const response = document.createElement("p");
                response.innerText = `[Unknown]: STOP TALKING. THEY ARE WATCHING.`;
                response.style.color = "red";
                chatMessages.appendChild(response);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 2000);
        }
    });

    setTimeout(() => {
        alert("🚨 FBI WARNING: This website has been traced. Close this now.");
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "black";
        }, 3000);
    }, 45000);
});



// Finaltest Page 



document.addEventListener("DOMContentLoaded", function () {
    const scanText = document.getElementById("scan-text");
    const answerInput = document.getElementById("answer");
    const submitButton = document.getElementById("submit-answer");
    const resultMessage = document.getElementById("result-message");

    let scanSteps = [
        "Scanning IP Address...",
        "Tracing location...",
        "Decrypting user identity...",
        "Verifying deep web access...",
        "✅ ACCESS GRANTED. Proceed."
    ];

    let scanIndex = 0;

    function startScan() {
        if (scanIndex < scanSteps.length) {
            scanText.innerText = scanSteps[scanIndex];
            scanIndex++;
            setTimeout(startScan, 2000);
        }
    }

    startScan();  // Start fake scan

    submitButton.addEventListener("click", function () {
        const answer = answerInput.value.toLowerCase().trim();
        
        if (answer === "tor" || answer === "onion") {
            resultMessage.innerText = "🔓 Correct. Welcome to the inner circle.";
            resultMessage.style.display = "block";
            resultMessage.style.color = "lime";
        } else {
            resultMessage.innerText = "❌ WRONG ANSWER. YOU HAVE BEEN MARKED.";
            resultMessage.style.display = "block";
            resultMessage.style.color = "red";
            document.body.style.backgroundColor = "red";

            setTimeout(() => {
                alert("🚨 FBI WARNING: Your location has been logged.");
                document.body.style.backgroundColor = "black";
            }, 3000);
        }
    });
});


// secretsociety Page 


document.addEventListener("DOMContentLoaded", function () {
    const decryptButton = document.getElementById("decrypt-button");
    const decryptedText = document.getElementById("decrypted-text");

    // Hidden console clue
    console.log("%cYou are close. But only those who seek will find.", "color: cyan; font-size: 14px; font-weight: bold;");
    console.log("%cHint: Check the source code. The answer is within.", "color: red; font-size: 14px; font-weight: bold;");
    
    decryptButton.addEventListener("click", function () {
        decryptedText.innerText = "You have been selected. Await further instructions.";
        decryptedText.style.display = "block";
    });
});


// Email Page 



document.addEventListener("DOMContentLoaded", function () {
    const decryptEmailButton = document.getElementById("decrypt-email");
    const decryptInput = document.getElementById("decrypt-input");
    const decryptionResult = document.getElementById("decryption-result");

    decryptEmailButton.addEventListener("click", function () {
        const inputText = decryptInput.value.trim();
        
        // Correct answer after decoding Base64
        const correctAnswer = "What is the last key?";

        if (inputText.toLowerCase() === correctAnswer.toLowerCase()) {
            decryptionResult.innerText = "🔑 Correct. The final key is at /finalkey.html";
            decryptionResult.style.display = "block";
            decryptionResult.style.color = "lime";
        } else {
            decryptionResult.innerText = "❌ Decryption failed. Try again.";
            decryptionResult.style.display = "block";
            decryptionResult.style.color = "red";
        }
    });
});

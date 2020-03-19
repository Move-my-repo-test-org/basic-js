class VigenereCipheringMachine {
    constructor(modification) {
        this.modification = modification;
    }

    encrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        
        let result = [];
        let num;
        let j = 0;

        for (let i = 0; i < message.length; i++) {
            if (message.codePointAt(i) < 65 || message.codePointAt(i) > 90) {
                result.push(message[i]);
            } else {
                if (j < key.length) {
                    num = (message.codePointAt(i) + key.codePointAt(j)) % 26 + 65;
                    result.push(String.fromCodePoint(num));
                    j++;
                } else {
                    num = (message.codePointAt(i) + key.codePointAt(j-key.length*(Math.floor(j / key.length)))) % 26 + 65;
                    result.push(String.fromCodePoint(num));
                    j++;
                } 
            }
        }

        if (this.modification === false) {
            return result.reverse().join('');
        } else {
            return result.join('');
        }
    }

    decrypt(encryptedMessage, key) {
        key = key.toUpperCase();

        let result = [];
        let num;
        let j = 0;

        for (let i = 0; i < encryptedMessage.length; i++) {
            if (encryptedMessage.codePointAt(i) < 65 || encryptedMessage.codePointAt(i) > 90) {
                result.push(encryptedMessage[i]);
            } else {
                if (j < key.length) {
                    num = (encryptedMessage.codePointAt(i) + 26 - key.codePointAt(j)) % 26 + 65;
                    result.push(String.fromCodePoint(num));
                    j++;
                } else {
                    num = (encryptedMessage.codePointAt(i) +26 - key.codePointAt(j-key.length*(Math.floor(j / key.length)))) % 26 + 65;
                    result.push(String.fromCodePoint(num));
                    j++;
                } 
            }
            
        }

        if (this.modification === false) {
            return result.reverse().join('');
        } else {
            return result.join('');
        }
    }
}

module.exports = VigenereCipheringMachine;

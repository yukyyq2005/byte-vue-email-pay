

// const CryptoJS = require('crypto-js');
import CryptoJS from 'crypto-js';


const keyString = "g+%07ea,";
const ivString = "+1876!^a";

export function desDecrypt(data) {
    const decrypted = desDecrypt2(data);
    return JSON.parse(decrypted)
}

export function desEncrypt(plainText) {
    const key = CryptoJS.enc.Utf8.parse(keyString);
    const iv = CryptoJS.enc.Utf8.parse(ivString);
    const encrypted = CryptoJS.DES.encrypt(plainText, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
}

// DES 解密函数
function desDecrypt2(encryptedText) {
    const key = CryptoJS.enc.Utf8.parse(keyString);
    const iv = CryptoJS.enc.Utf8.parse(ivString);
    const decrypted = CryptoJS.DES.decrypt(encryptedText, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
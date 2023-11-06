import crypto from 'node:crypto';

export class EncryptionService {
  private static ALGORITHM = 'aes256';
  private readonly key: Buffer;
  constructor(env: string) {
    const passphrase = process.env[env] as string; 
    console.log(process.env[env]);
    this.key = Buffer.from(passphrase, 'hex');
  }

  encrypt(plainText: string): string {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(
      EncryptionService.ALGORITHM,
      this.key,
      iv,
    );
    const encrypted = cipher.update(plainText, 'utf8', 'hex');
    return [
      encrypted + cipher.final('hex'),
      Buffer.from(iv).toString('hex'),
    ].join('|');
  }

  decrypt(encryptedText: string): string {
    const [encrypted, iv] = encryptedText.split('|');
    if (!iv) throw new Error('IV not found');
    const decipher = crypto.createDecipheriv(
      EncryptionService.ALGORITHM,
      this.key,
      Buffer.from(iv, 'hex'),
    );
    return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
  }
}

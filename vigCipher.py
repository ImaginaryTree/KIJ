def xor_cipher(text, key):
    return ''.join(chr(ord(t) ^ ord(k)) for t, k in zip(text, generate_key_stream(text, key)))

def generate_key_stream(text, key):
    key_length = len(key)
    return ''.join(key[i % key_length] for i in range(len(text)))

# Contoh penggunaan
plaintext = input('masukan text : ')
key = input('masukan key : ')

encrypted_text = xor_cipher(plaintext, key)
decrypted_text = xor_cipher(encrypted_text, key)

print("Plaintext: ", plaintext)
print("Key: ", key)
print("Encrypted Text: ", str(encrypted_text))
print("Decrypted Text: ", decrypted_text)

const prompt = require('prompt-sync')();

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Enigma Configuration
const rotorOrder = [2, 1, 0]; // Order of rotors
const rotorPositions = [0, 0, 0]; // Initial positions of rotors

const plugboard = 'RBCDEFKHIJGLMNXPQASTUVWOYZ'


const reflector = 'EJMZALYXVBWFCRQUONTSPIKHGD'

const rotorWiring = [
  'BDFHJLCPRTXVZNYEIWGAKMUSQO',
  'AJDKSIRUXBLHWTMCQGZNPYFVOE',
  'EKMFLGDQVZNTOWYHXUSPAIBRCJ'
]; 

/**
 * ------------------------------------------------------------------------
 * !Enigma Configuration 
 */


function rotorSubstitution(idx, alphabet, rotorPosition, wiringOutput){
    const shiftedRotor = alphabet.slice(rotorPosition) + alphabet.slice(0, rotorPosition);
    let word = wiringOutput[idx]
    // console.log(`in index ${idx} got word ${word} and got index ${shiftedRotor.indexOf(word)} from alphabet`)
    return shiftedRotor.indexOf(word)
}

function reflectorSubstitution(idx, alphabet, wiringOutput){
    let word = wiringOutput[idx]
    // console.log(`\nin index ${idx} got word ${word} and got index ${alphabet.indexOf(word)} from alphabet`)
    // console.log(`reflector effect got word ${wiringOutput[alphabet.indexOf(word)]} from wiring Output\n`)
    return alphabet.indexOf(word)
}

function revRotorSubstitution(idx, alphabet, rotorPosition, wiringOutput){
    const shiftedRotor = alphabet.slice(rotorPosition) + alphabet.slice(0, rotorPosition);
    let word = shiftedRotor[idx]
    // console.log(`in index ${idx} got word ${word} and got index ${wiringOutput.indexOf(word)} from wiring Output`)
    return wiringOutput.indexOf(word)
}

function plugboardSubtitution(word, plugboardWiring){
  return plugboardWiring.indexOf(word)
}

function Outputplugboard(idx, plugboardWiring){
  return plugboardWiring[idx]
}

function Rotors(word, rotorPosition) {
    let alphabet = ALPHABET
    let wiring =  rotorWiring
    let plugboardWiring = plugboard
    let reflectorWiring = reflector
    let idx = 0

    idx = plugboardSubtitution(word, plugboardWiring)
    // console.log(`word ${word} become ${plugboardWiring[idx]} witd index of ${idx}`)
    idx = rotorSubstitution(idx, alphabet, rotorPosition[0], wiring[0])
    idx = rotorSubstitution(idx, alphabet, rotorPosition[1], wiring[1])
    idx = rotorSubstitution(idx, alphabet, rotorPosition[2], wiring[2])
    
    idx = reflectorSubstitution(idx, alphabet, reflectorWiring)

    //reverse encryption
    idx = revRotorSubstitution(idx, alphabet, rotorPosition[2], wiring[2])
    idx = revRotorSubstitution(idx, alphabet, rotorPosition[1], wiring[1])
    idx = revRotorSubstitution(idx, alphabet, rotorPosition[0], wiring[0])
    
    word = Outputplugboard(idx, plugboardWiring)
    return word
}

function enigmadecrypt(config,message){
    message = message.toUpperCase()
    let result = ""
    let rotate = 0
    for(let i of message){
        result += Rotors(i,config)
        rotate++
        if(rotate >= message.length){
          break
        }else{
          if(config[0] >= 25){
            if(config[1] >= 25){
              config[2]++
            }else{
              config[1]++
            }
          }
          config[0]++
        }
    }
    return result
}
/**
 * 
 * !Main  
 */

function main(){
    let word = prompt('Enter a Sentence: ');
    let encrypt = enigmadecrypt([2,3,1], word)
    console.log(`\n\n"${word}" has been encrypted message to "${encrypt}"`)
    let decrypted = enigmadecrypt([2,3,1],encrypt)
    console.log(`"${encrypt}" has been decrypted message to "${decrypted}"\n\n`)

}
main()
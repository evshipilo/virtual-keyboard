
class Keyboard {
  constructor(eventCode, rusChar, rusCharShift, engChar, engCharShift) {
    this.eventCode = eventCode;
    this.rusChar = rusChar;
    this.rusCharShift = rusCharShift;
    this.engChar = engChar;
    this.engCharShift = engCharShift;
  }

  static insertTextareaAndKeyboardDivToDOM() {
    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', `<textarea name="text" id="text">
</textarea><div class="keyboard"><div class="keyboard__keys"></div></div>`);
  }

  addWideClass() {
    if (this.eventCode === 'Backspace'
        || this.eventCode === 'Tab'
        || this.eventCode === 'CapsLock'
        || this.eventCode === 'ShiftLeft'
        || this.eventCode === 'ShiftRight'
        || this.eventCode === 'Enter') return 'keyboard__key--wide';
  }

  addExtraWideClass() {
    if (this.eventCode === 'Space') return 'keyboard__key--extra-wide';
  }

  addEndOfRow() {
    if (this.eventCode === 'Backspace'
      || this.eventCode === 'Backslash'
      || this.eventCode === 'Enter'
      || this.eventCode === 'ArrowUp') return '<br>';
  }

  insertKeyToDOM() {
    const KeyboardDiv = document.querySelector('keyboard__keys');
    KeyboardDiv.insertAdjacentHTML('afterbegin', `
    <button id="${this.eventCode}" class="keyboard__key ${this.addWideClass()} 
    ${this.addExtraWideClass()}">${this.engChar}</button>${this.addEndOfRow()}`);
  }
}

Keyboard.insertTextareaAndKeyboardDivToDOM();

const keysValuesArr = [
  {
    eventCode: 'Backquote',
    rusChar: 'ё',
    rusCharShift: 'Ё',
    engChar: '`',
    engCharShift: '~',
  },
  {
    eventCode: '',
    rusChar: '1',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '2',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '3',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '4',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '5',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '6',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '7',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '8',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '9',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '0',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '-',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '=',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'Backspace',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'Tab',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'й',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'ц',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'у',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'к',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'е',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'н',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'г',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'ш',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'щ',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'з',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'х',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'ъ',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '\\',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'CapsLock',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'ф',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'ы',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'в',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'а',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'п',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'р',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'о',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'л',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'д',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'ж',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'э',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: 'Enter',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },
  {
    eventCode: '',
    rusChar: '',
    rusCharShift: '',
    engChar: '',
    engCharShift: '',
  },

];

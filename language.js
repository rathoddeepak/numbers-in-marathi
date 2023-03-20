const englishLanguage = 'english';
const marathiLanguage = 'marathi';

var iWords = [' zero', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
var ePlace = [' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
var tensPlace = ['', ' ten', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];

function tensComplication(inWords, actnumber, i, j) {
    if (actnumber[i] == 0) {
        inWords[j] = '';
    } else if (actnumber[i] == 1) {
        inWords[j] = ePlace[actnumber[i - 1]];
    } else {
        inWords[j] = tensPlace[actnumber[i]];
    }
}

function convertAmount(numericValue) {
    var numericValue = numericValue.replace(/[,]/g, '');
    numericValue = parseFloat(numericValue).toFixed(2);
    var amount = numericValue.toString().split('.');
    var taka = amount[0];
    var paisa = amount[1];
    return convert(taka) + " Rupees and" + convert(paisa) + " paisa only";
}

function convert(numericValue) {
    let inWords = []
    if (numericValue == "00" || numericValue == "0") {
        return ' zero';
    }
    var obStr = numericValue.toString();
    let numReversed = obStr.split('');
    let actnumber = numReversed.reverse();

    if (Number(numericValue) == 0) {
        return false;
    }

    var iWordsLength = numReversed.length;
    var finalWord = '';
    var i, j;
    j = 0;
    for (i = 0; i < iWordsLength; i++) {
        switch (i) {
            case 0:
                if (actnumber[i] == '0' || actnumber[i + 1] == '1') {
                    inWords[j] = '';
                } else {
                    inWords[j] = iWords[actnumber[i]];
                }
                inWords[j] = inWords[j] + '';
                break;
            case 1:
                tensComplication(inWords, actnumber, i, j);
                break;
            case 2:
                if (actnumber[i] == '0') {
                    inWords[j] = '';
                } else if (actnumber[i - 1] !== '0' && actnumber[i - 2] !== '0') {
                    inWords[j] = iWords[actnumber[i]] + ' hundred';
                } else {
                    inWords[j] = iWords[actnumber[i]] + ' hundred';
                }
                break;
            case 3:
                if (actnumber[i] == '0' || actnumber[i + 1] == '1') {
                    inWords[j] = '';
                } else {
                    inWords[j] = iWords[actnumber[i]];
                }
                if (actnumber[i + 1] !== '0' || actnumber[i] > '0') {
                    inWords[j] = inWords[j] + ' thousand';
                }
                break;
            case 4:
                tensComplication(inWords, actnumber, i, j);
                break;
            case 5:
                if (actnumber[i] == '0' || actnumber[i + 1] == '1') {
                    inWords[j] = '';
                } else {
                    inWords[j] = iWords[actnumber[i]];
                }
                if (actnumber[i + 1] !== '0' || actnumber[i] > '0') {
                    inWords[j] = inWords[j] + ' lakh';
                }
                break;
            case 6:
                tensComplication(inWords, actnumber, i, j);
                break;
            case 7:
                if (actnumber[i] == '0' || actnumber[i + 1] == '1') {
                    inWords[j] = '';
                } else {
                    inWords[j] = iWords[actnumber[i]];
                }
                inWords[j] = inWords[j] + ' crore';
                break;
            case 8:
                tensComplication(inWords, actnumber, i, j);
                break;
            default:
                break;
        }
        j++;
    }


    inWords.reverse();
    for (i = 0; i < inWords.length; i++) {
        finalWord += inWords[i];
    }
    return finalWord;
}

function convertToMarathi(finalWords) {
    var str, str1, str2, str3, q, q1, p, st;
    var result = '';
    var ws = new Array();
    var ws1 = '';
    var result2 = '';
    finalWords = finalWords.trim();
    var res1 = finalWords.match(" Rupees and zero");
    if (res1 == " Rupees and zero") {
        var completestring = finalWords.replace('Rupees and zero paisa only', '');
        /* Function for text transform capitalize */
        var pieces = completestring.split(" ");
        for (var i = 0; i < pieces.length; i++) {
            var j = pieces[i].charAt(0).toUpperCase();
            pieces[i] = j + pieces[i].substr(1);
        }
        var string = pieces.join(" ");
        return string;
    }    
    var words = finalWords.split(" ");
    var histr = new Array();
    var j = 0;

    for (var i = 0; i < words.length; i++) {
        str = words[i];
        str1 = words[i + 1];


        if (str === 'Point') {
            histr[j] = ' दशांश';
        }

        if (str === ',') {
            histr[j] = ' ';
        }
        if (str === '') {
            histr[j] = ' ';
        }
        if (str === 'hundred') {
            histr[j] = ' शंभर';
        }
        if (str === 'thousand') {
            histr[j] = ' हजार';
        }
        if (str === 'lakh') {
            histr[j] = ' लाख';
        }
        if (str === 'crore') {
            histr[j] = ' कोटी';
        }
        if (str === 'zero') {
            histr[j] = '  शून्य';
        }
        /* if for one to ten*/
        if (str === 'one') {
            histr[j] = ' एक';
        }
        if (str === 'two') {
            histr[j] = ' दोन';
        }
        if (str === 'three') {
            histr[j] = ' तीन';
        }
        if (str === 'four') {
            histr[j] = ' चार';
        }
        if (str === 'five') {
            histr[j] = ' पाच';
        }
        if (str === 'six') {
            histr[j] = ' सहा';
        }
        if (str === 'seven') {
            histr[j] = ' सात';
        }
        if (str === 'eight') {
            histr[j] = ' आठ';
        }
        if (str === 'nine') {
            histr[j] = ' नऊ';
        }
        if (str === 'ten') {
            histr[j] = ' दहा';
        }
        if (str === 'eleven') {
            histr[j] = ' अकरा';
        }
        if (str === 'twelve') {
            histr[j] = ' बारा';
        }
        if (str === 'thirteen') {
            histr[j] = ' तेरा';
        }
        if (str === 'fourteen') {
            histr[j] = ' चौदा';
        }
        if (str === 'fifteen') {
            histr[j] = ' पंधरा';
        }
        if (str === 'sixteen') {
            histr[j] = ' सोळा';
        }
        if (str === 'seventeen') {
            histr[j] = ' सतरा';
        }
        if (str === 'eighteen') {
            histr[j] = ' अठरा';
        }
        if (str === 'nineteen') {
            histr[j] = ' एकोणीस';
        }

        if (str === 'twenty') {
            if (str1 === 'one') {
                histr[j] = ' एकवीस';
            } else if (str1 === 'two') {
                histr[j] = ' बावीस';
            } else if (str1 === 'three') {
                histr[j] = ' तेवीस';
            } else if (str1 === 'four') {
                histr[j] = ' चोवीस';
            } else if (str1 === 'five') {
                histr[j] = ' पंचवीस';
            } else if (str1 === 'six') {
                histr[j] = ' सव्वीस';
            } else if (str1 === 'seven') {
                histr[j] = ' सत्तावीस';
            } else if (str1 === 'eight') {
                histr[j] = ' अठ्ठावीस';
            } else if (str1 === 'nine') {
                histr[j] = ' एकोणतीस';
            } else {
                histr[j] = ' वीस';
                i--;
            }
            i++;
        }


        if (str === 'thirty') {

            if (str1 === 'one') {
                histr[j] = ' एकतीस';

            } else if (str1 === 'two') {
                histr[j] = ' बत्तीस';

            } else if (str1 === 'three') {
                histr[j] = ' तेहतीस';

            } else if (str1 === 'four') {
                histr[j] = ' चौंतीस';

            } else if (str1 === 'five') {
                histr[j] = ' पस्तीस';

            } else if (str1 === 'six') {
                histr[j] = ' छत्तीस';

            } else if (str1 === 'seven') {
                histr[j] = ' सदतीस';

            } else if (str1 === 'eight') {
                histr[j] = ' अडोतीस';

            } else if (str1 === 'nine') {
                histr[j] = ' एकोणचाळीस';

            } else {
                histr[j] = ' तीस';
                i--;
            }
            i++;
        }
        if (str === 'forty') {
            if (str1 === 'one') {
                histr[j] = ' एक्केचाळीस';

            } else if (str1 === 'two') {
                histr[j] = ' बेचाळीस';

            } else if (str1 === 'three') {
                histr[j] = ' तत्रेचाळीस';

            } else if (str1 === 'four') {
                histr[j] = ' चौरेचाळीस';

            } else if (str1 === 'five') {
                histr[j] = ' पंचेचाळीस';

            } else if (str1 === 'six') {
                histr[j] = ' सेहचाळीस';

            } else if (str1 === 'seven') {
                histr[j] = ' सत्तेचाळीस';

            } else if (str1 === 'eight') {
                histr[j] = ' अठ्ठेचाळीस';

            } else if (str1 === 'nine') {
                histr[j] = ' एकोणपन्नास';

            } else {
                histr[j] = ' चाळीस';
                i--;
            }
            i++;
        }
        if (str === 'fifty') {
            if (str1 === 'one') {
                histr[j] = ' एक्कावन्न';

            } else if (str1 === 'two') {
                histr[j] = ' बावन्न';

            } else if (str1 === 'three') {
                histr[j] = ' त्रेपन्न';

            } else if (str1 === 'four') {
                histr[j] = ' चोपन्न';

            } else if (str1 === 'five') {
                histr[j] = ' पंचावन्न';

            } else if (str1 === 'six') {
                histr[j] = ' छप्पन्न';

            } else if (str1 === 'seven') {
                histr[j] = ' सत्तावन्न';

            } else if (str1 === 'eight') {
                histr[j] = ' अठ्ठावन्न';

            } else if (str1 === 'nine') {
                histr[j] = ' एकोणसाठ';

            } else {
                histr[j] = ' पन्नास';
                i--;
            }
            i++;
        }
        if (str === 'sixty') {
            if (str1 === 'one') {
                histr[j] = ' एकसष्ठ';

            } else if (str1 === 'two') {
                histr[j] = ' बासष्ठ';

            } else if (str1 === 'three') {
                histr[j] = ' त्रेसष्ठ';

            } else if (str1 === 'four') {
                histr[j] = ' चौसष्ठ';

            } else if (str1 === 'five') {
                histr[j] = ' पासष्ठ';

            } else if (str1 === 'six') {
                histr[j] = ' सहासष्ठ';

            } else if (str1 === 'seven') {
                histr[j] = ' सदुसष्ठ';

            } else if (str1 === 'eight') {
                histr[j] = ' अडुसष्ठ';

            } else if (str1 === 'nine') {
                histr[j] = ' एकोणसत्तर';

            } else {
                histr[j] = ' साठ';
                i--;
            }

            i++;
        }
        if (str === 'seventy') {
            if (str1 === 'one') {
                histr[j] = ' एक्काहत्तर';

            } else if (str1 === 'two') {
                histr[j] = ' बाहत्तर';

            } else if (str1 === 'three') {

                histr[j] = ' त्र्याहत्तर';

            } else if (str1 === 'four') {
                histr[j] = ' चौर्‍याहत्तर';

            } else if (str1 === 'five') {
                histr[j] = ' पंच्याहत्तर';

            } else if (str1 === 'six') {
                histr[j] = ' शहात्तर';

            } else if (str1 === 'seven') {
                histr[j] = ' सत्याहत्तर';

            } else if (str1 === 'eight') {
                histr[j] = ' अठ्ठ्याहत्तर';

            } else if (str1 === 'nine') {
                histr[j] = ' एकोणऐंशी';

            } else {
                histr[j] = ' सत्तर';
                i--;
            }
            i++;
        }
        if (str === 'eighty') {
            if (str1 === 'one') {
                histr[j] = ' एक्याऐंशी';

            } else if (str1 === 'two') {
                histr[j] = ' ब्याऐंशी';

            } else if (str1 === 'three') {

                histr[j] = ' त्र्याऐंशी';

            } else if (str1 === 'four') {
                histr[j] = ' चौरेऐंशी';

            } else if (str1 === 'five') {
                histr[j] = ' पंच्याऐंशी';

            } else if (str1 === 'six') {
                histr[j] = ' शहाऐंशी';

            } else if (str1 === 'seven') {
                histr[j] = ' सत्तेऐंशी';

            } else if (str1 === 'eight') {
                histr[j] = '  अठ्ठ्याऐंशी';

            } else if (str1 === 'nine') {
                histr[j] = ' एकोणनव्वद';

            } else {
                histr[j] = ' ऐंशी';
                i--;

            }
            i++;
        }
        if (str === 'ninety') {
            if (str1 === 'one') {
                histr[j] = ' एक्याण्णव';

            } else if (str1 === 'two') {
                histr[j] = ' ब्याण्णव';

            } else if (str1 === 'three') {

                histr[j] = ' त्र्याण्णव';

            } else if (str1 === 'four') {
                histr[j] = ' चौऱ्याण्णव';

            } else if (str1 === 'five') {
                histr[j] = ' पंच्याण्णव';

            } else if (str1 === 'six') {
                histr[j] = ' शह्याण्णव';

            } else if (str1 === 'seven') {
                histr[j] = ' सत्त्याण्णव';

            } else if (str1 === 'eight') {
                histr[j] = ' अठ्ठ्याण्णव';

            } else if (str1 === 'nine') {
                histr[j] = ' नव्व्याण्णव';

            } else {
                histr[j] = 'नव्वद';
                i--;

            }

            i++;

        }
        j++;

    } //end of for loop

    for (q = 0; q < histr.length; q++) {
        result += histr[q];
    }
    return result;
}

function convertNumberToWords(number, translateKey = englishLanguage) {
	if(typeof number == "string"){
        number = parseInt(number);
        if(isNaN(number))return ""
    }else if(isNaN(number)){
		return "";
	}
	let words = convert(number);
	if(translateKey == marathiLanguage){
		return convertToMarathi(words);
	}else{
		return words;
	}
}

module.exports = {
	convertNumberToWords,
	marathiLanguage,
	englishLanguage
}

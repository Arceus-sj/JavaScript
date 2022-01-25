
function wordCounter(para, lengthLimit) {
    if(para.length > lengthLimit) {
        let lengthExcided = para.length - lengthLimit;
        console.log(`You have written ${para.length} characters. And ${lengthExcided} extra character used.`);
    }
    else {
        let wordRemain = lengthLimit - para.length;
        console.log(`You have written ${para.length} characters. And ${wordRemain} character remain.`);

    }
}


let para = "Hello, I am Arceus-SJ";

const fixParaLength = 10;


wordCounter(para, fixParaLength);


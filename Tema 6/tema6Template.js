const divNode = document.createElement('div');

divNode.style.width = '100vw';
divNode.style.height = '100vh';
divNode.style.display = 'flex';
divNode.style.justifyContent = 'space-around';

const bodyNode = document.getElementsByTagName('body')[0];
bodyNode.appendChild(divNode);

const getRandomTopMargin = (element) => {
    const elementHeight = parseInt(element.style.height, 10);
    return Math.floor(Math.random()*(window.innerHeight-elementHeight));
}

const div1Node = document.createElement('div');

div1Node.style.width = '300px';
div1Node.style.height = '300px';
div1Node.style.backgroundColor = 'blue';
div1Node.style.position = 'relative';
div1Node.style.top = String(getRandomTopMargin(div1Node)) + 'px';

const text1Node = document.createTextNode('Sunt primul div');
div1Node.appendChild(text1Node);

divNode.appendChild(div1Node);



const div2Node = document.createElement('div');

div2Node.style.width = '300px';
div2Node.style.height = '300px';
div2Node.style.backgroundColor = 'pink';
div2Node.style.position = 'relative';
div2Node.style.top = String(getRandomTopMargin(div2Node)) + 'px';

const text2Node = document.createTextNode('Sunt al doilea div');
div2Node.appendChild(text2Node);

divNode.appendChild(div2Node);



const div3Node = document.createElement('div');

div3Node.style.width = '300px';
div3Node.style.height = '300px';
div3Node.style.backgroundColor = 'aqua';
div3Node.style.position = 'relative';
div3Node.style.top = String(getRandomTopMargin(div3Node)) + 'px';

const text3Node = document.createTextNode('Sunt al treilea div');
div3Node.appendChild(text3Node);

divNode.appendChild(div3Node);
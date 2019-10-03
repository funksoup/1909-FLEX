// Our representation of the DOM as a JS object.
const root = document.getElementById('root');

const ourTree = {
  // YOUR CODE
  type: 'div',
  style: {
  	width: '100%',
  	height: '25%',
  	border: 'solid 1px black',
  	['background-color']: 'red';
  	
  },

  children: [

  }




  	'div':
  		{ 'div': {
  			"div":{},
  			"attribute"
  		},
  		"attribute": {
  				"backgroundColor": "red",
  				"width":100%,
  				"height":25%
  			}

  		}
	  	
// color: red,
  		// border: solid 1px black;
	
};


const addNode = () => {
		const newDiv = document.createElement('div');
		const newContent = document.createTextNode('hello there');
		const newButton = document.createElement('button');
		const addToRoot = document.querySelector('#root');

		newButton.innerHTML = 'click me plz';

		newDiv.appendChild(newContent);
		newDiv.style.backgroundColor = "red";
		newDiv.style.width = "100%";
		newDiv.style.height = "25%";

		newDiv.appendChild(newButton);
		addToRoot.appendChild(newDiv);

			const newGreenDiv = document.createElement('div');
			const newGreenContent = document.createTextNode('im a green box');

			newGreenDiv.appendChild(newGreenContent);
			newGreenDiv.style.backgroundColor = "green";
			newGreenDiv.style.width = "25%";
			newGreenDiv.style.height = "50%";

			addToRoot.appendChild(newGreenDiv);
	};



addNode();

const DOMRenderer = {
  append: (node, child) => node.appendChild(child),
  create: type => document.createElement(type),
  createText: str => document.createTextNode(str),
  remove: el => el.parentNode.removeChild(el),
};

// The function that uses the rendering API object above (DOMRenderer) to build the page as expected!
const treeMaker = (soil, tree, renderer) => {
  // YOUR CODE

  const currentTreeNode - renderer.create(tree,type);

  Object.entries(tree).forEach(pairOfKeyAndVal) = {

  }

};



// DONT TOUCH BELOW
treeMaker(root, ourTree, DOMRenderer);

window.treeMaker = treeMaker;
window.ourTree = ourTree;
window.DOMRenderer = DOMRenderer;

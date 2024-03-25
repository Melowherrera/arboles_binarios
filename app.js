class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Función para determinar si dos árboles binarios son idénticos
function sonIdenticos(arbolA, arbolB) {
    if (!arbolA && !arbolB) {
        return true;
    }
    if (!arbolA || !arbolB) {
        return false;
    }
    return arbolA.value === arbolB.value &&
           sonIdenticos(arbolA.left, arbolB.left) &&
           sonIdenticos(arbolA.right, arbolB.right);
}

// Función para obtener una copia de un árbol binario
function copiarArbol(arbol) {
    if (!arbol) {
        return null;
    }
    let copia = new TreeNode(arbol.value);
    copia.left = copiarArbol(arbol.left);
    copia.right = copiarArbol(arbol.right);
    return copia;
}

// Función para visualizar los nodos en el nivel n de un árbol binario
function nodosEnNivel(arbol, nivel) {
    if (!arbol) {
        return;
    }
    if (nivel === 0) {
        console.log(arbol.value);
    } else {
        nodosEnNivel(arbol.left, nivel - 1);
        nodosEnNivel(arbol.right, nivel - 1);
    }
}

// Función para obtener el número de hojas de un árbol binario
function numeroDeHojas(arbol) {
    if (!arbol) {
        return 0;
    }
    if (!arbol.left && !arbol.right) {
        return 1;
    }
    return numeroDeHojas(arbol.left) + numeroDeHojas(arbol.right);
}

// Ejemplo de uso
let arbolA = new TreeNode(1);
arbolA.left = new TreeNode(2);
arbolA.right = new TreeNode(3);

let arbolB = new TreeNode(1);
arbolB.left = new TreeNode(2);
arbolB.right = new TreeNode(3);

console.log("¿Son idénticos?", sonIdenticos(arbolA, arbolB));

let copiaArbolA = copiarArbol(arbolA);
console.log("Copia de Arbol A:", copiaArbolA);

console.log("Nodos en nivel 1 de Arbol A:");
nodosEnNivel(arbolA, 1);

console.log("Número de hojas en Arbol A:", numeroDeHojas(arbolA));

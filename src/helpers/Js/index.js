import { findDOMNode } from 'react-dom';

// взять событие клика, возможно не только клика
// найти элемент на котором произошло событие
// по дереву иерархии элементов до самого document найти елемент elem
export const elemInvolvedInEvent = ( event, element ) => {
    console.log( event);
    return false;
}

// возвращает функцию, записывающую в targetObject свойство propertyName,
// содержащее ссылку на ReactElement и его DOMNode
export const createRef = ( targetObject, propertyName ) => ( elem ) => {
    targetObject[propertyName] = {
        elem,
        dom: findDOMNode(elem)
    };
}
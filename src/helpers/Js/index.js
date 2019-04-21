import { findDOMNode } from 'react-dom';

// взять событие клика, возможно не только клика
// найти элемент на котором произошло событие
// по дереву иерархии элементов до самого document найти елемент elem
export const elemInvolvedInEvent = ( event, element ) => {
    return !!event.path.find( el => el === element );
}

// возвращает функцию, записывающую в targetObject свойство propertyName,
// содержащее ссылку на ReactElement и его DOMNode
export const createRef = ( targetObject, propertyName ) => ( elem ) => {
    targetObject[propertyName] = {
        elem,
        dom: findDOMNode(elem)
    };
}

// возвращает объект, над каждым элементом которого совершен method
// method( val, key, i ) 
export const mapObject = ( obj, method ) => {
    let ret = {};
    Object.keys( obj ).forEach( ( key, i ) => ret[key] = method( obj[key], key, i ) )
    return ret;
}
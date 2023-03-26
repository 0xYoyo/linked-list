const node = () => {
  let value = null;
  let nextNode = null;
  return { value, nextNode };
};

const linkedList = (() => {
  let head = null;
  // let pointer = head;
  const append = (val) => {
    const newNode = node();
    newNode.value = val;

    if (head == null) {
      head = newNode;
    } else {
      let pointer = head;
      while (pointer.nextNode != null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
    }
  };

  const prepend = (val) => {
    const newNode = node();
    newNode.value = val;
    // let p = head;
    newNode.nextNode = head;
    head = newNode;
  };

  const size = () => {
    if (head == null) {
      return 0;
    } else {
      let counter = 1;
      let pointer = head;
      while (pointer.nextNode != null) {
        counter++;
        pointer = pointer.nextNode;
      }
      return counter;
    }
  };

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    let tail = head;
    while (tail.nextNode != null) {
      tail = tail.nextNode;
    }
    return tail;
  };

  const at = (index) => {
    if (index >= size() || index < 0) {
      return null;
    } else {
      let pointer = head;
      let counter = 0;
      while (counter != index) {
        counter++;
        pointer = pointer.nextNode;
      }
      console.log(pointer);
      return pointer;
    }
  };

  const pop = () => {
    if (head != null) {
      if (head.nextNode == null) {
        head = null;
      } else {
        let pointer = head;
        while (pointer.nextNode.nextNode != null) {
          pointer = pointer.nextNode;
        }
        pointer.nextNode = null;
      }
    }
  };

  const contains = (val) => {
    let pointer = head;
    while (pointer != null) {
      if (pointer.value == val) {
        return true;
      } else {
        pointer = pointer.nextNode;
      }
    }
    return false;
  };

  const find = (val) => {
    let pointer = head;
    let counter = 0;
    while (pointer != null) {
      if (pointer.value == val) {
        return counter;
      } else {
        pointer = pointer.nextNode;
        counter++;
      }
    }
    return null;
  };

  const listToString = () => {
    let pointer = head;
    let str = ``;
    while (pointer != null) {
      str += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    str += `null`;
    console.log(str);
  };

  const printList = () => {
    let p = head;
    console.log(p);
    while (p.nextNode != null) {
      p = p.nextNode;
      console.log(p);
    }
  };
  return {
    head,
    append,
    prepend,
    size,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    listToString,
    printList,
  };
})();

// Tests
linkedList.append(234);
linkedList.append(13);
linkedList.append(48);
linkedList.printList();
console.log(linkedList.size());
linkedList.prepend(69);
linkedList.printList();
console.log(linkedList.size());
console.log(linkedList.getHead());
console.log(linkedList.getTail());
linkedList.at(7);
linkedList.at(2);
linkedList.pop();
linkedList.printList();
console.log(linkedList.contains(17));
console.log(linkedList.contains(13));
console.log(linkedList.find(13));
linkedList.listToString();

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
      console.log(0);
    } else {
      let counter = 1;
      let pointer = head;
      while (pointer.nextNode != null) {
        counter++;
        pointer = pointer.nextNode;
      }
      console.log(counter);
    }
  };

  const printList = () => {
    let p = head;
    console.log(p);
    while (p.nextNode != null) {
      p = p.nextNode;
      console.log(p);
    }
  };
  return { head, append, prepend, size, printList };
})();

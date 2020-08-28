function testable(target) {
  console.log(target);
  target.isTestable = true;
  target.prototype.getData = () => {
    console.log(new Date());
  };
}

export default testable;

function ButtonClick() {

  const showMessage = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <button onClick={showMessage}>Click Me</button>
    </div>
  );
}

export default ButtonClick;
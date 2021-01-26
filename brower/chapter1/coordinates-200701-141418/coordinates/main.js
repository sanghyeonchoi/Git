const horizontal = document.querySelector(".horizontal"),
  vertical = document.querySelector(".vertical"),
  target = document.querySelector(".target"),
  targetPoint = document.querySelector(".target-point");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX,
    y = event.clientY;
  console.log(`${x} ,${y}`);

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  targetPoint.style.left = `${x}px`;
  targetPoint.style.top = `${y}px`;
  targetPoint.innerHTML = `${x}, ${y}`;
});

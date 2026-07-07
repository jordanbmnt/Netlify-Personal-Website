import "./style.css"

export const Home = () => {
  // const rootElement = document.documentElement;
  // const rootStyles = window.getComputedStyle(rootElement);

  document.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // --- 1. Hue: slide within purple range (260–290) ---
    const H = 260 + (mouseX / viewportWidth) * 30;

    // --- 2. Saturation variations (still monochromatic) ---
    const S1 = 60 + (mouseX / viewportWidth) * 30; // 60–90%
    const S2 = S1 - 15; // softer variation

    // --- 3. Lightness variations ---
    const L1 = 40 + (mouseY / viewportHeight) * 20; // 40–60%
    const L2 = L1 + 15; // lighter tint

    // --- 4. Apply purple color variations ---
    document.documentElement.style.setProperty(
      '--myColor',
      `hsl(${H}, ${S1}%, ${L1}%)`
    );

    document.documentElement.style.setProperty(
      '--myColor2',
      `hsl(${H}, ${S2}%, ${L2}%)`
    );
  });



  const bd = document.getElementsByTagName("body")[0];
  bd.onauxclick = (e) => {
    if (e.target instanceof HTMLElement) {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
        e.target.style.transition = "400ms cubic-bezier(0.175, 2.885, 0.32, 2.275)";
        e.target.style.border = "5px solid transparent";
        return;
      }
    };
  }

  return (
    <div>
      <section className="intro">
        <img src="https://images.seeklogo.com/logo-png/34/1/purple-logo-png_seeklogo-340331.png" alt="pic" />
        <h1>Lorem ipsum dolor sit amet.</h1>
      </section>
      <section className="hero">
        <div>
          <h1>Welcome to the Home Page</h1>
          <p>This is the main landing page of the website.</p>
        </div>
        <div>
          <h1>Welcome to the Home Page</h1>
          <p>This is the main landing page of the website.</p>
        </div>
      </section>
      <section></section>
    </div>
  );
}
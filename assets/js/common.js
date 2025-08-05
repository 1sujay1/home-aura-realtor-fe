document.addEventListener("DOMContentLoaded", function () {
  // Create WhatsApp icon container
  const waContainer = document.createElement("div");
  waContainer.style.position = "fixed";
  waContainer.style.right = "20px";
  waContainer.style.bottom = "20px";
  waContainer.style.zIndex = "1000";
  waContainer.style.cursor = "pointer";

  // WhatsApp SVG icon
  waContainer.innerHTML = `
  <a href="https://wa.me/919952402011" 
     target="_blank" 
     rel="noopener noreferrer" 
     aria-label="Chat on WhatsApp" 
     style="display:inline-block; width:56px; height:56px;">
    <svg xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 32 32" 
         width="56" 
         height="56">
      <path fill="#25D366" d="M16.043 3c7.18 0 13 5.82 13 13 0 7.18-5.82 13-13 13-2.176 0-4.22-.553-6.04-1.527l-6.118 1.59 1.63-5.96C4.92 21.07 3 18.698 3 16c0-7.18 5.82-13 13.043-13zm0-3C7.223 0 0 7.16 0 16c0 3.14 1 6.048 2.69 8.44L.09 32l7.73-2.01C10.338 31.57 13.12 32 16.043 32c8.84 0 16-7.16 16-16S24.883 0 16.043 0z"/>
      <path fill="#FFF" d="M24.054 19.598c-.35-.18-2.08-1.025-2.4-1.143-.32-.118-.55-.18-.78.18s-.9 1.144-1.1 1.382c-.2.237-.4.27-.75.09-.35-.18-1.48-.55-2.83-1.76-1.05-.94-1.76-2.096-1.96-2.445-.2-.35-.02-.537.15-.716.155-.153.35-.396.525-.594.18-.2.237-.355.356-.594.118-.237.06-.445-.03-.62-.09-.18-.78-1.875-1.07-2.56-.28-.675-.56-.58-.78-.59-.2-.01-.44-.01-.68-.01s-.62.09-.95.445c-.33.355-1.25 1.22-1.25 2.98 0 1.76 1.28 3.464 1.46 3.704.18.237 2.5 3.82 6.06 5.36.847.365 1.507.583 2.022.743.85.27 1.62.23 2.23.14.68-.1 2.08-.85 2.37-1.67.29-.82.29-1.525.2-1.67-.09-.15-.32-.24-.67-.42z"/>
    </svg>
  </a>
`;

  document.body.appendChild(waContainer);
});

<slot />

<style>
  :global(body) {
    position: relative;
    max-width: 100%;
    overflow-x: hidden;
    background: #260352;
    font-family: "Montserrat";
    font-weight: "SemiBold";
  }
  :global(span) {
    color: rgba(255, 255, 255, 1);
  }
  :root {
      --shadow-color: 0deg 0% 0%;
      --shadow-elevation-low:
          0.4px 0.3px 0.6px hsl(var(--shadow-color) / 0.34),
          0.6px 0.6px 1px -1.1px hsl(var(--shadow-color) / 0.37),
          1.5px 1.4px 2.4px -2.1px hsl(var(--shadow-color) / 0.41);
      --shadow-elevation-medium:
          0.4px 0.3px 0.6px hsl(var(--shadow-color) / 0.28),
          1.1px 1px 1.8px -0.5px hsl(var(--shadow-color) / 0.3),
          2.1px 1.9px 3.3px -1.1px hsl(var(--shadow-color) / 0.32),
          4.1px 3.7px 6.5px -1.6px hsl(var(--shadow-color) / 0.34),
          7.7px 7px 12.3px -2.1px hsl(var(--shadow-color) / 0.36);
      --shadow-elevation-high:
          0.4px 0.3px 0.6px hsl(var(--shadow-color) / 0.26),
          2.1px 1.9px 3.3px -0.2px hsl(var(--shadow-color) / 0.27),
          3.8px 3.5px 6.1px -0.5px hsl(var(--shadow-color) / 0.28),
          5.7px 5.2px 9.1px -0.7px hsl(var(--shadow-color) / 0.29),
          8.2px 7.5px 13.1px -1px hsl(var(--shadow-color) / 0.3),
          11.7px 10.6px 18.6px -1.2px hsl(var(--shadow-color) / 0.31),
          16.3px 14.8px 25.9px -1.4px hsl(var(--shadow-color) / 0.32),
          22.6px 20.5px 35.9px -1.7px hsl(var(--shadow-color) / 0.32),
          30.7px 27.9px 48.8px -1.9px hsl(var(--shadow-color) / 0.33),
          41.1px 37.4px 65.4px -2.1px hsl(var(--shadow-color) / 0.34);
  }

</style>
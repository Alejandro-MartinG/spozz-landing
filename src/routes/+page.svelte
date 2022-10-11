<script>
  import Layout from "svelte-fluid-layout";
</script>

<Layout>
  <header slot="header">My Header</header>
  <main slot="main">My Main</main>
  <footer slot="footer">Footer</footer>
</Layout>

<style>
  :global(.svelte-fluid-layout-large main) {
    width: 100%;
    height: 3141px;
    background: rgb(38, 3, 82);
  }

  :global(.svelte-fluid-layout-small main) {
    width: 100%;
    height: 1201px;
    background: rgb(38, 3, 82);
  }
</style>
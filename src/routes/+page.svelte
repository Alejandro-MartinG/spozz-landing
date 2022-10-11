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
    width: 66%;
  }
</style>
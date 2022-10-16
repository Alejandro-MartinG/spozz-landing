<script>
  import Top from "../components/top.svelte"
  import Mid from "../components/mid.svelte"
  import Bot from "../components/bot.svelte"
  import Footer from "../components/footer.svelte"
  import Logo from "../components/logo.svelte"
  import Grid from 'svelte-grid-responsive'
</script>

<Grid container gutter={20}>
  <Logo></Logo>
  <Top></Top>
  <Mid></Mid>
  <div></div>
  <Bot></Bot>
  <Footer></Footer>
</Grid>

<style>
</style>
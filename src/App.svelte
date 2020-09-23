<style global>
  @import "../static/tailwind.css";
  #routify-app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>

<Router routes={routes} />

<script>
  import { Router } from "@sveltech/routify"
  import { routes } from "../.routify/routes"
</script>

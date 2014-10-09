<!-- javascript templates -->
<!-- top box -->
<script type="text/template" id="top_box">
  <img class="little_me" src= "<%= avatar_url %>" />
  <span class="username"><%= login %></span>
</script>


<!-- side bar -->
<script type="text/template" id="side_box">
  <img class="me" src= "<%= avatar_url %>" />
  <h1 class="name"><%= name %></h1>
  <h2 class="login"> <%= login %> </h2>
  <span class="location">United States</span>
  <span class="mail"><%= email %></span>
  <span class="joined">Joined on September 22, 2014</span>

  <li class="a"><%= followers %></li>
  <li class="b"><%= public_gists %></li>
  <li class="c"><%= following %></li>


</script>

document.addEventListener("DOMContentLoaded", InsertHeaderContent);

function InsertHeaderContent() {
  document.getElementById("HeaderContent").innerHTML = `
  <!-- Header Navigation Collapsed Toggle -->
  <div id='Header_NavigationToggle_Wrapper'>
    <img
      id='Header_NavigationToggle'
      src='/Resources/Icons/Icon feather-menu_white.png'
      alt='Menu Icon'
      onclick='Header_ToggleNavigation()'
    />
  </div>

  <!-- Header Title -->
  <a href='/' id='Header_TitleContainer'>
    <div id='Header_LogoWrapper'>
      <img
        id='Header_Logo'
        src='/Resources/Icons/Logo CE White.png'
        alt='Logo'
      />
    </div>
    <h1 id='Header_Title'>Cardinal Engine</h1>
  </a>

  <!-- Header Navigation -->
  <div id='Header_Navigation'>
    <div class='Header_Navigation_Item'>
      <div class='Header_Navigation_Item_Head'>Showcase</div>
      <div class='Header_Navigation_Item_Head_Line'></div>
      <div class='Header_Navigation_Item_Body'>
        <a
          href='/Showcase/Features/'
          class='Header_Navigation_Item_Body_Entry'
          >Features</a
        >
        <a
          href='/Showcase/Gallery'
          class='Header_Navigation_Item_Body_Entry'
          >Gallery</a
        >
        <a href='/Showcase/Games/' class='Header_Navigation_Item_Body_Entry'
          >Games</a
        >
      </div>
    </div>
    <div class='Header_Navigation_Item'>
      <div class='Header_Navigation_Item_Head'>Progress</div>
      <div class='Header_Navigation_Item_Head_Line'></div>
      <div class='Header_Navigation_Item_Body'>
        <a href='/Progress/News/' class='Header_Navigation_Item_Body_Entry'
          >News</a
        >
        <a
          href='/Progress/RoadMap/'
          class='Header_Navigation_Item_Body_Entry'
          >Road Map</a
        >
        <a
          href='/Progress/Progress/'
          class='Header_Navigation_Item_Body_Entry'
          >Progress</a
        >
        <a
          href='/Progress/DevLog/'
          class='Header_Navigation_Item_Body_Entry'
          >Dev-Log</a
        >
        <a
        href='/Progress/ToDo/'
        class='Header_Navigation_Item_Body_Entry'
        >ToDo</a
      >
      </div>
    </div>
    <div class='Header_Navigation_Item'>
      <div class='Header_Navigation_Item_Head'>Community</div>
      <div class='Header_Navigation_Item_Head_Line'></div>
      <div class='Header_Navigation_Item_Body'>
        <a
          href='/Community/Forum/'
          class='Header_Navigation_Item_Body_Entry'
          >Forum</a
        >
        <a
        href='/Community/Developers/'
        class='Header_Navigation_Item_Body_Entry'
        >Developers</a
        >
      </div>
    </div>
    <div class='Header_Navigation_Item'>
      <div class='Header_Navigation_Item_Head'>Learn</div>
      <div class='Header_Navigation_Item_Head_Line'></div>
      <div class='Header_Navigation_Item_Body'>
        <a
          href='/Learn/Tutorials/'
          class='Header_Navigation_Item_Body_Entry'
          >Tutorials</a
        >
        <a href='/Learn/Examples/' class='Header_Navigation_Item_Body_Entry'
          >Examples</a
        >
        <a
          href='/Learn/Reference/'
          class='Header_Navigation_Item_Body_Entry'
          >Reference</a
        >
        <a
          href='https://github.com/DerGaijin/Cardinal-Engine'
          class='Header_Navigation_Item_Body_Entry'
          >Source</a
        >
      </div>
    </div>
  </div>

  <div id='Header_User' class='Header_User_Login'>
    <p
      class='Header_Navigation_Item Header_Navigation_Item_Head Header_User_Login'
      onclick=''
    >
      Sign In
    </p>
  </div>
`;
}

window.addEventListener("click", function (event) {
  let Navigation = document.getElementById("Header_Navigation");
  let NavigationToggle = document.getElementById("Header_NavigationToggle");
  if (NavigationToggle && Navigation) {
    if (
      event.target != NavigationToggle &&
      event.target != Navigation &&
      !Navigation.contains(event.target)
    ) {
      Navigation.classList.remove("Header_Navigation_Open");
    }
  }
});

function Header_ToggleNavigation() {
  let Navigation = document.getElementById("Header_Navigation");
  if (Navigation) {
    Navigation.classList.toggle("Header_Navigation_Open");
  }
}

function GoToSignIn(ReturnSite) {
  let Path = ReturnSite.replace(/(.*?)[^/]*\..*$/, "$1");
  window.location.href = "/User/SignIn/?Origin=" + Path;
}

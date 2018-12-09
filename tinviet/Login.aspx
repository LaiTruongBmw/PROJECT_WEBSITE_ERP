<%@ Page Language="C#" AutoEventWireup="true" %>
<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="../../assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="../../assets/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    Tinviet Software Solution
  </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />  
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="system/styles/font.css" />
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <!-- CSS Files -->
  <link href="system/styles/material-dashboard.minf066.css?v=2.1.0" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="system/styles/demo.css" rel="stylesheet" />
  <!-- Google Tag Manager -->
<script>
var NS = (document.layers) ? 1 : 0;// if browser is netscape
var IE = (document.all)    ? 1 : 0;
document.onkeypress = KeyHandler;
function KeyHandler(e) {
  if (NS) Key = e.which;
  else Key = window.event.keyCode;
  if (Key == 13 ) 
		return Checkform() ;
	return true;
}
function SetFocus() { 
    
    document.login_form.txtUserID.focus(); 
    return false; 
} 
function Checkform() 
{
    if (document.login_form.txtUserID.value.length < 1) {
        alert("Input your Company ID."); 
        document.login_form.txtUserID.focus(); 
        return false; 
    } 
    if (document.login_form.txtPassword.value.length < 1) { 
        alert("Input your Password."); 
        document.login_form.txtPassword.focus(); 
        return false; 
    }
    document.login_form.submit(); 
	return false;
 } 
</script>
</head>

<body class="off-canvas-sidebar" onload = "SetFocus()">
  <!-- Extra details for Live View on GitHub Pages -->
  <!-- Google Tag Manager (noscript) -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top text-white">
    <div class="container">
      <div class="navbar-wrapper">
        <a class="navbar-brand" href=""></a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
        <span class="sr-only">Toggle navigation</span>
        <span class="navbar-toggler-icon icon-bar"></span>
        <span class="navbar-toggler-icon icon-bar"></span>
        <span class="navbar-toggler-icon icon-bar"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="material-icons">dashboard</i> Dashboard
            </a>
          </li>
          <li class="nav-item ">
            <a href="#" class="nav-link">
              <i class="material-icons">person_add</i> Register
            </a>
          </li>
          <li class="nav-item  active ">
            <a href="#" class="nav-link">
              <i class="material-icons">fingerprint</i> Login
            </a>
          </li>
          <li class="nav-item ">
            <a href="#" class="nav-link">
              <i class="material-icons">lock_open</i> Lock
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
  <div class="wrapper wrapper-full-page">
    <div class="page-header login-page header-filter" filter-color="black" style="background-image: url('system/images/login/login.jpg'); background-size: cover; background-position: top center;">
      <!--   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " -->
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
            <form class="form" method="post" action="login_submit.aspx" onsubmit="return Checkform();"  name=login_form enctype="multipart/form-data">
              <div class="card card-login card-hidden">
                <div class="card-avatar">
                  <a href="">
                    <img class="img" src="system/images/login/logo.png">
                  </a>
                </div>
                <div class="card-body ">
                  <p class="card-description text-center"></p>
                  <span class="bmd-form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">face</i>
                        </span>
                      </div>
                      <input type="text" name=txtUserID class="form-control" placeholder="User Name...">
                    </div>
                  </span>
                  <span class="bmd-form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">lock_outline</i>
                        </span>
                      </div>
                      <input type="password" name=txtPassword class="form-control" placeholder="Password...">
                    </div>
                  </span>
                </div>
                <div class="card-footer justify-content-center">
                  <a href="#" onclick="Checkform()" class="btn btn-rose btn-round">Login</a>
                  <input type="hidden" id="Action" name="Action" value="LOGIN_PAGE" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container">
          <nav class="float-left">
            <ul>
              <li>
                <a href="http://www.tinvietsoft.com/">
                  Home
                </a>
              </li>
              <li>
                <a href="http://www.tinvietsoft.com/">
                  About Us
                </a>
              </li>
              <li>
                <a href="http://www.tinvietsoft.com/">
                  Blog
                </a>
              </li>
              <li>
                <a href="http://www.tinvietsoft.com/">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright float-right">
            &copy;
            <script>
              document.write(new Date().getFullYear())
            </script>, made with <i class="material-icons">favorite</i> by
            <a href="http://www.tinvietsoft.com/" target="_blank">Tinvietsoft</a> for a better web.
          </div>
        </div>
      </footer>
    </div>
  </div>
  <!--   Core JS Files   -->
  <script src="system/libs/login/jquery.min.js"></script>
  <script src="system/libs/login/popper.min.js"></script>
  <script src="system/libs/login/bootstrap-material-design.min.js"></script>
  <script src="system/libs/login/perfect-scrollbar.jquery.min.js"></script>
  <!--  Google Maps Plugin    -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Yno10-YTnLjjn_Vtk0V8cdcY5lC4plU"></script>
  <!-- Place this tag in your head or just before your close body tag. -->
  <script async defer src="system/libs/login/buttons.js"></script>
  <!-- Chartist JS -->
  <script src="system/libs/login/chartist.min.js"></script>
  <!--  Notifications Plugin    -->
  <script src="system/libs/login/bootstrap-notify.js"></script>
  <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="system/libs/login/material-dashboard.minf066.js?v=2.1.0" type="text/javascript"></script>
  <!-- Material Dashboard DEMO methods, don't include it in your project! -->
  <script src="system/libs/login/demo.js"></script>
  
  <script>
      $(document).ready(function() {
        $().ready(function() {
          $sidebar = $('.sidebar');
  
          $sidebar_img_container = $sidebar.find('.sidebar-background');
  
          $full_page = $('.full-page');
  
          $sidebar_responsive = $('body > .navbar-collapse');
  
          window_width = $(window).width();
  
          fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();
  
          if (window_width > 767 && fixed_plugin_open == 'Dashboard') {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
              $('.fixed-plugin .dropdown').addClass('open');
            }
  
          }
  
          $('.fixed-plugin a').click(function(event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
              if (event.stopPropagation) {
                event.stopPropagation();
              } else if (window.event) {
                window.event.cancelBubble = true;
              }
            }
          });
  
          $('.fixed-plugin .active-color span').click(function() {
            $full_page_background = $('.full-page-background');
  
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
  
            var new_color = $(this).data('color');
  
            if ($sidebar.length != 0) {
              $sidebar.attr('data-color', new_color);
            }
  
            if ($full_page.length != 0) {
              $full_page.attr('filter-color', new_color);
            }
  
            if ($sidebar_responsive.length != 0) {
              $sidebar_responsive.attr('data-color', new_color);
            }
          });
  
          $('.fixed-plugin .background-color .badge').click(function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
  
            var new_color = $(this).data('background-color');
  
            if ($sidebar.length != 0) {
              $sidebar.attr('data-background-color', new_color);
            }
          });
  
          $('.fixed-plugin .img-holder').click(function() {
            $full_page_background = $('.full-page-background');
  
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
  
  
            var new_image = $(this).find("img").attr('src');
  
            if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
              $sidebar_img_container.fadeOut('fast', function() {
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $sidebar_img_container.fadeIn('fast');
              });
            }
  
            if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
              var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
  
              $full_page_background.fadeOut('fast', function() {
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                $full_page_background.fadeIn('fast');
              });
            }
  
            if ($('.switch-sidebar-image input:checked').length == 0) {
              var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
              var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
  
              $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
              $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
            }
  
            if ($sidebar_responsive.length != 0) {
              $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
          });
  
          $('.switch-sidebar-image input').change(function() {
            $full_page_background = $('.full-page-background');
  
            $input = $(this);
  
            if ($input.is(':checked')) {
              if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeIn('fast');
                $sidebar.attr('data-image', '#');
              }
  
              if ($full_page_background.length != 0) {
                $full_page_background.fadeIn('fast');
                $full_page.attr('data-image', '#');
              }
  
              background_image = true;
            } else {
              if ($sidebar_img_container.length != 0) {
                $sidebar.removeAttr('data-image');
                $sidebar_img_container.fadeOut('fast');
              }
  
              if ($full_page_background.length != 0) {
                $full_page.removeAttr('data-image', '#');
                $full_page_background.fadeOut('fast');
              }
  
              background_image = false;
            }
          });
  
          $('.switch-sidebar-mini input').change(function() {
            $body = $('body');
  
            $input = $(this);
  
            if (md.misc.sidebar_mini_active == true) {
              $('body').removeClass('sidebar-mini');
              md.misc.sidebar_mini_active = false;
  
              $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
  
            } else {
  
              $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar('destroy');
  
              setTimeout(function() {
                $('body').addClass('sidebar-mini');
  
                md.misc.sidebar_mini_active = true;
              }, 300);
            }
  
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function() {
              window.dispatchEvent(new Event('resize'));
            }, 180);
  
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function() {
              clearInterval(simulateWindowResize);
            }, 1000);
  
          });
        });
      });
    </script>    
    <noscript>
      <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=111649226022273&amp;ev=PageView&amp;noscript=1" />
    </noscript>
    <script>
      $(document).ready(function() {
        md.checkFullPageBackgroundImage();
        setTimeout(function() {
          // after 1000 ms we add the class animated to the login/register card
          $('.card').removeClass('card-hidden');
        }, 700);
      });
    </script>
 
</body>
</html>
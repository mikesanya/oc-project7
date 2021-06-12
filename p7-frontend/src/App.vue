<template>
<div>
<header v-if="!$route.meta.hideNavbar">
			<div class="container">
				<div class="header-data">
					<div class="logo">
						<a href="index.html" title=""><img height="50" src="images/logo.png" alt=""></a>
					</div><!--logo end-->
					<div class="search-bar">
						<form>
							<input type="text" name="search" placeholder="Search...">
							<button type="submit"><i class="la la-search"></i></button>
						</form>
					</div><!--search-bar end-->
					<nav>
						<ul>
							<li>
								<router-link to="/" title="">
									<span><img src="images/icon1.png" alt=""></span>
									Home
								</router-link>
							</li>
						
						</ul>
					</nav><!--nav end-->
					<div class="menu-btn">
						<a href="#" title=""><i class="fa fa-bars"></i></a>
					</div><!--menu-btn end-->
					<div class="user-account">
						<div class="user-info">
							<img height="25" src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="">
							<a href="#" title>{{user.fullname}}</a>
							<i class="la la-sort-down"></i>
						</div>
						<div class="user-account-settingss">
							<h3>Online Status</h3>
							<ul class="on-off-status">
								<li>
									<div class="fgt-sec">
										<input type="radio" name="cc" id="c5">
										<label for="c5">
											<span></span>
										</label>
										<small>Online</small>
									</div>
								</li>
							</ul>
							<ul class="us-links">
								<li><a href="profile-account-setting.html" title="">Delete Account</a></li>
							</ul>
							<h3 class="tc"><router-link to="/login" title="">Logout</router-link></h3>
						</div><!--user-account-settingss end-->
					</div>
				</div><!--header-data end-->
			</div>
		
	</header><!--header end-->
	<router-view/>
</div>


</template>
<script>
export default {
	data(){
		return {
			user: JSON.parse(localStorage.getItem('user')) 
		}

	}

}

</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
    color: #42b983;
    }
}
}

</style>

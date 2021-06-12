<template>
<div>
<div class="forum-links-btn">
					<a href="#" title=""><i class="fa fa-bars"></i></a>
				</div>


		<section class="forum-page">
			<div class="container">
				<div class="forum-questions-sec">
					<div class="row">
						<div class="col-lg-8">
							<div class="forum-post-view">
								<div class="usr-question">
									<div class="usr_img">
										<img src="http://via.placeholder.com/60x60" alt="">
									</div>
									<div class="usr_quest">
										<h3>{{form.title}}</h3>
										<span><i class="fa fa-clock-o"></i>3 min ago</span>
										<img height="100" :src="form.media" alt="">
										<p>{{form.message}}</p>
									</div><!--usr_quest end-->
								</div><!--usr-question end-->
							</div><!--forum-post-view end-->
							<div class="next-prev">
								<a href="#" title="" class="fl-left">Preview</a>
								<a href="#" title="" class="fl-right">Next</a>
							</div><!--next-prev end-->
						</div>
						<div class="col-lg-4">
							<div class="widget widget-feat">
								<ul>
									<li>
										<i class="fa fa-heart"></i>
										<span>1185</span>
									</li>
									<li>
										<i class="fa fa-comment"></i>
										<span>1165</span>
									</li>
									<li>
										<i class="fa fa-share-alt"></i>
										<span>1120</span>
									</li>
									<li>
										<i class="fa fa-eye"></i>
										<span>1009</span>
									</li>
								</ul>
							</div><!--widget-feat end-->
							<div class="widget widget-user">
								<h3 class="title-wd">Top User of the Week</h3>
								<ul>
									<li>
										<div class="usr-msg-details">
											<div class="usr-ms-img">
												<img src="http://via.placeholder.com/50x50" alt="">
											</div>
											<div class="usr-mg-info">
												<h3>Jessica William</h3>
												<p>Graphic Designer </p>
											</div><!--usr-mg-info end-->
										</div>
										<span><img src="images/price1.png" alt="">1185</span>
									</li>
									<li>
										<div class="usr-msg-details">
											<div class="usr-ms-img">
												<img src="http://via.placeholder.com/50x50" alt="">
											</div>
											<div class="usr-mg-info">
												<h3>John Doe</h3>
												<p>PHP Developer</p>
											</div><!--usr-mg-info end-->
										</div>
										<span><img src="images/price2.png" alt="">1165</span>
									</li>
									<li>
										<div class="usr-msg-details">
											<div class="usr-ms-img">
												<img src="http://via.placeholder.com/50x50" alt="">
											</div>
											<div class="usr-mg-info">
												<h3>Poonam</h3>
												<p>Wordpress Developer </p>
											</div><!--usr-mg-info end-->
										</div>
										<span><img src="images/price3.png" alt="">1120</span>
									</li>
									<li>
										<div class="usr-msg-details">
											<div class="usr-ms-img">
												<img src="http://via.placeholder.com/50x50" alt="">
											</div>
											<div class="usr-mg-info">
												<h3>Bill Gates</h3>
												<p>C & C++ Developer </p>
											</div><!--usr-mg-info end-->
										</div>
										<span><img src="images/price4.png" alt="">1009</span>
									</li>
								</ul>
							</div><!--widget-user end-->
							<div class="widget widget-adver">
								<img src="http://via.placeholder.com/370x270" alt="">
							</div><!--widget-adver end-->
						</div>
					</div>
				</div><!--forum-questions-sec end-->
			</div>
		</section><!--forum-page end-->

		<footer>
			<div class="footy-sec mn no-margin">
				<div class="container">
					<ul>
						<li><a href="#" title="">Help Center</a></li>
						<li><a href="#" title="">Privacy Policy</a></li>
						<li><a href="#" title="">Community Guidelines</a></li>
						<li><a href="#" title="">Cookies Policy</a></li>
						<li><a href="#" title="">Career</a></li>
						<li><a href="#" title="">Forum</a></li>
						<li><a href="#" title="">Language</a></li>
						<li><a href="#" title="">Copyright Policy</a></li>
					</ul>
					<p><img src="images/copy-icon2.png" alt="">Copyright 2021</p>
					<img class="fl-rgt" src="images/logo2.png" alt="">
				</div>
			</div>
		</footer>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios'; 


@Options({
  components: {
    
  },
})
export default class Forumpostview extends Vue {
	
	form= {
			id:'',
			title: '',
			department: '',
			media: '',
			message: '',
			userId: ''
		}
  $route: any;

		beforeMount(){
			this.loadPost(this.$route.params.id)
			console.log(this.form)
			
		}
		
		loadPost(id:any){
				//Appi call - get
			axios.get("http://localhost:3000/api/posts/"+id,
			//authorization
			{headers: {authorization: 'Bearer ' + localStorage.getItem('token')}})
			.then((res) =>{
				//retrieving the posts
				this.form = res.data
				console.log(this.form)
			})
		}
}


</script>
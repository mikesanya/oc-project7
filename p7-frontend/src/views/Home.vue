<template>
<main>
			<div class="main-section">
				<div class="container">
					<div class="main-section-data">
						<div class="row">
							<div class="col-lg-3 col-md-4 pd-left-none no-pd">
								<div class="main-left-sidebar no-margin">
									<div class="user-data full-width">
										<div class="user-profile">
											<div class="username-dt">
												<div class="usr-pic">
													<img src="http://via.placeholder.com/100x100" alt="">
												</div>
											</div><!--username-dt end-->
											<div class="user-specs">
												<h3>{{user.fullname}}</h3>
											</div>
										</div><!--user-profile end-->
										<ul class="user-fw-status">
											<li>
												<a href="#" @click="deleteAccount(user.id)" title="">Delete Account</a>
											</li>
										</ul>
									</div><!--user-data end-->
									<div class="tags-sec full-width">
										<ul>
											<li><a href="#" title="">Help Center</a></li>
											<li><a href="#" title="">About</a></li>
											<li><a href="#" title="">Privacy Policy</a></li>
											<li><a href="#" title="">Community Guidelines</a></li>
											<li><a href="#" title="">Cookies Policy</a></li>
											<li><a href="#" title="">Career</a></li>
											<li><a href="#" title="">Language</a></li>
											<li><a href="#" title="">Copyright Policy</a></li>
										</ul>
										<div class="cp-sec">
											<img height="80" src="images/cm-logo.png" alt="">
											<p><img src="images/cp.png" alt="">Copyright 2021</p>
										</div>
									</div><!--tags-sec end-->
								</div><!--main-left-sidebar end-->
							</div>
							<div class="col-lg-6 col-md-8 no-pd">
								<div class="main-ws-sec">
									<div class="post-topbar">
										<div class="user-picy">
											<img src="http://via.placeholder.com/100x100" alt="">
										</div>
										<div class="post-st">
											<ul>
												<li><a class="post-jb active" href="#" title="">New Post</a></li>
											</ul>
										</div><!--post-st end-->
									</div><!--post-topbar end-->
									<div v-for="post in posts" :key="post.id" class="posts-section">
										<div class="post-bar">
											<div class="post_topbar">
												<div class="usy-dt">
													<img src="http://via.placeholder.com/50x50" alt="">
													<div class="usy-name">
														<h3>{{post.userName}}</h3>
														<span><img src="images/clock.png" alt="">3 min ago</span>
													</div>
												</div>
												<div class="ed-opts">
													<a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
												
												</div>
											</div>
											<div class="epi-sec">
												<ul class="descp">
													<li><span>{{post.department}} </span></li>
													
												</ul>
											</div>
											<div class="job_descp">
												<h3>{{post.title}}</h3>
												<img height="100" :src="post.media" alt="">
												<p>{{post.message}}  <a @click="readPost(post)" :href="'#/forum-post-view/'+post.id" title="">view more</a></p>
											</div>
											<div class="job-status-bar">
												<ul class="like-com">
													<li>
														<a href="#" @click="likePost(post)"><i class="la la-heart"></i>Like {{post.likes}}</a>
													</li>
													<ul v-if="user.id == post.userId">
														<li><a :href="'#/edit-post/'+post.id" title="">Edit Post</a></li>
														<li><a href="#" @click="deletePost(post.id)" title="">Delete Post</a></li>
													</ul> 
												</ul>
												<a><i class="la la-eye"></i>Views{{JSON.parse(post.usersRead).length}}</a>
											</div>
										</div><!--post-bar end-->
									
									</div><!--posts-section end-->
								</div><!--main-ws-sec end-->
							</div>
							<div class="col-lg-3 pd-right-none no-pd">
								<div class="right-sidebar">
									<div class="widget widget-about">
										<img height="100" src="images/wd-logo.png" alt="">
										<h3>Track Time on Groupomania</h3>
										<span>Pay only for the Hours worked</span>
										<div class="sign_link">
											<h3><a href="#" title="">Sign up</a></h3>
											<a href="#" title="">Learn More</a>
										</div>
									</div><!--widget-about end-->
								</div><!--right-sidebar end-->
							</div>
						</div>
					</div><!-- main-section-data end-->
				</div> 
			</div>
			<div class="post-popup job_post" id="post-form">
			<div class="post-project">
				<h3>Tell something to your team</h3>
				<div class="post-project-fields">
					<form @submit.prevent="handlesubmit">
						<div class="row">
							<div class="col-lg-12">
								<input type="text" v-model="form.title" placeholder="Title">
							</div>
							<div class="col-lg-12">
								<div class="inp-field">
									<select v-model="form.department">
										<option>Choose a department</option>
										<option>HR</option>
										<option>Admin</option>
										<option>Support</option>
										<option>Developers</option>
										<option>Management</option>
									</select>
								</div>
							</div>
							<div class="col-lg-12">
								<input type="hidden" v-model="form.media">
								<input type="file" @change="mediaSelected"/>
							</div>
						
							<div class="col-lg-12">
								<textarea v-model="form.message" placeholder="Message"></textarea>
							</div>
							<div class="col-lg-12">
								<ul>
									<li><button class="active" type="submit" value="post">Post</button></li>
									<li><a  @click="cancel" href="#" title="">Cancel</a></li>
								</ul>
							</div>
						</div>
					</form>
				</div><!--post-project-fields end-->
				<a href="#" title=""><i class="la la-times-circle-o"></i></a>
			</div><!--post-project end-->
		</div><!--post-project-popup end-->
		</main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios'; 


	@Options({
	components: {
	
	},
	})
	export default class Home extends Vue {
		user={id:'',fullname:''}
		form= {
			title: '',
			department: '',
			media: '',
			message: '',
			userId: this.user.id
		}
		posts =[]
		beforeMount(){
			this.loadAllPosts()
			this.user= JSON.parse(localStorage.getItem('user') || '{}' )
			this.form.userId= this.user.id
			console.log(this.user)
		}

		handlesubmit(){
			//Using FormData because of file post
			const _form = new FormData()
			_form.append('title', this.form.title)
			_form.append('userName', this.user.fullname)
			_form.append('department', this.form.department)
			_form.append('media', this.form.media)
			_form.append('message', this.form.message)
			_form.append('userId', this.form.userId)
			console.log(this.user.fullname)



			//Api call- post
			axios.post("http://localhost:3000/api/posts/",
			//the data
			_form,
			//authorization code
			{headers: { 
				'Authorization' : 'Bearer ' + localStorage.getItem('token')
				}
			}	
			)//Api Response
				.then( (res) =>{
				if(res.status == 201){
               
                this.form= {
                    title: '',
					department: '',
					media: '',
					message: '',
					userId: this.user.id
                };
				this.loadAllPosts()
            }

        }).catch(()=>{
            alert("something went wrong please try again,");
        })
		let postForm= document.getElementById("post-form")
		let appDiv= document.getElementById("app")
		if(postForm !=null && appDiv!= null){
			postForm.classList.remove("active")
			appDiv.classList.remove("overlay")
		}

	}


		loadAllPosts(){
			//Appi call - get
			axios.get("http://localhost:3000/api/posts",
			//authorization
			{headers: { authorization: 'Bearer ' + localStorage.getItem('token')}})
			.then( (res) =>{
			//retrieving the posts
				this.posts = res.data
				console.log('list of posts')
				console.log(this.posts)
			})
		}

		mediaSelected(event: { target: { files: string[]; }; }){
			this.form.media = event.target.files[0]
		}

		cancel(){
			let postForm= document.getElementById("post-form")
		let appDiv= document.getElementById("app")
		if(postForm !=null && appDiv!= null){
			postForm.classList.remove("active")
			appDiv.classList.remove("overlay")
			}
			
		}
		
		deletePost(id: string){
			
		//Api call- post
			axios.delete("http://localhost:3000/api/posts/"+id,
			
			
		//authorization code
			{headers: { 
				'Authorization' : 'Bearer ' + localStorage.getItem('token')
				}
			}
			).then( () =>{
				alert("deleted !")
				this.loadAllPosts()

        }).catch(()=>{
            alert("something went wrong please try again,");
        })
	}
	
likePost(post:any){
	let data ={
		_userId: this.user.id,
		like:0
	}
	post.usersLiked = JSON.parse(post.usersLiked);
	if(post.usersLiked.includes(this.user.id)){
		data.like=0
	}else{
		data.like=1
	}

	//Appi call - post
			axios.post("http://localhost:3000/api/posts/"+post.id +"/like",data,
	//authorization
			{headers: { authorization: 'Bearer ' + localStorage.getItem('token')}})
			.then( () =>{
				alert("post Liked !")
				this.loadAllPosts()
			}).catch(()=>{
				alert("something went wrong please try again");

			})

		}

		readPost(post:any){
			let data ={
			_userId: this.user.id,
		}
		post.usersRead = JSON.parse(post.usersRead);
	if(!post.usersRead.includes(this.user.id)){

	//Appi call - post
			axios.post("http://localhost:3000/api/posts/"+post.id +"/read",data,
	//authorization
			{headers: { authorization: 'Bearer ' + localStorage.getItem('token')}})
			.then( () =>{
				alert("post Read !")
				this.loadAllPosts()
			}).catch(()=>{
				alert("something went wrong please try again");

			})

		}
	}

	deleteAccount(id: string){
			if(confirm("Are you sure you want to delete this account?" )){
	//Api call- post
			axios.delete("http://localhost:3000/api/auth/"+id,
			
			
	//authorization code
			{headers: { 
				'Authorization' : 'Bearer ' + localStorage.getItem('token')
				}
			}
			).then( () =>{
				alert("deleted !")
				localStorage.clear()
				window.location.href="http://localhost:8080/#/login"

        }).catch(()=>{
            alert("something went wrong please try again,");
        })
			}
	}
}
</script>

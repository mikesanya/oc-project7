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
		<div class="">
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
						</div>
						<div class="col-lg-4">
							<div class="widget widget-feat">
								<ul>
									<li>
										<i class="fa fa-heart"></i>
										<span>6</span>
									</li>
									<li>
										<i class="fa fa-comment"></i>
										<span>9</span>
									</li>
									<li>
										<i class="fa fa-share-alt"></i>
										<span>10</span>
									</li>
									<li>
										<i class="fa fa-eye"></i>
										<span>4</span>
									</li>
								</ul>
							</div><!--widget-feat end-->
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
					<img height="100" src="images/cm-logo.png" alt="">
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
export default class Editpost extends Vue {

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
		
		loadPost(id: any){
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
			mediaSelected(event: any){
			this.form.media = event.target.files[0]
		}

		handlesubmit(){

			//Using FormData because of file post
			const _form = new FormData()
			_form.append('title', this.form.title)
			_form.append('department', this.form.department)
			_form.append('media', this.form.media)
			_form.append('message', this.form.message)




			//Api call- post
			axios.put("http://localhost:3000/api/posts/"+this.form.id,
			//the data
			_form,
			//authorization code
			{headers: { 
				'Authorization' : 'Bearer ' + localStorage.getItem('token')
				}
			}	
			)//Api Response
			.then( () =>{

				window.location.href="http://localhost:8080/#"
				
               
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
	
}
</script>